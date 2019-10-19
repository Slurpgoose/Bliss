import React from 'react';

import RangeSlider from '../components/slider.js'

import '../App.css';
import '../fonts.css';

class FontSection extends React.Component{
    constructor(props, page){
    super(props);
    this.state = {
        priority: this.props.priority,
        }

    }
    render(){
        let style = {
            ...this.props.style, 
            fontFamily: this.props.font}
        const CustomTag = `${this.props.priority}`;

        return (
            <div className="font-holder">
                <div className="text-section">
                    <p className="font-label">{this.props.priority}</p>
                    <CustomTag style={style}>{this.props.text}</CustomTag>
                </div>
                
                <div className="action-column">
                    <div className="action-row">
                        <RangeSlider SetProperty={this.props.UpdateConfig} priority={this.props.priority} objName="fontWeight" Title={"Font Weight"} Weight={style.fontWeight}/>
                    </div>
                <div className="action-column">
                    <div className="action-row">
                        <RangeSlider SetProperty={this.props.UpdateConfig} priority={this.props.priority} objName="fontSize" Title={"Font Size"} Weight={style.fontSize}/>
                    </div>
                </div>
                <div className="action-column">
                        <div className="action-row">
                            <RangeSlider SetProperty={this.props.UpdateConfig} priority={this.props.priority} objName="lineHeight" Title={"Line Height"} Weight={style.lineHeight}/>
                        </div>
                    </div>
                <div className="action-column">
                    <div className="action-row">
                            <RangeSlider SetProperty={this.props.UpdateConfig} priority={this.props.priority} objName="letterSpacing" Title={"Letter Spacing"} Weight={style.letterSpacing}/>
                    </div>
                </div>
            </div>
            </div>
                
        )
    }
}

export default FontSection;