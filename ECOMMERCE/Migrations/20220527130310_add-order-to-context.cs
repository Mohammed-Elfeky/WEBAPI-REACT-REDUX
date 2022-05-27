using Microsoft.EntityFrameworkCore.Migrations;

namespace ECOMMERCE.Migrations
{
    public partial class addordertocontext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_AspNetUsers_u_id",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderProduct_Order_o_Id",
                table: "OrderProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderProduct_products_p_Id",
                table: "OrderProduct");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderProduct",
                table: "OrderProduct");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Order",
                table: "Order");

            migrationBuilder.RenameTable(
                name: "OrderProduct",
                newName: "orderProducts");

            migrationBuilder.RenameTable(
                name: "Order",
                newName: "orders");

            migrationBuilder.RenameIndex(
                name: "IX_OrderProduct_p_Id",
                table: "orderProducts",
                newName: "IX_orderProducts_p_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Order_u_id",
                table: "orders",
                newName: "IX_orders_u_id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_orderProducts",
                table: "orderProducts",
                columns: new[] { "o_Id", "p_Id" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_orders",
                table: "orders",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_orderProducts_orders_o_Id",
                table: "orderProducts",
                column: "o_Id",
                principalTable: "orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_orderProducts_products_p_Id",
                table: "orderProducts",
                column: "p_Id",
                principalTable: "products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_orders_AspNetUsers_u_id",
                table: "orders",
                column: "u_id",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orderProducts_orders_o_Id",
                table: "orderProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_orderProducts_products_p_Id",
                table: "orderProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_orders_AspNetUsers_u_id",
                table: "orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_orders",
                table: "orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_orderProducts",
                table: "orderProducts");

            migrationBuilder.RenameTable(
                name: "orders",
                newName: "Order");

            migrationBuilder.RenameTable(
                name: "orderProducts",
                newName: "OrderProduct");

            migrationBuilder.RenameIndex(
                name: "IX_orders_u_id",
                table: "Order",
                newName: "IX_Order_u_id");

            migrationBuilder.RenameIndex(
                name: "IX_orderProducts_p_Id",
                table: "OrderProduct",
                newName: "IX_OrderProduct_p_Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Order",
                table: "Order",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderProduct",
                table: "OrderProduct",
                columns: new[] { "o_Id", "p_Id" });

            migrationBuilder.AddForeignKey(
                name: "FK_Order_AspNetUsers_u_id",
                table: "Order",
                column: "u_id",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderProduct_Order_o_Id",
                table: "OrderProduct",
                column: "o_Id",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderProduct_products_p_Id",
                table: "OrderProduct",
                column: "p_Id",
                principalTable: "products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
