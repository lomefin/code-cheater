var Storager;

Storager = (function() {
  function Storager(options) {
    this.options = options;
    this.namespace = ["code-cheater", $('section').attr('id')].join(":");
    if (this.supports_html5_storage()) {
      this.bind();
    }
  }

  Storager.prototype.supports_html5_storage = function() {
    try {
      return 'localStorage' in window && (window['localStorage'] != null);
    } catch (_error) {
      return false;
    }
  };

  Storager.prototype.bind = function() {
    var el, listeners, _i, _j, _len, _len1, _results;
    listeners = $('.var-listener');
    for (_i = 0, _len = listeners.length; _i < _len; _i++) {
      el = listeners[_i];
      this.loadFromLocalStorage(el);
    }
    _results = [];
    for (_j = 0, _len1 = listeners.length; _j < _len1; _j++) {
      el = listeners[_j];
      _results.push($(el).change(this.inputUpdated));
    }
    return _results;
  };

  Storager.prototype.loadFromLocalStorage = function(_element) {
    var currentValue, element, storedValue, varName;
    element = $(_element);
    varName = [this.namespace, element.attr('id')].join(":");
    currentValue = element.val();
    storedValue = window.localStorage.getItem(varName);
    console.debug(varName,storedValue,currentValue);
    if (!((currentValue != null) || (storedValue == null) || storedValue === "")) {
      console.log("I want to store value of ", varName);
    }
    if (!((currentValue != null) || (storedValue == null) || storedValue === "")) {
      element.val(storedValue);
      return element;
    }
  };

  Storager.prototype.inputUpdated = function(evt) {
    var tgt, varName;
    tgt = $(evt.target);
    varName = [this.namespace, tgt.attr('id')].join(":");
    window.localStorage.setItem(varName, tgt.val());
    console.debug(window.localStorage.getItem(varName));
    return console.debug("Saved in localstorage ", varName, tgt.val());

  };

  return Storager;

})();

if (window.Storager == null) {
  window.Storager = Storager;
}