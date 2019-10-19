import React from 'react';
import '../App.css';
import '../colorPage.css';
//import ControlBar from'../components/controlBar.js';
//import Picker from '../components/colorPicker.js'
import Swatches from '../components/SwatchesPicker.js'
import SelectedColors from '../components/selectedColors.js'
import DisplayPage from '../components/displayPage.js'
import  * as c from '../utility/utilityFunctions.js'

let colorTypes = ['Analogous', 'Monochromatic', 'Split complement', 'Triad', 'Tetrad', 'Complement']

let helper = {
        'Analogous': c.Analogous,
        'Monochromatic': c.Monochromatic,
        'Split complement': c.SplitComplementry,
        'Triad': c.Triad,
        'Tetrad': c.Tetrad, 
        'Complement': c.Complement,
        }

let MenuItem = ({type, className, onClick}) => {
   return (<li className={className} onClick={() => {onClick(type)}}>{type}</li>)
}

let ColorPallete = ({color, width, onclick}) => {
    let textColor = (c.isLight(color)) ? 'black' : 'white'; 
    return (<div className="color" onClick={() => {onclick(color)}} style={{background: color, width: width, color: textColor}}>
        <div><h3>{color}</h3></div>
    </div>)
}


class ColorPage extends React.Component{
    constructor(props, page){
    super(props);
    this.state = {
        ...this.state,
        open : true,
        randomStyle : {display: 'block'},
        update: true,
        activeSection: "Header",
        background: '#63ffe1',
        selectedColor: '#63ffe1',
        currentType: 'Monochromatic',
        bgLabel: {
            hex: '#63ffe1',
           rgb: c.ToRGB('#63ffe1'),
           hsl: c.ToHSL('#63ffe1'),
        },
        mainColors : {
                Header: '#272627',
                Footer: '#222222',
                Background: '#f3f5f7',
                Primary: '#8246a0',
                Secondary: '#d0cbd1'
            }
    }
    this.setValue = this.setValue.bind(this)
    this.selectColor = this.selectColor.bind(this)
    this.setActiveSection = this.setActiveSection.bind(this)
    this.setSectionColor = this.setSectionColor.bind(this)

    }

     selectColor = (color) => {
      this.setState({
          ...this.state,
          selectedColor: color,
      })
  }

    setBackgroundColor(color, bgLabel) {
        this.setState({
            ...this.state,
            background: color,
            bgLabel: bgLabel
        })
    }

    setValue = (type) => {
        this.setState({
            ...this.state,
            currentType: type,
        })
    }

    setActiveSection = (name) => {
        let newSection = (name == this.state.activeSection) ? '' : name;
        this.setState({
            ...this.state,
            activeSection: newSection,
        })
    }

    setSectionColor = (color) => {
        this.setState({
            ...this.state,
            mainColors: {...this.state.mainColors, 
            [this.state.activeSection] : color
            }
        })
        
    }

    render(){
        let MenuItems = [];
        let colorPallete = [];
        let colorScheme = helper[this.state.currentType](this.state.selectedColor);

        let palleteWidth = `${100 /colorScheme.length}%`
        colorScheme.map(color => {
            colorPallete.push(<ColorPallete  key={color + 'ab1'} onclick={this.setSectionColor} color={color} width={palleteWidth}/>)
        })

        colorTypes.map(type => {
            let className = (this.state.currentType === type) ? 'active' : ''
            MenuItems.push(<MenuItem key={type} type={type} onClick={this.setValue} className={className}/>)
            })
        let mainStyle = {background: '#FFFFFF'}

        return (
            <div className="main-content" style={mainStyle}>
               <div style={{backgroundColor: '#FFFFFF'}} className="top-section">
                     <Swatches setColor={this.setBackgroundColor.bind(this)} selectColor={this.selectColor} selectedColor={this.state.selectedColor} background={this.state.background}/>
                    <div className="menu-items">
                        <div className="color-pallete">
                            {colorPallete}
                        </div>
                        <ul>
                            {MenuItems}
                        </ul>
                    </div>
               </div>
               <SelectedColors color={this.state.mainColors} section={this.state.activeSection} onclick={this.setActiveSection}/>
               <div className="display-content">
                   <DisplayPage colors={this.state.mainColors}/>
               </div>
            </div>
        )
    }
}

export default ColorPage;