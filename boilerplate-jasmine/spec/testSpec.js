describe("test", function(){

  var test;
  var jsdom = require("jsdom");

  // Create our beforeEach to before each it blocks
  beforeEach(function(){

    document = jsdom.jsdom(`<body>
      
      </body>`)
  });
  test = require("../js/test.js");
});

// Create test to fail
