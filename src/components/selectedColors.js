import React from 'react';
import '../App.css';
import '../colorPage.css';

import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';

import  * as c from '../utility/utilityFunctions.js'

let sections = ['Header', 'Background', 'Primary', 'Secondary', 'Footer']



let OpenIcon = ({active}) => {
    return (active) ? <ExpandLessOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>
}


let Section = ({name, className, active, onClick, color}) => {
    let colors = {
        normal: color,
        dark: c.darker(color, 8),
        light: c.lighter(color, 8),
        color: (c.isLight(color)) ? 'black' : 'white',
    }
    let fonts = {
        normal: (c.isLight(color)) ? 'black' : 'white',
        dark: (c.isLight(colors.dark)) ? 'black' : 'white',
        light: (c.isLight(colors.light)) ? 'black' : 'white',
        color: (c.isLight(color)) ? 'black' : 'white',
    }
    return (<div className={className}>
                <div className="title" style={{color: fonts.normal, background: colors.normal}} onClick={() => {onClick(name)}}>
                    <h3>{name}</h3>
                </div>
                <div className="section-body">
                    <div className="color-holder">
                        <div className="main-color" style={{color: fonts.normal, background: colors.normal}}>
                            <h3>{colors.normal}</h3>
                        </div>
                        <div className="shade shade-lighter" style={{color: fonts.light, background: colors.light}}>
                            <h3>{colors.light}</h3>
                             <h6>Shade Lighter</h6>
                        </div>
                        <div className="shade shade-darker" style={{color: fonts.dark, background: colors.dark}}>
                            <h3>{colors.dark}</h3>
                            <h6>Shade Darker</h6>
                        </div>
                    </div>
                </div>
                <div className="section-footer" style={{color: fonts.normal, background: colors.normal}} onClick={() => {onClick(name)}}>
                     <div className="toggle-btn">
                            <button className="btn">
                                <OpenIcon active={active}/>
                            </button>
                        </div>
                </div>
            </div>)
}



class SelectedColors extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        active: this.props.section,
        color : this.props.color,
        }
    }

    changeSection = (section) => {
        let newsection = (section == this.props.section) ? '' : section;
        this.props.onclick(section)
    }
    
   

    render() {
        let subSections = [];
        sections.map((name) => {
            
            let className = (this.props.section === name) ? 'sub-section active' : 'sub-section';
            let active = (this.props.section === name) ? true: false
            subSections.push(<Section color={this.props.color[name]} key={name} name={name} className={className} onClick={this.changeSection} active={active}/>)})
        return (
        <div className="selectedSection">
            {subSections}
        </div>

        )
    }
}

export default SelectedColors;