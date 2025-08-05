/* function chuyen(){
   
   if( document.getElementById("tendn").value=="" || document.getElementById("mk").value==""){
      document.getElementById("kq").innerHTML = "Không được bỏ trống thông tin !";
     
   }
   else{
      document.getElementById("kq").innerHTML = "Đăng ký thành công"
      window.location.replace("menu.html");
   }
 }*/

function chuyen() {
   //binh minh
    let tendn = document.getElementById("tendn").value.trim();
    let mk = document.getElementById("mk").value;

    // Lấy danh sách người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm người dùng khớp tên đăng nhập và mật khẩu
    let user = users.find(user => user.tendn === tendn && user.mk === mk);

    if (user) {
        document.querySelector(".hello").innerText = "Xin chào, " + user.hoten + "!";
        document.getElementById("kq").innerText = "";
        alert("Đăng nhập thành công!");
        // Sau đó có thể chuyển hướng người dùng đến trang chính
        // window.location.href = "trangchu.html";
        window.location.href = "menu.html";
    } else {
        document.getElementById("kq").innerText = "Tên đăng nhập hoặc mật khẩu không đúng!";
    }
}
