import { FormikConsumer, useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungActions";
import * as Yup from "yup";
import { history } from "../../App";
export default function Register(props) {
  
  const dispatch = useDispatch();
  console.log("state history register", history.location);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      confirmMatKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP00",
      hoTen: "",
    },
    onSubmit: (values) => {
      const action = dangKyAction(values);
      dispatch(action);
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống").min(6,"Phải có ít nhất 6 ký tự"),
      matKhau: Yup.string().required("Mật khẩu không được để trống"),
      confirmMatKhau: Yup.string().oneOf([Yup.ref("matKhau"), null], "Mật khẩu không trùng nhau").required("Mật khẩu không được để trống"),
      email: Yup.string().matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Email không hợp lệ"
      ).required("Email không được để trống"),
      soDt: Yup.string().matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Bạn phải nhập số"
      ).required("Số điện thoại không được để trống"),
      hoTen: Yup.string().required("Họ tên không được để trống")

    })
  });
  
  console.log(formik.values);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          style={{ marginTop: "0" }}
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
        >
          Đăng ký
        </h2>
        <div className="mt-10">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
              {formik.errors.taiKhoan  && (<p style={{color:'red'}}>{formik.errors.taiKhoan}</p>)}
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
              {formik.errors.matKhau  && (<p style={{color:'red'}}>{formik.errors.matKhau}</p>)}

            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Nhập lại mật khẩu
                </div>
              </div>
              <input
                type="password"
                id="confirmMatKhau"
                name="confirmMatKhau"
                value={formik.values.confirmMatKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
              {formik.errors.confirmMatKhau  && (<p style={{color:'red'}}>{formik.errors.confirmMatKhau}</p>)}

            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Họ tên:
                </div>
              </div>
              <input
                name="hoTen"
                id="hoTen"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào họ tên của bạn"
              />
              {formik.errors.hoTen  && (<p style={{color:'red'}}>{formik.errors.hoTen}</p>)}

            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email:
                </div>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào email"
              />
              {formik.errors.email  && (<p style={{color:'red'}}>{formik.errors.email}</p>)}

            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số điện thoại:
                </div>
              </div>
              <input
                type="text"
                id="soDt"
                name="soDt"
                value={formik.values.soDt}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào số điện thoại"
              />
              {formik.errors.soDt  && (<p style={{color:'red'}}>{formik.errors.soDt}</p>)}

            </div>  
            <div className="mt-10">
              <button
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản ?{" "}
            <NavLink
              to="login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
