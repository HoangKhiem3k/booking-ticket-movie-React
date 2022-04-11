import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
export default function Home(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    // const renderFilms = () => {
    //     return arrFilm.map((film, index) => {
    //         return <Film key={index}/>

    //     })
    // }
    return (
        <div>
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto" >
                    <MultipleRowSlick arrFilm={arrFilm}/>

                    {/* <div className="flex flex-wrap -m-4 " style={{ justifyContent: 'center' }}>
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
