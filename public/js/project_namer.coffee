class ProjectNamer

   constructor: (@options)->
     @adjectives = ['Red','Power','Blue','Slender','Brilliant','Glamourous','Fading']
 
     @objects = ['Koala','Giraffe','Mastodon','Frog','Zebra','Manatee','Gorilla']

     @complements = ['Wizard','House','Hut','Train','Gun','Boat','Ice-cream']

   chooseRandom: (list)->
     list[Math.floor(Math.random() * list.length)]

   nameIfEmpty :(_element)->
    element = $(_element)
    element.val(@newName()) if element.val() == ""

   bind: ()->
     inputs = $('input.var-listener.needs-naming')
     @nameIfEmpty(input) for input in inputs
     
   newName: ()->

      [@chooseRandom(@adjectives),@chooseRandom(@objects),@chooseRandom(@complements)].join('-').toLowerCase()


window.ProjectNamer ?= ProjectNamer