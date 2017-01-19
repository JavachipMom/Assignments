import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps (){
    return {
      contacts: [
        {
          name: "Mary Poppins",
          email: "umbrella_lover@movie.com",
          phone: "1(310)555-5501",
          location: "Los Angeles, CA"
    },
        {
          name: "Neo Smith",
          email: "lifehacker@matrix.com",
          phone: "1(210)555-5502",
          location: "Machine City, TX"
    },
        {
          name: "Richard Hendriks",
          email: "im_a_genius@siliconvalley.com",
          phone: "1(415)555-5503",
          location: "San Francisco, CA"
        }
      ]
    }
  },

  render (){
    return (
      <div>
        <h2>Contact List</h2>
        {
          this.props.contacts.map(
            function(contact, i){
              return (
                <Link to={`${contact.name}/${contact.email}/${contact.phone}/${contact.location}`}key={i}>
                  {contact.name}
                </Link>
              )
            }
          )
        }
      </div>
    )
  }

})
