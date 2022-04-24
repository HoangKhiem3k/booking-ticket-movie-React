import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";
import {SET_THONG_TIN_NGUOI_DUNG} from '../types/QuanLyNguoiDungType'
import {history} from '../../App';



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
                // chuyen ve trang truoc
              
                history.goBack()
            }
            


        } catch (error) {
            alert("Tài khoản hoặc mật khẩu không đúng");
        }

    }

}
export const dangKyAction = (thongTinDangKy) => {

    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
            console.log("state",history.location.state)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content
                })

                const pathname = history.location.state  || "/home"
                history.push({pathname})
            }



        } catch (error) {
            console.log('error',error.response.data )
            alert('Tài khoản hoặc email đã tồn tại');
        }

    }

}

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}



