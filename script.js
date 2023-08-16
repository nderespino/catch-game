let game =  document.querySelector(".game");
let character =  document.querySelector(".character");
let fruits =  document.querySelector(".fruits");
let badFruit =  document.querySelector(".badFruit");
let score = 0;
let charLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
let charBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//let fruitBottom = parseInt(window.getComputedStyle(fruits).getPropertyValue("bottom"));


//function for how much character moves left
function moveCharLeft (){
    if(charLeft > 0) {
    charLeft -= 15;
    character.style.left = charLeft + 'px';
    }
}
//how character moves right
function moveCharRight (){
    if (charLeft < 450) {
    charLeft += 15;
    character.style.left= charLeft + 'px';
    }
}
//player controls with arrow keys
function control(e){
    if (e.key == "ArrowLeft") {
        moveCharLeft();
    }
    if (e.key == "ArrowRight") {
        moveCharRight();
    }
}
//keydown event listener
document.addEventListener("keydown", control);

//function to generate fruit at random
function generateFruit (){
        let fruitBottom = 470;
        let fruitLeft = Math.floor(Math.random() * 450);
        let fruit = document.createElement('div');
        fruit.setAttribute("class", "fruit");
        fruits.appendChild(fruit);
        
         
//function for fruit to fall down to be caught by player and add score(inside generatefruit function)
    function fallDownFruit() {
        fruitBottom -= 5;
        fruit.style.bottom = fruitBottom + 'px';
        fruit.style.left = fruitLeft + 'px';
        if (fruitBottom < charBottom + 40 && fruitBottom > charBottom && fruitLeft > charLeft -
            30 && fruitLeft < charLeft + 80){
                fruits.removeChild(fruit);
                score++;
            }
        
    }
    setInterval(fallDownFruit, 20);
    setTimeout(generateFruit, 1000);
    document.getElementById('score').innerHTML = "Score: " + score;
    }

    //copied functions for bad fruit attributes
    function generateBadFruit(){
        let badFruitBottom = 470;
        let badFruitLeft = Math.floor(Math.random() * 450);
        let badFruits = document.createElement('div');
        badFruits.setAttribute("class", "badFruits");
        badFruit.appendChild(badFruits);
       
         

    function fallDownBadFruit() {
        badFruitBottom -= 5;
        badFruit.style.bottom = badFruitBottom + 'px';
        badFruit.style.left = badFruitLeft + 'px';
        if (badFruitBottom < charBottom + 40 && badFruitBottom > charBottom && badFruitLeft > charLeft -
            30 && badFruitLeft < charLeft + 80){
                badFruit.removeChild(badFruits);
                clearInterval(fallInterval);
                alert("You lose!")
                
                
               
            }
        
    }
    
    //interval to be cleared when player loses
    let fallInterval = setInterval(fallDownBadFruit, 20);
    setTimeout(generateBadFruit, 5000);
    
    }

  
generateFruit();
generateBadFruit();



