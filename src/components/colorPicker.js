import React from 'react';
import { SketchPicker } from 'react-color';



class Picker extends React.Component {
 constructor(props, page){
        super(props);
        this.state = {
            background: '#fff',
            };
    }

    handleChangeComplete = (color) => {
    this.props.setColor(color.hex, color)
    this.setState({ background: color.hex });
  };

  render() {
    return <SketchPicker width="20vw" color={ this.props.background } onChangeComplete={this.handleChangeComplete }/>;
  }
}

export default Picker