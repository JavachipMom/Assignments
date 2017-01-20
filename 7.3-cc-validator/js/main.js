import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState() {
    return{
      isCreditCardValid: false
    }
  },
  creditCardNumber(e){
    var isCreditCard = Validator.isCreditCard(e.target.value);
    this.setState({isCreditCardValid:isCreditCard})
  },
  render() {
    return(
      <section>
        <form className={this.state.isCreditCardValid ? "valid" : "invalid"}>
          Credit Card Number: <input name="Credit Card Number"
                              onChange={this.creditCardNumber}
                              placeholder="xxxx xxxx xxxx xxxx"
                              type="text" />
        <input type="submit"/>
        </form>
      </section>
    )
  }
})
