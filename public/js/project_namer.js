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

  ProjectNamer.prototype.newName = function() {
    return [this.chooseRandom(this.adjectives), this.chooseRandom(this.objects), this.chooseRandom(this.complements)].join('-').toLowerCase();
  };

  return ProjectNamer;

})();

if (window.ProjectNamer == null) {
  window.ProjectNamer = ProjectNamer;
}

window.projectNamer = new ProjectNamer();
