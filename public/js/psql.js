$(function(){
  
  var listeners = $('.var-listener');

  listeners.keyup(function(evt){
    var tgt = $(evt.target);
    var id = tgt.attr('id');
    var text = tgt.val();

    var varDrops = $('.var-drop');
    for(var i = 0; i < varDrops.length; i++)
    {
      var varDrop = $(varDrops[i]);
      if(varDrop.data('var') == id)
      {
        varDrop.text(text);
      }
    }

  });



});