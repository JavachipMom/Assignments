import React from 'react'
import Validator from 'validator'

export default React.createClass({

  getInitialState(){
    return {
      isCreditCardValid: false,
      validityOutput: "",
      currentCardInput: "",
    }
  },
  onCreditCardChange (e){
    var newCardInput = e.target.value
    this.setState({currentCardInput:newCardInput})
  },
  isThisCardValid(e){
    e.preventDefault();
    var validCard = Validator.isCreditCard(this.state.currentCardInput)
    this.setState({isCreditCardValid:validCard})

    if (validCard === false) {
      return this.setState({validityOutput:"Try Again!"})
    } else {
      return this.setState({validityOutput:"Good To Go!"})
    }
  },
  render (){
    return (
      <div className="cardValidator">
      <form className="creditCardSim">
        <h3
          className="fakeCardName">Enter Card Number Here
        </h3>
        <input
          className="cardInput"
          type="text"
          pattern="[0-9.-]{19}"
          maxLength="19"
          onChange={this.onCreditCardChange}
          placeholder="xxxx-xxxx-xxxx-xxxx"/>
      </form>
      <input
        className="submitButton"
        type="submit"
        onClick={this.isThisCardValid}/>
      <h3
        className="validationPrompt"> Is this card valid?
      </h3>
      <h2
        className={this.state.isCreditCardValid ? "valid" : "invalid"}>{this.state.validityOutput}
      </h2>
      </div>
    )
  }
})
