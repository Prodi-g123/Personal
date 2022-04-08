const phrase = ["Hello World", "from javascript"];
const text = document.querySelector('p');
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;
let isEndOfLine = false;
function loop(){
    
    isEndOfLine = false;
    

    if(i <= phrase.length){

        if(!isDeleting && j <= phrase[i].length){
            currentPhrase.push(phrase[i][j]);       
            j++;
            text.innerHTML = currentPhrase.join('');
            
        }
        if(isDeleting && j <= phrase[i].length){
           currentPhrase.pop(phrase[i][j]);
           j--;
           text.innerHTML = currentPhrase.join('');
        }

        if(j == phrase[i].length){
            isDeleting = true;
            isEndOfLine = true;
           
        }

        if(isDeleting && j === 0){
            currentPhrase = [];
            isDeleting  = false;
            i++; 

            if(i === phrase.length){
                i = 0;
            }
        }

        
    }
    const spedup = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    let time = "";//isEndOfLine ? 2000 : isDeleting ? spedup : normalSpeed;

    if(isEndOfLine){
        time = 2000;
    }
    else if(isDeleting){
        time = spedup;
    }
    else{
        time = normalSpeed;
    }
    setTimeout(loop,time);
}

loop();

// setInterval(() =>{
//     loop();
//  }, 1000)

 /*
 
  if(i <= phrase.length && !isEndOfLine){
        
        if (j <= phrase[i].length) {
            currentPhrase.push(phrase[i][j]);
            console.log(currentPhrase[i][j]);
            j++;     

            if(j == phrase[i].length){
                i++;
                console.log("im finished");
            }   
        }
        
    }

    
    if(i == phrase.length && !isEndOfLine){
        isEndOfLine = true;
    }
    
 */
