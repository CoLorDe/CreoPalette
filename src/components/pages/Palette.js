import React from 'react'

function hslToHex(h, s, l) {
  const a = s * Math.min(l, 1 - l) ;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

let color1
let color2
let color3
let color4
let color5

function Palette(props) {

  let hueRule1, hueRule2, satRule1, satRule2

  switch(props.paletteMethod) {
    case "analogous":
      hueRule1 = 15
      hueRule2 = 15
      satRule1 = 0
      satRule2 = 0
      break;
    case "near":
      hueRule1 = 10
      hueRule2 = 10
      satRule1 = 0
      satRule2 = 0
      break;
    case "shades":
      hueRule1 = 0
      hueRule2 = 0
      satRule1 = 0
      satRule2 = 0.1
      break;
    case "complementary":
      hueRule1 = 180
      hueRule2 = 180
      satRule1 = 0.2
      satRule2 = 0.3
      break;
    case "triadic":
      hueRule1 = 120
      hueRule2 = 120
      satRule1 = 0
      satRule2 = 0.3
      break;
    case "square":
      hueRule1 = 90
      hueRule2 = 90
      satRule1 = 0
      satRule2 = 0.4
      break;
    case "compsplit":
      hueRule1 = 160
      hueRule2 = 160
      satRule1 = 0
      satRule2 = 0.1
      break;


    default:
      hueRule1 = 15
      hueRule2 = 15
      satRule1 = 0
      satRule2 = 0
      break;
  }

    color1 = hslToHex(props.mainhue, props.mainsat, props.mainlight)
    color2 = hslToHex(props.mainhue+hueRule1, props.mainsat-satRule1, props.mainlight)
    color3 = hslToHex(props.mainhue+(2*hueRule1), props.mainsat-satRule2, props.mainlight)
    color4 = hslToHex(props.mainhue+360-(hueRule2), props.mainsat-satRule2, props.mainlight)
    color5 = hslToHex(props.mainhue+360-(2*hueRule2), props.mainsat-satRule1, props.mainlight)

  return (
    <div className="palette-container">
      <div className="column-pan">
        <div className="color-pan" style={{ backgroundColor: color3 }}></div>
        <p>{ color3 }</p>
      </div>
      <div className="column-pan">
        <div className="color-pan" style={{ backgroundColor: color2 }}></div>
        <p>{ color2 }</p>
      </div>
      <div className="column-pan">
        <div className="color-pan" style={{ backgroundColor: color1 }}><p>Selected</p></div>
        <p>{ color1 }</p>
      </div>
      <div className="column-pan">
        <div className="color-pan" style={{ backgroundColor: color4 }}></div>
        <p>{ color4 }</p>
      </div>
      <div className="column-pan">
        <div className="color-pan" style={{ backgroundColor: color5 }}></div>
        <p>{ color5 }</p>
      </div>
    </div>
  )
}

export default Palette;
