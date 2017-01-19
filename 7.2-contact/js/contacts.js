import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render (){
    return (
      <div>
        <h2> Contact </h2>
        <section>
          <p>{this.props.params.name}</p>
          <a href={"mailto:" +this.props.params.email}>{this.props.params.email}</a>
          <p>{this.props.params.phone}</p>
          <p>{this.props.params.location}</p>
        </section>
        <Link to={`/`}>Back to Contacts</Link>
      </div>
    )
  }

})
