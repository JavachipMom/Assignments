import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      outputGiftItem: [
        {
          text: ""
        }
      ]
    }
  },
  // Create html string of checkbox
  // Create html string of item name
  // Create html tring for price
  // Append all strings to list ref
  onAddButtonClick(e) {
    // This preventDefault will keep it from refreshing the page everytime you click on the Add Button
    e.preventDefault();
    var inputGiftItem = this.refs.inputGiftItem.value

    var currentGiftItem = this.state.outputGiftItem
    currentGiftItem.push({ text: inputGiftItem })
    this.setState({
      outputGiftItem: currentGiftItem
    })
  },
  render() {
    return (
      <main className="main">
        <h1 className="listTitle"> GIFTS TO BUY
        </h1>
        <form action="index.html"
              className="listForm"
              method="post">
          <input className="userGiftInput"
                 type="text"
                 placeholder="Type the gift to buy HERE, and price HERE"
                 ref="inputGiftItem"/>
          <input className="addButton"
                 ref="inputAddItem"
                 type="submit"
                 onClick= { this.onAddButtonClick }/>
        </form>
        <section>
          <ol className="giftItem"
                   ref="outputGiftItem">
            <input className="strikethrough"
                   type="checkbox"
                   value=""/>
            <p className="itemName"> Blaze Monster Truck
            </p>
            <p className="value"> $49.99
            </p>
          </ol>
          <article className="totalAmount">
            <p className="total"> Total
            </p>
            <p className="priceAmount"> 0
            </p>
          </article>
        </section>
      </main>
    )
  }
})
