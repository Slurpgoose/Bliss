import React from 'react';
import '../App.css';
import '../fonts.css';
import FontSection from'../components/fontSection.js';

class FontDisplay extends React.Component{
    constructor(props, page){
    super(props);
    this.state = {

        h1 : {
            fontWeight: 800,
            letterSpacing: '1px',
            fontSize: '2.3em',
            lineHeight: '125%',
        },
        h2 : {
            fontWeight: 700,
            letterSpacing: '1px',
            fontSize: '2.1em',
            lineHeight: '150%',
        },
        h3 : {
            fontWeight: 500,
            letterSpacing: '1px',
            fontSize: '1.9em',
            lineHeight: '125%',
        },
        h4 : {
            fontWeight: 400,
            letterSpacing: '1px',
            fontSize: '1.7em',
            lineHeight: '125%',
        },
        h5 : {
            fontWeight: 300,
            letterSpacing: '1px',
            fontSize: '1.5em',
            lineHeight: '125%',
        },
        h6 : {
            fontWeight: 100,
            letterSpacing: '1px',
            fontSize: '1.3em',
            lineHeight: '125%',
        },
        p : {
            fontWeight: 100,
            letterSpacing: '1px',
            fontSize: '1.3em',
            lineHeight: '125%',
        },
        }

    }

    UpdateConfig(tag, property, value) {
        this.setState({
            ...this.state,
            [tag]: {...this.state[`${tag}`],
            [property]: value,
            }
        })
    }

    render(){
        return (
            
            <div className="font-main">
                <div className="configuration"> 

               </div>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.h1} priority={'h1'}/>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.h2} priority={'h2'}/>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.h3} priority={'h3'}/>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.h4} priority={'h4'}/>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.h5} priority={'h5'}/>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.h6} priority={'h6'}/>
                <FontSection text={this.props.text} UpdateConfig={this.UpdateConfig.bind(this)} font={this.props.font} style={this.state.p} priority={'p'}/>
            </div>
        )
    }
}



export default FontDisplay