document.addEventListener("DOMContentLoaded", function () {
    const phoneList = [
        { name: "iPhone 15 Pro Max", price: "34.990.000 VNĐ", promo: "Giảm 1 triệu, trả góp 0%" },
        { name: "Samsung Galaxy S24 Ultra", price: "32.990.000 VNĐ", promo: "Giảm 1.5 triệu, quà tặng 500k" },
        { name: "Xiaomi 14", price: "17.990.000 VNĐ", promo: "Giảm 500k, bảo hành 2 năm" }
    ];

    const tableBody = document.getElementById("phone-list");

    phoneList.forEach(phone => {
        let row = `<tr>
            <td>${phone.name}</td>
            <td>${phone.price}</td>
            <td>${phone.promo}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});