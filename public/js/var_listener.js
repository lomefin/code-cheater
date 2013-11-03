$(function(){
  
  var updatedInputs = function(evt){
    var tgt = $(evt.target);
    var id = tgt.attr('id');
    var text = tgt.val();
    console.log("UpdateVars ", id, " ", text);
    var varDrops = $('.var-drop');
    for(var i = 0; i < varDrops.length; i++)
    {
      var varDrop = $(varDrops[i]);
      if(varDrop.data('var') == id)
      {
        varDrop.text(text);
      }
    }

  }

  $('input.var-listener').keyup(updatedInputs);
  $('select.var-listener').change(updatedInputs);

  //Defaultit
  $('input.var-listener').keyup();
  $('select.var-listener').change();

});