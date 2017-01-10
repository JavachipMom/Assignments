import React from 'react'

export default React.createClass({
  render() {
    return (
      <main className="main">
        <div className="articleBlock">
          <article className="articleSection">
            <section className="articleContainer">
              <header className="profileDescript">
                <img className="profilePic"
                     src="./styles/icon.jpg"></img>
                <h2 className="title"> Instant Articles </h2>
                <p className="titleDate"> May 13, 2015 </p>
              </header>
              <p> Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android. </p>
              <p> Learn more about this new tool for publishers at
                <a href="https://instantarticles.fb.com/">instantarticles.fb.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </main>
    )
  }
})
