import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return {
      contacts: [
        0:{
          name: "Mary Poppins",
          email: "umbrella_lover@movie.com",
          phone: "208093843",
          location: "Los Angeles, CA"
    },
        1:{
          name: "Neo Smith",
          email: "lifehacker@matrix.com",
          phone: "208093843",
          location: "Machine City, TX"
    },
        2:{
          name: "Richard Hendriks",
          email: "im_a_genius@siliconvalley.com",
          phone: "208093843",
          location: "Silicon Valley, CA"
        }
      ]
    }
},

  render() {
    return (
      <section>
        <h2> Contacts </h2>
        {
          this.props.contacts.map(
            (contact, i)=>{
              return (
                <Link to={`${contacts.name}/${contacts.email}/${contacts.phone}/${contacts.location}`}key={i}>
                  {contacts.name}
                </Link>
              )
            }
          )
        }
      </section>
    )
  }
})
