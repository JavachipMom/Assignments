import React from 'react'

export default React.createClass({
  render() {
    return (
      <main className="main">
        <div className="articleSection">
          <article>
            <section className="articleContainer">
              <header className="titleContainer">
                <img className="profileImage"
                     src="./styles/icon.jpg"></img>
                <h2 className="title"> Instant Articles </h2>
                <p className="titleDate"> May 13, 2015 </p>
              </header>
              <p> Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android. </p>
              <p> Learn more about this new tool for publishers at instantarticles.fb.com. </p>
              <button className="buttons"> 778 Likes </button>
              <button className="buttons"> 315 Comments </button>
              <button className="buttons"> 53 Shares </button>
            </section>
          </article>
        </div>
      </main>
    )
  }
})
