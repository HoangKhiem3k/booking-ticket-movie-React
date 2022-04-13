import React from 'react'
import { useSelector } from 'react-redux';
import style from './Checkout.module.css';
export default function Checkout(props) {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div className="bg-black" style={{width:'80%', height:15}}></div>
            <div className={`${style['trapezoid']} text-center`}>
              <h2 className="mt-3 text-black">Màn hình</h2>
            </div>
          </div>
          
        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
          <hr/>
          <h3 className="text-xl">Lật mặt</h3>
          <p>Địa điểm: abc</p>
          <p>Ngày chiếu: RẠP 5</p>
          <hr/>
          <div className="flex flex-row my-5">
            <div className="w-4/5"><span className="text-red-400 text-lg">Ghế</span></div>
            <div className="text-right col-span-1">
              <span className="text-green-400 text-lg">0đ</span>
            </div>
          </div>
          <hr/>
          <div className="my-5">
            <i>Email</i><br/>
            {userLogin.email}
          </div>
          <hr/>
          <div className="my-5">
            <i>Phone</i><br/>
            {userLogin.soDT}
          </div>
          <hr/>
          <div className="mb-0 h-full flex flex-col justify-end items-center" style={{marginBottom:0}}>
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">ĐẶT GHẾ</div>
          </div>
        </div>
      </div>
    </div>
  )
}
