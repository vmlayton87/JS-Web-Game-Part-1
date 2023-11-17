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

// Bonus: Sky and Grass Images 

/* Plan to mess with this more later. 

function background (source, heightRepeat) {
    for (left = 0; left < window.innerWidth; left++) {
      newImage(source, left, 0)
      
      for (height = 0; height < heightRepeat*100; height++) {
        newImage(source, left, height)
        height = height + 99
      }
      left = left + 99
    }
  }
  
  background('assets/grass.png', 5)
  
  */