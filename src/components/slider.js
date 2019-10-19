import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import '../App.css';
import '../fonts.css';


const FontSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -4,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 4px)',
  },
  track: {
    height: 6,
    borderRadius: 25,
  },
  rail: {
    height: 6,
    borderRadius: 25,
  },
})(Slider);


const styles = theme => ({
  root: {
    width: 150,
  },
  margin: {
    height: theme.spacing,
  },
});


const config = {
    fontWeight: {
        min: 100,
        max: 800,
        step: 100,
        postfix: '',
    },
    fontSize: {
        min: .2,
        max: 5,
        step: .1,
        postfix: 'em',
    },
    lineHeight: {
        min: 50,
        max: 400,
        step: 10,
        postfix: '%',
    },
    letterSpacing: {
        min: 1,
        max: 10,
        step: 1,
        postfix: 'px',
    },
}


let ConvertToInt = (Weight, Name) => {
    return parseFloat(String(Weight).replace(config[Name].postfix, ''))
}


class RangeSlider extends React.Component {
    constructor(props, page){
        super(props);
        this.state = {
            Default: ConvertToInt(this.props.Weight, this.props.objName),
            Weight: this.props.Weight,
            Title: this.props.Title,
            };
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className="slider-container">
                        <Typography className="discrete-slider" gutterBottom>
                            {this.props.Title}: {this.props.Weight}
                        </Typography>
                        <FontSlider
                            defaultValue={this.state.Default}
                            className={`slider-man-${this.props.objName}`}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={config[this.props.objName].step}
                            min={config[this.props.objName].min}
                            max={config[this.props.objName].max}
                            onChange={(e, val) => {this.props.SetProperty(this.props.priority, this.props.objName, `${val}${config[this.props.objName].postfix}`)}} 
                        />
                </div>
            </div>
        );
    }
}


RangeSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RangeSlider);