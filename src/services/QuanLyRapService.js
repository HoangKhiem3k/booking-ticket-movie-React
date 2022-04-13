import { baseService } from "./baseService";
export class QuanLyRapService  extends baseService{

    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`);
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
    


    
   
}
export const quanLyRapService = new QuanLyRapService();