class ProjectNamer

   constructor: (@options)->
     @adjectives = ['Red','Power','Blue','Slender','Brilliant','Glamourous','Fading']
 
     @objects = ['Koala','Giraffe','Mastodon','Frog','Zebra','Manatee','Gorilla']

     @complements = ['Wizard','House','Hut','Train','Gun','Boat','Ice-cream']

   chooseRandom: (list)->
     list[Math.floor(Math.random() * list.length)]

   newName: ()->

      [@chooseRandom(@adjectives),@chooseRandom(@objects),@chooseRandom(@complements)].join('-').toLowerCase()


window.ProjectNamer ?= ProjectNamer