// Image function. Puts image on browser

function newImage (source, left, bottom) {
    let name = document.createElement('img')
    name.src = source
    name.style.position = 'fixed'
    name.style.left = left + 'px'
    name.style.bottom = bottom + 'px'
    document.body.append(name)
    return name
}

// Bonus: Sky and Grass Images 


function background (source, start, stop) {
  
  for (height = 0; height < stop/100; height++) {
    newImage(source, 0, start)
          
    for (left = 0; left < window.innerWidth; left++) {
      newImage(source, left, start)
      
         left = left + 99
      
    }
    start = start + 99
}
}

//let horizon = window.innerHeight*0.65 // Use this horizon variable for percentage of screen based horizon. Change decimal to change where the horizon is. (it is a percentage from the bottom of the screen)

let horizon = 500 //use this for pixel based horizon

background('assets/grass.png', 0, horizon)
background('assets/sky.png', horizon, window.innerHeight)



//  Images

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// Item function. Creates an image that is clickable

function newItem (source, left, bottom) {
    let item = newImage(source, left, bottom)
    item.addEventListener('dblclick', function(){
        item.remove() 
    })
}

//  Items

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

