let diemtoan = +rompt('nhap diem toan');
let diemhoa = +prompt("nhap diem hoa");
let diemly = parseInt(prompt("nhap diem ly"));

console.log(typeof diemtoan)
let diemtrungbinh = (diemly + diemhoa + diemtoan)/3;
document.write("diem trung binh la" + diemtrungbinh );