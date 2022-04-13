import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeActions';
import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import _ from 'lodash'
import style from './Checkout.module.css';
import './Checkout.css'
import { DAT_VE } from '../../redux/types/QuanLyDatVeType';
export default function Checkout(props) {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layChiTietPhongVeAction(props.match.params.id)
    dispatch(action);
  }, [])
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      // let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

      // let classGheDaDuocDat = '';
      // if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
      //     classGheDaDuocDat = 'gheDaDuocDat';
      // }


      // if (indexGheDD != -1) {
      //     classGheDaDat = 'gheDangDat';
      // }


      return <Fragment key={index}>
        <button onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}  text-center`} key={index}>

          {ghe.daDat ? <CloseOutlined style={{ marginBottom: 5, fontWeight: 'bold' }} /> : ghe.stt}

        </button>

        {(index + 1) % 16 === 0 ? <br /> : ''}

      </Fragment>
    })
  }
  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div className="bg-black" style={{ width: '80%', height: 15 }}></div>
            <div className={`${style['trapezoid']} text-center`}>
              <h2 className="mt-3 text-black">Màn hình</h2>
            </div>
            <div>{renderSeats()}</div>
          </div>

        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-4xl">Thanh toán</h3>
          <hr />
          <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
          <p>Địa điểm: {thongTinPhim.tenCumRap} {thongTinPhim.tenRap}</p>
          <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return <span key={index} className="text-green-500 text-xl"> {gheDD.stt} |</span>
              })}
            </div>
          </div>
          <hr />
          <div>
            <span className="text-green-400 text-2xl flex flex-row my-5">Tổng tiền: {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
              return tongTien += ghe.giaVe;
            }, 0).toLocaleString()}đ</span>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i><br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i><br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 flex flex-col justify-end items-center" style={{ marginBottom: 0 }}>
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">ĐẶT GHẾ</div>
          </div>
        </div>
      </div>
    </div>
  )
}
