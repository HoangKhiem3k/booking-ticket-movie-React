import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
//Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    console.log('propsHome', arrFilm);
    // props.match.params

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />


    //     })
    // }

    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action); //dispatch function từ thunk
    },[])
    
    return (
        <div>
      

            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >

                    <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu />

            </div>
        </div>
    )
}