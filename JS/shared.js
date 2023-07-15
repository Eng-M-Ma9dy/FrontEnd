"use strict";

/* ----------------------------------------------------------------------------- */
/* Loader ---------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

window.addEventListener("load",function(){
        
  $("#loaderDiv").fadeOut(1000,function(){

    $("#myLoading").remove()

    $("body").css("overflow-y","auto")

  })

}) 

/* ----------------------------------------------------------------------------- */
/* Header Section ---------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

let words = document.querySelectorAll(".word");

words.forEach((word) => {

  let letters = word.textContent.split("");

  word.textContent = "";

  letters.forEach((letter) => {

    let span = document.createElement("span");

    span.textContent = letter;

    span.className = "letter";

    word.append(span);

  });

});


let currentWordIndex = 0;

let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = "1";


let rotateText = () => {

  let currentWord = words[currentWordIndex];

  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {

    setTimeout(() => {

      letter.className = "letter out";

    }, i * 80);

  });

  nextWord.style.opacity = "1";

  Array.from(nextWord.children).forEach((letter, i) => {

    letter.className = "letter behind";

    setTimeout(() => {

      letter.className = "letter in";

    }, 340 + i * 80);

  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};

rotateText();

setInterval(rotateText, 2500);

/* ----------------------------------------------------------------------------- */
/* Main Section ---------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

function changeScope(btnNun){

  let section = document.getElementById(`button${btnNun}`);

  hiddenDisplay(section,btnNun)
}



function hiddenDisplay(s,n){
  
  let btn = document.getElementById(`btn-${n}`)

  if(s.classList.contains('d-none') == true){

      s.classList.remove('d-none')

      btn.classList.replace('text-danger','text-primary')
  }else{
      s.classList.add('d-none')

      btn.classList.replace('text-primary','text-danger')
  }
}

/* Search ---------------------------------------------------------------------- */

function searchDB(searchKey){

  let allSections = document.querySelectorAll(".mega")

  for (let i=0 ; i < allSections.length; i++){
      
    allSections[i].classList.add("d-none")
      
    if (allSections[i].textContent.toLowerCase().includes(searchKey.toLowerCase())) {

      allSections[i].classList.replace("d-none","d-block")

    }

  }

}

/* ----------------------------------------------------------------------------- */
/* Sharding -------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

function openLink(url){

    return   window.open(`https://${url}`,"_blank")
  
  }
