function add() {
  let nhap = document.getElementById("nhap").value;
  let out = document.createElement("li");
  out.textContent = nhap;
  document.getElementById("cham").appendChild(out);
}
