import React from 'react'
import "../Src/CSS/main.css"


const MainApp = ({Component, ...propsComponent}) =>{ 
    return (
    <>  
        <Component {...propsComponent} ></Component>
    </>
    )
}
export default MainApp