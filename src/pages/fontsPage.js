import React from 'react';
import '../App.css';
import '../fonts.css';


import FontDisplay from '../components/fontDisplay.js';

import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';

let fonts = [
    "'Roboto', sans-serif",
    "'IBM Plex Sans', sans-serif",
    "'IBM Plex Sans Condensed', sans-serif",
    "'IBM Plex Serif', serif",
    "'IBM Plex Mono', monospace",
    "'Alegreya', serif",
    "'Alegreya Sans', sans-serif",
    "'Merriweather', serif",
    "'Merriweather Sans', sans-serif",
    "'Nunito', sans-serif",
    "'Nunito Sans', sans-serif",
    "'Roboto Slab', serif",
    "'Roboto Mono', monospace",
    "'Quattrocento', serif",
    "'Quattrocento Sans', sans-serif",
    "'Space Mono', monospace",
    "'Concert One', cursive",
    "'Kavoon', cursive",
    "'Fruktur', cursive",
    "'Tillana', cursive",
    "'Asul', sans-serif",
    "'Alike Angular', serif",
    "'Work Sans', sans-serif",
    "'Neuton', serif",
    "'Eczar', serif",
    "'Rubik', sans-serif",
    "'Pacifico', cursive",
    "'Quicksand', sans-serif",
    "'Inconsolata', monospace",
    "'Cabin', sans-serif",
    "'VT323', monospace",
    "'Cormorant Garamond', serif",
    "'Proza Libre', sans-serif",
    "'Libre Franklin', sans-serif",
    "'Libre Baskerville', serif",
    "'Trirong', serif",
    "'Taviraj', serif",
    "'Gentium Basic', serif",
    "'Amiko', sans-serif",
    "'Arima Madurai', cursive",
    "'Farsan', cursive",
    "'Lalezar', cursive",
    "'Mogra', cursive",
    "'Rakkas', cursive",
    "'Rasa', serif",
    "'Shrikhand', cursive",
    "'Suez One', serif",
    "'Yatra One', cursive"];

 


let filterFonts = (searchTerm) => {
    let item = searchTerm.replace(/\s/g, '').toLowerCase();
    let result =  fonts.filter(font => {
            font = font.replace(/\s/g, '').toLowerCase()
             console.log(font.includes(item))
            return font.includes(item)
            });
    return result
}


let FontSpan =  ({font, handleClick, myclass, text}) => {
    let style = {fontFamily: font}
    return <li className={myclass} onClick={() => {handleClick(font)}}>
            <p className="font-name-label">{font.replace(/['"]+/g, '')}</p>
            <span style={style}>{text}</span>
        </li>
}

let FontOpenIcon = ({fontsOpen}) => {
    return (fontsOpen) ? <ExpandLessOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>
}


class FontsPage extends React.Component{
    constructor(props, page){
    super(props);
    this.state = {
        className: 'fonts-content',
        font: "'Roboto', sans-serif",
        text: 'The quick brown wolf jumps over the lazy dog',
        fonts: fonts,
        fontsOpen: false,
        }
    this.handleChange = this.handleChange.bind(this);
    this.searchFonts = this.searchFonts.bind(this);
    }

    handleClick(font) {
        this.setState({
            ...this.state,
            font: font,
        })
    }

    setBackgroundColor() {
        let newClass = (this.state.className === 'fonts-content dark-background') ?  'fonts-content' : 'fonts-content dark-background';
        this.setState({
            ...this.state,
            className: newClass,
        })
    }

    handleChange({target}) {
        this.setState({
            ...this.state,
            text: target.value
        })

    }

    searchFonts({ target }) {
        let result = filterFonts(target.value, [...fonts])
        this.setState({
            ...this.state,
            fonts: result
        })
    }

    toggleFonts = () => {
        this.setState({
            ...this.state,
            fontsOpen: !this.state.fontsOpen,
        })
    }


    render(){
        let fontClass = (this.state.fontsOpen) ? 'selectedSection2' : 'selectedSection2 hidden';
        let  spans  =  [];
        for (let i = 0; i < this.state.fonts.length; i++) {
            let name = (this.state.font === fonts[i]) ? 'active' : ''; 
            spans.push(<FontSpan key={i} text={this.state.text} myclass={name} handleClick={this.handleClick.bind(this)} font={fonts[i]}/>)
        }
        return (
            <div className={this.state.className}>
                <div className="top-header">
                    <div className="btn-control">
                        <div>
                                <FlareOutlinedIcon className="light"/>
                                <button  onClick={() => this.setBackgroundColor()} aria-pressed="false" className="btn btn-toggle" data-toggle="button" id="Bittrex-toggle" type="button" value="Bittrex">
                                        <div className="handle"></div>
                                </button>
                                <Brightness4OutlinedIcon className="dark"/>
                            
                        </div>
                        <h3>font-family: {this.state.font}</h3>
                    <div className="custom-input-holder">
                            <input 
                            placeholder="search"
                            className="custom-input"
                            label="Custom Text"
                            value={this.state.text}
                            onChange={this.handleChange}
                            />
                        </div>
                    </div>

                 </div>
                <FontDisplay font={this.state.font} text={this.state.text}/>
                <div className={fontClass}>
                    <div className="section-title">
                        <div className="title-holder">
                            <h3>Select A Custom Font</h3>
                        </div>
                        <div className="toggle-btn">
                            <button className="btn" onClick={this.toggleFonts}>
                                <FontOpenIcon fontsOpen={this.state.fontsOpen}/>
                            </button>
                        </div>
                        <div className="input-holder">
                            <input 
                                placeholder="search"
                                onChange={this.searchFonts}
                                />
                        </div>
                    </div>
                     <div className="section-body">
                        <ul>
                            {spans}
                        </ul>
                    </div>
                </div>
            </div>  
        )
    }
}

export default FontsPage;