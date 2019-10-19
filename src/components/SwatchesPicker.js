import React from 'react';

import { SwatchesPicker, TwitterPicker} from 'react-color';
import  {spin, darker, lighter, ToRGB, ToHSL, ToHex} from '../utility/utilityFunctions.js'


let Swatch = ({colors, selectColor}) => {
    return <SwatchesPicker onChange={selectColor} colors={colors}  height="15vh" width="30vw" triangle="top-right"/>

}

/* 
let ColorItem = ({color, value}) => {
    let textColor = (isLight(color)) ? 'black' : 'white';
    return <div className="color-item" style={{background: color, color: textColor}}>{value * 100}</div>
} */


let renderColorGrid2 = (color, colorGrid) => {
        for(let i = -8; i < 9; i++){
            let newColor;
            if (i < 0) {
                newColor = spin(color, 3 * i)
                colorGrid = renderShades2(newColor, colorGrid)
            }
            else if (i > 0) {
                newColor = spin(color, 3 * i)
                colorGrid = renderShades2(newColor, colorGrid)
            }
            else {
                newColor = spin(color, 3 * i)
                colorGrid = renderShades2(newColor, colorGrid)
            }
        }
        
        return colorGrid
}


let renderShades2 = (color, colorGrid) => {
        let colors = [];
        let finished = false;
        let transition = false;
        let count = 0;
        while(finished === false) {
            let offset = 100 - count * 10;
            let newColor = darker(color, offset);
            if (count === 10 && transition === false) {
                transition = true;
                count = 0;
            }
            if (transition === true) {
                offset = count * 10;
                newColor = lighter(color, offset);
            }
            if (newColor === '#000000') {
                count++;
                continue
            }
            else if (newColor === '#FFFFFF' || newColor==='#ffffff'|| (count === 10 && transition === true) ) {
                finished = true 
                continue
            }
            colors.push(newColor)
            count++;
        }
        colorGrid.push(colors)
        return colorGrid
}

class Swatches extends React.Component {
    constructor(props, page){
        super(props);
        this.state = {
            background: this.props.background,
            selectedColor: this.props.selectedColor,
            colorGrid: renderColorGrid2(this.props.background, []),
        };

    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.selectColorByInput = this.selectColorByInput.bind(this);
    }

  handleChangeComplete = (color) => {
    let bgLabel = {
            hex: ToHex(color.hex),
            rgb: ToRGB(color.hex),
            hsl: ToHSL(color.hex),
        }
    this.props.setColor(color.hex, bgLabel)
  }

  selectColor = (color) => {
      this.props.selectColor(color.hex)
  }

  selectColorByInput = ({target}) => {
      let color = (target.name == 'hex') ? target.value : ToHex(target.value)
      this.props.selectColor(color)
  }

    render() {
        let colors = renderColorGrid2(this.props.background, []);
        //let color = this.state.background;
        return (
        <div>
            <div className="swatches-holder">
                <div className="main-picker">
                    <Swatch  selectColor={this.selectColor } colors={colors}/>
                </div>
                <TwitterPicker onChange={ this.handleChangeComplete }  height="50vh" width="30vw" colors={["#f44336",
                                "#e91e63",
                                "#9c27b0",
                                "#fcd303",
                                "#ffeb3b",
                                "#d7fc03",
                                "#adfc03",
                                "#673ab7",
                                "#3f51b5",
                                "#2196f3",
                                "#03a9f4",
                                "#00bcd4",
                                "#009688",
                                "#4caf50",
                                "#8bc34a",
                                "#fc039d",
                                "#ff9800",
                                "#ffc107",
                                "#795548",
                                "#607d8b",
                                
                                ]}/>
                <div className="selection-container">
                    <div style={{background: this.props.selectedColor}} className="selectedColor"></div>
                    <div className="color-labels">
                        <input value={this.props.selectedColor} name="hex" onChange={this.selectColorByInput}/>
                        <input name="rgb" onChange={this.selectColorByInput} value={ToRGB(this.props.selectedColor)}/>  
                    </div>
                </div>
        </div>
        </div>
        );
    }
}


export default Swatches