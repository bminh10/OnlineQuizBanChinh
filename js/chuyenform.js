 /*function chuyen(){
   
   if(document.getElementById("hoten").value=="" || document.getElementById("tendn").value=="" || document.getElementById("email").value=="" || document.getElementById("mk").value==""){
      document.getElementById("kq").innerHTML = "Không được bỏ trống thông tin !";
     
   }
   else{
      document.getElementById("kq").innerHTML = "Đăng ký thành công"
      window.location.replace("menu.html");
   }
 }*/
function chuyen() {
   //binh minh
    let hoten = document.getElementById("hoten").value.trim();
    let tendn = document.getElementById("tendn").value.trim();
    let email = document.getElementById("email").value.trim();
    let mk = document.getElementById("mk").value;

    // Kiểm tra thông tin không được để trống
    if (!hoten || !tendn || !email || !mk) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Lấy danh sách người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra tên đăng nhập đã tồn tại chưa
    let existingUser = users.find(user => user.tendn === tendn);
    if (existingUser) {
        alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác!");
        return;
    }

    // Thêm người dùng mới
    users.push({
        hoten: hoten,
        tendn: tendn,
        email: email,
        mk: mk
    });

    // Lưu lại vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    // Chuyển sang trang đăng nhập (tùy bạn)
    window.location.href = "dangnhap.html";
}

