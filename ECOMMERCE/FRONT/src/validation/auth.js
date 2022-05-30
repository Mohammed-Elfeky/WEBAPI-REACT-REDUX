export const validateSignUp = ({ UserName, Password, ConfirmPassword }) => {
    
    if (UserName == '') return {field:"UserName",err:"the name is required"}  
    
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$/g
    if (!pattern.test(Password)) return {field:"Password",err:"Passwords must be at least 6 characters and have at least two non alphanumeric character\n and have at least one lowercase ('a'-'z') and have at least one uppercase ('A'-'Z')"}
    
    if(Password!==ConfirmPassword) return {field:"ConfirmPassword",err:"passwords don't match"}
    
    return 0
}