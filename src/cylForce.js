import React from "react";

class cylForce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dia: null,
      pr: null,
    };
  }

  // To commonize all event handling, we're getting e.target's attribute i.e. name & value
  // where event.target's name has to be same as state's key.
  onHandleClick = (e) => {
    let nm = e.target.name;
    let vl = e.target.value;
    this.setState({ [nm]: vl });
  };

  render() {
    let dia = this.state.dia;
    let pr = this.state.pr;
    let force;
    if (dia != null && pr != null) {
      force = (pr * Math.PI * (dia / 20) ** 2).toFixed(2);
    } else {
      force = "";
    }

    return (
      <div>
        <h3>Calculating Cylinder Force.</h3>
        <br></br>
        <label>Enter Cylinder Dia (mm): </label>
        <input
          type="number"
          name="dia"
          style={{width:"100px"}}
          onChange={this.onHandleClick}
        />
        <br></br>
        <br></br>
        <label>Enter Pressure (bar): </label>
        <input
          type="number"
          name="pr"
          style={{width:"100px"}}
          onChange={this.onHandleClick}
        />
        <br></br>
        <br></br>
        <label>Cylinder Force (kgf): </label>
        <label>{force}</label>
      </div>
    );
  }
}

export default cylForce;
