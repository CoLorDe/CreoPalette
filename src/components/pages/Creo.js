import React from 'react'
import Palette from './Palette'
import OptionsCreo from './OptionsCreo'

class Creo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color:"#F0FFAD",
      hue: 71,
      sat: .32,
      lum: .5,
      selectedOption: "analogous",
    }
  }


  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  changeDivColor = (bgcolor, bghue, bgsat, bglight) => {
    this.setState({
      color: bgcolor,
      hue: bghue,
      sat: bgsat,
      light: bglight,
    })
  }

  render() {
    return(
      <div className="main flex">
        <div>
          <OptionsCreo onChange={this.changeDivColor} />
          <div className="method">
            <form>
              <h4 className="form-title">Method</h4>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="palette-method"
                    value="analogous"
                    checked={ this.state.selectedOption === "analogous"}
                    onChange={this.handleOptionChange}
                    className="radio"
                  />
                  Analogous
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="palette-method"
                    value="near"
                    checked={ this.state.selectedOption === "near"}
                    onChange={this.handleOptionChange}
                    className="radio"
                  />
                  Near
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="palette-method"
                    value="complementary"
                    checked={ this.state.selectedOption === "complementary"}
                    onChange={this.handleOptionChange}
                    className="radio"
                  />
                  Complementary
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="palette-method"
                    value="triadic"
                    checked={ this.state.selectedOption === "triadic"}
                    onChange={this.handleOptionChange}
                    className="radio"
                  />
                  Triadic split
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="palette-method"
                    value="square"
                    checked={ this.state.selectedOption === "square"}
                    onChange={this.handleOptionChange}
                    className="radio"
                  />
                  Square Split
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="palette-method"
                    value="compsplit"
                    checked={ this.state.selectedOption === "compsplit"}
                    onChange={this.handleOptionChange}
                    className="radio"
                  />
                  Complementary Split
                </label>
              </div>
            </form>
          </div>
        </div>
        <Palette paletteMethod={ this.state.selectedOption } mainColor={ this.state.color} mainhue={ this.state.hue } mainsat={ this.state.sat } mainlight={ this.state.light } />
      </div>
    )
  }
}

export default Creo;
