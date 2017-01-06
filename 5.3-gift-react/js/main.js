import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      outputGiftItem: ""
    }
  },
  // Append all strings to list ref
  onAddButtonClick(e) {
    // This preventDefault will keep it from refreshing the page everytime you click on the Add Button
    e.preventDefault();

    console.log(this);
  },


  render() {
    return (
      // Create html string of checkbox
      // Create html string of item name
      // Create html tring for price
      <main className="main">
        <h1 className="listTitle"> GIFTS TO BUY
        </h1>
        <form action="index.html"
              className="listForm"
              method="post">
          <input className="userGiftInput"
                 type="text"
                 name=""
                 placeholder="Type the gift to buy HERE, and price HERE"
                 ref="inputGift"/>
          <input className="addButton"
                 ref="inputAddItem"
                 type="submit"
                 value="ADD"
                 onClick={ this.onAddButtonClick }/>
        </form>
        <section>
          <article className="giftItem"
                   ref="outputGiftItem">
            <input className="strikethrough"
                   type="checkbox"
                   value=""/>
            <p className="itemName"> Blaze Monster Truck
            </p>
            <p className="value"> $49.99
            </p>
          </article>
          <article className="giftItem">
            <input className="circle"
                   type="checkbox"
                   value=""/>
            <p className="itemName"> iPad mini 4
            </p>
            <p className="value"> $499
            </p>
          </article>
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
