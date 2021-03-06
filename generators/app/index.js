'use strict';
var generators = require('yeoman-generator');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  initializing: function(){
    this.log(yosay("\'Allo \'allo I will create your HTML5 Boilerplate..."));
  },

  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }]).then(function(answers) {
      this.props = answers
      this.log(answers.name);
    }.bind(this));
  },

  writing: function(){
    this.fs.copyTpl(
      this.templatePath('_page/_index.html'),
      this.destinationPath('index.html'),
      { title: "answers.name" }
    );
  },

});
