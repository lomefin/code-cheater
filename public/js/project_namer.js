var ProjectNamer;

ProjectNamer = (function() {
  function ProjectNamer(options) {
    this.options = options;
    this.adjectives = ['Red', 'Power', 'Blue', 'Slender', 'Brilliant', 'Glamourous', 'Fading'];
    this.objects = ['Koala', 'Giraffe', 'Mastodon', 'Frog', 'Zebra', 'Manatee', 'Gorilla'];
    this.complements = ['Wizard', 'House', 'Hut', 'Train', 'Gun', 'Boat', 'Ice-cream'];
    this.override = false;
  }

  ProjectNamer.prototype.chooseRandom = function(list) {
    return list[Math.floor(Math.random() * list.length)];
  };

  ProjectNamer.prototype.renameVars = function()
  {
    this.override = true;
    this.nameInputs();
    this.override = false;
  }

  ProjectNamer.prototype.nameIfEmpty = function(_element) {
    var element;
    element = $(_element);
    if (element.val() === "" || this.override) {
      element.val(this.newName(element.data('method')));
      element.keyup();
    }
    return element;
  };
  
  ProjectNamer.prototype.bind = function() {
    this.nameInputs();
    _this = this;
    $('.project-namer-reset').click(function(){_this.renameVars()});
  };

  ProjectNamer.prototype.nameInputs = function() {
    var input, inputs, _i, _len, _results;
    inputs = $('input.var-listener');
    _results = [];
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      _results.push(this.nameIfEmpty(input));
    }
    return _results;
  };

  ProjectNamer.prototype.newName = function(method) {

    if(!method)
    {
      method = "dashes";
    }
    method = method.trim();
    var lowerize = true;
    var lowerFirst = false;
    var passwordize = false;
    var joiner = '-';
    if (method == 'CSharp') { joiner = ''; lowerize = false;}
    if (method == 'javascript' || method == 'java') { joiner = ''; lowerize = false; lowerFirst= true}
    if (method == 'underscore' || method == 'ruby' || method == 'python'){ joiner = '_'; lowerize = true;}
    if (method == 'password') {passwordize = true; joiner='';}
    var joinedString = [this.chooseRandom(this.adjectives), this.chooseRandom(this.objects), this.chooseRandom(this.complements)].join(joiner);

    if(lowerize)
    {
      joinedString = joinedString.toLowerCase();
    }
    if(lowerFirst)
    {
      joinedString = joinedString.charAt(0).toLowerCase();
    }
    if(passwordize)
    {
      var pwd = "";
      joinedString += "1234567890!"
      for( var i=0; i < 10; i++ )
      {
        pwd += joinedString.charAt(Math.floor(Math.random() * joinedString.length));
      }
      joinedString = pwd;
    }
    return joinedString;
  };

  return ProjectNamer;

})();

if (window.ProjectNamer == null) {
  window.ProjectNamer = ProjectNamer;
}