class Storager

   constructor: (@options)->
     @namespace = ["code-cheater",$('section').attr('id')].join(":")
     @bind() if @supports_html5_storage()
   
   supports_html5_storage: ()->
     try 
       return 'localStorage' of window and window['localStorage']?;
     catch 
       false

   bind: ()->
     listeners = $('.var-listener')
     @loadFromLocalStorage(el) for el in listeners
     $(el).change(@inputUpdated) for el in listeners
     
   loadFromLocalStorage: (_element)->
     element = $(_element)
     varName = [@namespace,element.attr('id')].join(":")
     
     currentValue = element.val()
     storedValue = window.localStorage.getItem(varName)
     
     console.log "I want to store value of ", varName unless (currentValue? or not storedValue? or storedValue == "")
     element.val(storedValue) unless (currentValue? or not storedValue? or storedValue == "")
  
   inputUpdated: (evt)->
     tgt = $(evt.target)
     varName = [@namespace,tgt.attr('id')].join(":");
     window.localStorage.setItem(varName,tgt.val());
     console.debug "Saved in localstorage ", varName, tgt.val();
     

window.Storager ?= Storager