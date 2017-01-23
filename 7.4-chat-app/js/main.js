
import React from 'react'
import { ajax } from 'jquery'
import Validator from 'validator'

export default React.createClass({
  componentDidMount() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/shaurice-chatroom",
      dataType: "json",
      success: this.onInitialAjaxLoadSuccess,
      error: this.onAjaxLoadError
    })
  },
  getInitialState(){

    return{
      isMessageValid: "",
      chatMessagesValue: "",
      chatMessages: []
    }
  },

  onInitialAjaxLoadSuccess(response){
    this.setState({
      chatMessages: response
    })
  },

  onPostAjaxLoadSuccess(response){
    this.setState({
      chatMessages: this.state.chatMessages.concat(response)
    })
  },
  onAjaxLoadError(response){

  },

  onMessageChange(e){
    var currentMessageInputValue = e.target.value;
    var isMessage = Validator.isMessage(currentMessageInputValue);

    this.setState({
      isMessageValid: isMessage,
      chatValue: currentMessageInputValue
    })
  },

  onSubmit(e){
    console.log("Working")

    e.preventDefault()
    var currentMessageValue = this.state.messageValue;
    var isMessageValid = this.state.isMessageValid;
    if(isMessageValid){
      ajax({
        url: "https://tiny-tiny.herokuapp.com/collections/shaurice-chatroom",
        dataType: "json",
        type: "POST",
        data: {
          currentMessageValue
        },
        success: this.onPostAjaxLoadSuccess,
        error: this.onAjaxLoadError
      })
    }
  },
  render() {
    return(
      <section>
        <h2> Chat App </h2>
        {
          this.state.chatMessages.map((chatMessages, i)=>{
            return <span key={i}> { chatMessages.currentMessageValue } </span>
          })
        }
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onMessageChange}
                 type="text"/>
          <input type="submit" />
        </form>
      </section>
    )
  }
})
