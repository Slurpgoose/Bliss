import React from 'react';
import '../App.css';
import '../displayPage.css';
import Chart from 'react-apexcharts'

import  {isLight} from '../utility/utilityFunctions.js'


let Header = ({color, primary, secondary}) => {
    console.log(color, primary, "this")
    let BorderBottom = `2px solid ${secondary}`
    let TextColor = (isLight(color)) ? 'black' : 'white';
    let img = `https://dummyimage.com/200X70/${color.replace('#', '')}/${secondary.replace('#', '')}&text=Logo`
    return (
        <div>
         <div className="nav-accent" style={{background: primary}}></div>
            <div className="nav-bar" style={{background: color, color: TextColor, border: BorderBottom}}>
                <div className="brand-logo">
                <img src={img}></img>
            </div>
            <div className="nav">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                </ul>
                </div>
            </div>
      </div>
    )
}

let Footer = ({color, primary}) => {
    return (
        <div className="footer-holder">
            <div className="footer" style={{background: color}}>
            </div>
            <div className="nav-accent" style={{background: primary}}></div>
        </div>
    )
}


let TestCard = ({primary, secondary}) => {
    let Border = `2px solid ${secondary}`
    return ( <div class="item bottom-left" style={{border: Border}}>
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/2863182/undraw_surveillance_kqll.svg'></img>
                        <h1 style={{color: primary}}>Web Design</h1>
                        <h3 style={{color: secondary}}>Sub header words for positioning</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                    
            )
}


let MainContent = ({color, primary, secondary}) => {
    let TextColor = (isLight(color)) ? 'black' : 'white';
    let border = `3px solid ${secondary}`
    return (
            <div className="main-background" style={{background: color}}>
                <div class="main-section">
                   <TestCard primary={primary} secondary={secondary}/>
                </div>
            </div>
    )
}



let DisplayPage = ({colors}) => {
    return (
        <div className="main-container">
        <Header color={colors.Header} primary={colors.Primary} secondary={colors.Secondary}/>
        <MainContent color={colors.Background} primary={colors.Primary} secondary={colors.Secondary}/>
        <Footer color={colors.Footer} primary={colors.Primary}/>
      </div>
    )
}

export default DisplayPage;