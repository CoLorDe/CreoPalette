import React from 'react';
import { SketchPicker } from 'react-color';

class OptionsCreo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgcolor: "#FFFFFF",
      bghue:""
    }
  }

  handleChangeComplete = (color) => {
    this.setState({
      bgcolor: color.hex
    })
    this.props.onChange(color.hex)
  }

  render() {
    return (
      <div>
        <SketchPicker
                color={ this.state.bgcolor }
                onChangeComplete={ this.handleChangeComplete }
        />
        <div>
          <div style={{backgroundColor: this.state.bgcolor, height:20, width:20}}></div>
          <p>{ this.state.bgcolor }</p>
        </div>
      </div>
    )
  }
}

export default OptionsCreo;
