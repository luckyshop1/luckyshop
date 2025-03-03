const phones = [
    { name: "13 Green", config: "256 GB", price: 11290000, accessories: "0", condition: "99%", origin: "LL/A", warranty: "BH T11.2025" },
    { name: "15 Plus Đen", config: "128 GB", price: 17290000, accessories: "Fb", condition: "99%", origin: "VC/A", warranty: "BH T05.2025" },
    { name: "15 Plus Hồng", config: "128 GB", price: 17890000, accessories: "Fb", condition: "99%", origin: "VN", warranty: "HBH" },
    { name: "16 Xanh Lưu Ly", config: "256 GB", price: 18890000, accessories: "Only", condition: "99%", origin: "LL/A", warranty: "BH T12.2025" },
    { name: "12 Tím", config: "256 GB", price: 9290000, accessories: "0", condition: "99%", origin: "VN", warranty: "BH T05.2025 Pin 96" }
];

// Render danh sách điện thoại vào bảng trong HTML
document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("phone-list");
    if (!tableBody) return;

    phones.forEach(phone => {
        const row = `<tr>
            <td>${phone.name}</td>
            <td>${phone.config}</td>
            <td>${phone.price.toLocaleString("vi-VN")} VNĐ</td>
            <td>${phone.accessories}</td>
            <td>${phone.condition}</td>
            <td>${phone.origin}</td>
            <td>${phone.warranty}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
