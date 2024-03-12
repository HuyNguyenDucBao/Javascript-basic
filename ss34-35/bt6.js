function add() {
  let nhap = document.getElementById("nhap").value;
  let out = document.createElement("li");
  inL.textContent = nhap;
  document.getElementById("cham").appendChild(out);
}
