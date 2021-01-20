import React from 'react';
import { SketchPicker } from 'react-color';

class OptionsCreo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hex: '#F0FFAD',
      rgb: {
        r: 240,
        g: 255,
        b: 173,
        a: 1,
      },
      hsl: {
        h: 71,
        s: .32,
        l: .5,
        a: 1,
      },
    }
  }

  handleChange = (color) => {
    this.setState({
      hex: color.hex,
      rgb: {
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b,
        a: 1,
      },
      hsl: {
        h: color.hsl.h,
        s: color.hsl.s,
        l: color.hsl.l,
        a: 1,
      },
    })
    this.props.onChange(color.hex, color.hsl.h, color.hsl.s, color.hsl.l)
  }

  render() {
    return (
      <div>
        <SketchPicker
                color={ this.state.hex }
                onChange={ this.handleChange }
        />
      </div>
    )
  }
}

export default OptionsCreo;
