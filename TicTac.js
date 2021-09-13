let cells = document.querySelectorAll('.row > div');
//console.log(cells);
var a = 0;
for(let t = 0; t < cells.length; t++) {
cells[t].addEventListener('click', cellClicked);
}

function cellClicked($event){
$event.target.textContent = a %2 == 0 ? 'X': 'O'
let message = isWinner(document.querySelectorAll('.row > div'));
console.log(message)
a++;
if(!message) {
    draw()
}

function isWinner(cells){
let result = ''
    if((cells[0].textContent && (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent))){
        result ='You are getting hot!'
}
     if((cells[3].textContent && (cells[3].textContent == cells[4].textContent && cells[3].textContent == cells[5].textContent))){
         result = 'Getting even hotter!!'
    } 
    if((cells[6].textContent &&(cells[6].textContent == cells[7].textContent && cells[6].textContent == cells[8].textContent))) {
result ='Winner, winner chicken dinner!'
    }
    if((cells[0].textContent && (cells[0].textContent == cells[4].textContent && cells[0].textContent == cells[8].textContent))) {
result = 'Win Win!'
    }
    if((cells[2].textContent && (cells[2].textContent == cells[4].textContent && cells[2].textContent == cells[6].textContent))) {
result = 'You are the GOAT!'
    }
    if((cells[0].textContent && (cells[0].textContent == cells[3].textContent && cells[0].textContent == cells[6].textContent))){
result = 'We have a winner!'
    }
    if((cells[2].textContent && (cells[2].textContent == cells[5].textContent && cells[2].textContent == cells[8].textContent))) {
result = 'Do you smell what the WIN was cooking!!!'
    }
    if((cells[1].textContent && (cells[1].textContent == cells[4].textContent && cells[1].textContent == cells[7].textContent))){
result = 'Winner!!!!!!!'
    }
return result
    
}

function draw(){
    if(a == 9){
console.log('Draw me a lemon!!!')
    } 
}
}