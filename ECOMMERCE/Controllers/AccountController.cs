using ECOMMERCE.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ECOMMERCE.DTO;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System;

namespace ECOMMERCE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> userManager;
        private readonly IConfiguration config;

        public AccountController(UserManager<AppUser> userManager, IConfiguration config)
        {
            this.userManager = userManager;
            this.config = config;
        }


        [HttpPost("signUp")]
        public async Task<IActionResult> signUp(signUpForm form)
        {

            try
            {
                AppUser user = new AppUser();
                user.UserName = form.UserName;
                user.PasswordHash = form.Password;
                IdentityResult result = await userManager.CreateAsync(user, form.Password);

                if (result.Succeeded == true)
                {
                    return Ok(user);
                }
                return BadRequest(result.Errors);
            }
            catch
            {
                return Problem("something went wrong");
            }

         
        }

        [HttpPost("signIn")]
        public async Task<IActionResult> signIn(signInForm form)
        {

            try{

                AppUser user = await userManager.FindByNameAsync(form.UserName);
                if (user == null) return Unauthorized("the user name or password is not correct");

                bool passIsCorrect = await userManager.CheckPasswordAsync(user, form.Password);
                if (!passIsCorrect) return Unauthorized("the user name or password is not correct");


                //claims
                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, user.UserName));
                claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
                claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));


                var roles = await userManager.GetRolesAsync(user);
                foreach (var role in roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }


                //create token
                SecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["jwt:key"]));
                SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                JwtSecurityToken token = new JwtSecurityToken(
                    issuer: config["jwt:issuer"],
                    audience: config["jwt:audiance"],
                    claims: claims,
                    expires: DateTime.Now.AddHours(3),
                    signingCredentials: creds
                );
                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), expiration = token.ValidTo });
            }
            catch
            {
                return Problem("something went wrong");
            }
        }
    }
}
