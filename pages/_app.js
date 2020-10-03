import React from 'react'
import "../Src/CSS/main.css"
import Header from '../Src/components/header'

const MainApp = ({Component, ...propsComponent}) =>{ 
    return (
        <>
        <Header />
        <Component {...propsComponent} ></Component>
    </>
    )
}
export default MainApp