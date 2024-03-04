var chuoi = prompt("Nhập một chuỗi kí tự bất kì: ");

function vietHoaChuCaiDau(chuoi) {
    return chuoi.split(" ").map(function(tu) {
        return tu.charAt(0).toUpperCase() + tu.slice(1).toLowerCase();
    }).join(" ");
}

console.log(vietHoaChuCaiDau(chuoi));
