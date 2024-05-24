class cuaHang {
    listSP;
    TenCH;

    constructor(TenCH) {
        this.TenCH = TenCH;
        this.listSP = [];
        let sp1 = new sanPhamMayTinh("lenovo thinkpad x1 gen 5", 5900,"lenovo");
        let sp2 = new sanPhamMayTinh("lenovo thinkpad x1 gen 6", 7200,"lenovo");
        let sp3 = new sanPhamMayTinh("dell 7480", 5200, "Dell");
        let sp4 = new sanPhamMayTinh(" hp 840 g6", 6500,"hp");
        let sp5 = new sanPhamMayTinh(" dell 7380", 5500,"Dell");
        this.listSP.push(sp1);
        this.listSP.push(sp2);
        this.listSP.push(sp3);
        this.listSP.push(sp4);
        this.listSP.push(sp5);
    }

    add(sanPhamMoi) {
        this.listSP.push(sanPhamMoi);
    }

    update(i, sanPhamMoi) {
        this.listSP[i] = sanPhamMoi;
    }
    remove(i){
        this.listSP.splice(i,1);
    }
}