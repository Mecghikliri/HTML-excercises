let cuaHangLoc= new cuaHang("Cua Hang Loc")
function showHome() {
    document.getElementById("hienThi").innerHTML = `
       <table border="1">
                <tr>
                    <th>Tên Máy Tính</th>
                    <th>Giá Máy Tính</th>
                    <th>Hãng Máy Tính</th>
                    <th colspan="2">Action</th>
                </tr>
                <tbody id="formCuaHang"> 
                
                </tbody>
            </table>`
    let listSP= cuaHangLoc.listSP;
    let showhtml=``;
    for (let i = 0; i < listSP.length; i++) {
        showhtml+=`
        <tr>
            <td>${listSP[i].Ten}</td>
            <td>${listSP[i].Gia}</td>
            <td>${listSP[i].TenHang}</td>
            <td><button onclick="xoaSP(${i})">Xoá Sản Phẩm</button></td>
            <td><button onclick="hienFormUpdate(${i})"> Cập Nhật Mới  </button></td>
        </tr>
       `
    }
    document.getElementById("formCuaHang").innerHTML=showhtml;
}
function hienFormUpdate(i){
    let list=cuaHangLoc.listSP;
    let sanPhamCu=list[i];
    document.getElementById("hienThi").innerHTML=` 
    <input type="text" value="${sanPhamCu.Ten}" placeholder="Them Ten  " id="UpdateTen">
    <input type="text" value="${sanPhamCu.Gia}" placeholder="Them Ten" id="UpdateGia">
    <input type="text" value="${sanPhamCu.TenHang}" placeholder="Them Ten Hang" id="UpdateHang">
    <button onclick="update(${i})"> Cập Nhật</button>
    `
}
function update(i){
    let ten=document.getElementById("UpdateTen").value;
    let gia=document.getElementById("UpdateGia").value;
    let hang=document.getElementById("UpdateHang").value;
    let sanPhamMoi= new sanPhamMayTinh(ten,gia,hang);
    cuaHangLoc.update(i,sanPhamMoi);
    showHome();
}
function xoaSP(i){
    let chacchan= confirm("ban chac chan chu?");
    if(chacchan){
        cuaHangLoc.remove(i);
        showHome();
    }
}
function hienFormAdd(){
    document.getElementById("hienThi").innerHTML=`
    <input id="themten" type="text" placeholder="nhapten">
    <input id="themgia" type="number" placeholder="nhapgia">
    <input id="themhang" type="text" placeholder="nhaphang">
    <button onclick="AddSP()">Thêm Máy</button>
    `

}
function AddSP(){
    let tenmoi=document.getElementById("themten").value;
    let giamoi=document.getElementById("themgia").value;
    let hangmoi=document.getElementById("themhang").value;
    let sanPhamMoi=new sanPhamMayTinh(tenmoi,giamoi,hangmoi);
    cuaHangLoc.add(sanPhamMoi);
    showHome();
}
function timSP(){
    let sanPhamMuonTim = document.getElementById("tim_SP").value;
    let listSPCoSan=cuaHangLoc.listSP;
    for (let i = 0; i <listSPCoSan.length ; i++) {
        if (listSPCoSan[i].Ten.includes(sanPhamMuonTim)) {
            document.getElementById("hienThi").innerHTML = `
        <table border="1">
        <tr>
            <td>${listSPCoSan[i].Ten}</td>
            <td>${listSPCoSan[i].Gia}</td>
            <td>${listSPCoSan[i].TenHang}</td>
            <td><button onclick="xoaSP(${i})">Xoá Sản Phẩm</button></td>
            <td><button onclick="hienFormUpdate(${i})"> Cập Nhật Mới  </button></td>
        </tr>
        </table>`
        }
    }
}
showHome();