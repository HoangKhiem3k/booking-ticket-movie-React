import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';

export default function Login(props) {

  const dispatch = useDispatch();
  console.log("state history", history.location.state);
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

  console.log('userLogin', userLogin)
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: values => {

      const action = dangNhapAction(values);
      

      dispatch(action);
      console.log('values', values);
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm mt-30">
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold">Đăng nhập</h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
              <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
                <div>
                  <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                    Quên mật khẩu ?
                  </a>
                </div>
              </div>
              <input type="password" name="matKhau" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào mật khẩu" />
            </div>
            <div className="mt-10">
              <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg">
                Đăng nhập
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn chưa có tài khoản ? <NavLink to={{
              pathname: "/register",
              state:history.location.state
            }} className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
          </div>
        </div>
      </div>
    </form>
  )
}