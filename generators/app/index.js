var generators = require('yeoman-generator');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  /*constructor : function(){
    generators.Base.apply(this, args);

    //Custom Code here


  }*/
  method1: function(){
    this.log(yosay("This is an \'allo \'allo test..."));
  },
  method2: function(){
    console.log("test2");
  }
});
