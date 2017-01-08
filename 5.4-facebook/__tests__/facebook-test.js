import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Facebook from '../js/facebook'

// ** Referenced Jason's pseudocode from lecture notes below!!**

// let variableName = "";
//   Higher scoped references needed throughout different functions
//     typically a reference that is redeclared, concat'd to, etc...
//     takes up less memory
// var variableName = "";
//   Reserve this as a private variable inside of scopes
// const variableName = "";
//  typically something that is very high level of scope
//    and can be seen throughout functions, but is changed very little
// static variableName = "NAME OF APP";
//   Not used typically but infers that it WILL NOT BE CHANGED

// The => arrow signifies a FUNCTION
describe("Facebooking", () => {
  let facebookComponent = {}

  beforeEach(() => {
    facebookComponent = TestUtils.renderIntoDocument(<Facebook />)
  })

  it("Should have a newsfeed article", () => {
  
  })
})
