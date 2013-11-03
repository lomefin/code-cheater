

$(function()
{
  console.log ("App Startup");
  console.debug("ListenVars");
  window.listenVars();
  console.debug("Storager");
  window.storager = new Storager();
  console.debug("ProjectNamer");
  window.projectNamer = new ProjectNamer().bind();

   //Defaultit
  $('input.var-listener').keyup();
  $('select.var-listener').change();
});