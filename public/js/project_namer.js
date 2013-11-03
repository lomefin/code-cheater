var ProjectNamer;

ProjectNamer = (function() {
  function ProjectNamer(options) {
    this.options = options;
    this.adjectives = ['Red', 'Power', 'Blue', 'Slender', 'Brilliant', 'Glamourous', 'Fading'];
    this.objects = ['Koala', 'Giraffe', 'Mastodon', 'Frog', 'Zebra', 'Manatee', 'Gorilla'];
    this.complements = ['Wizard', 'House', 'Hut', 'Train', 'Gun', 'Boat', 'Ice-cream'];
  }

  ProjectNamer.prototype.chooseRandom = function(list) {
    return list[Math.floor(Math.random() * list.length)];
  };

  ProjectNamer.prototype.nameIfEmpty = function(_element) {
    var element;
    element = $(_element);
    console.log ("Trying to name ", element, " ", element.val());
    if (element.val() === "") {
      return element.val(this.newName());
    }else
    {
      console.log ("Nah");
    }
  };

  ProjectNamer.prototype.bind = function() {
    var input, inputs, _i, _len, _results;
    inputs = $('input.var-listener');
    _results = [];
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      _results.push(this.nameIfEmpty(input));
    }
    return _results;
  };

  ProjectNamer.prototype.newName = function() {
    return [this.chooseRandom(this.adjectives), this.chooseRandom(this.objects), this.chooseRandom(this.complements)].join('-').toLowerCase();
  };

  return ProjectNamer;

})();

if (window.ProjectNamer == null) {
  window.ProjectNamer = ProjectNamer;
}