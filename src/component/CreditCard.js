import React from "react";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      name: "",
      validThru: ""
    };
  }

  changenumber = e => {
    const regnumber = /^\d{0,16}$/;

    if (e.target.value.match(regnumber)) {
      this.setState({ cardNumber: e.target.value });
    } else {
      alert("your number is not valid");
    }
  };
  changename = e => {
    const regname = /^[a-zA-Z]{0,20}$/;

    if (e.target.value.match(regname)) {
      this.setState({
        name: e.target.value.toUpperCase()
      });
    } else {
      alert("your name is not valid");
    }
  };

  changeDate = e => {
    // console.log(e.target.value.substr(0, 2));
    if (
      /^01|02|03|04|05|06|07|08|09|10|11|12$/.test(e.target.value) &&
      e.target.value.length <= 2
    ) {
      e.target.value = e.target.value + "/";
      this.setState({ validThru: e.target.value });
    }
    if (e.target.value.length >= 3 && e.target.value.length <= 5) {
      let str = e.target.value.substr(3);
      console.log(str);

      if (/^(\d){0,2}$/.test(str)) {
        this.setState({ validThru: e.target.value });
      }
    } else if (e.target.value.length > 5) {
      alert("wrongvalue");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <h1 className="company">Company name</h1>
          <p>{this.state.cardNumber}</p>
          <p className="valid">{this.state.validThru}</p>
          <img src="https://www.mastercard.fr/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" />

          <h1>{this.state.name}</h1>
        </div>
        <form>
          <input value={this.state.cardNumber} onChange={this.changenumber} />
          <input onChange={this.changeDate} />
          <input onChange={this.changename} />
        </form>
      </div>
    );
  }
}

export default CreditCard;
