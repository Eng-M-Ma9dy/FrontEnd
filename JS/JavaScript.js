"use strict";

/* ----------------------------------------------------------------------------- */

let days = ''
let initialDay = 1

for (let i = 0 ; i < 31 ; i++ ){
    days += '<option value="">' + (initialDay + i) + '</option>' ;
}

document.getElementById("day").innerHTML = days ;

//-------------------------------------------------------------------------------------

let months = ''
let initialMonth = 1

for (let i = 0 ; i < 12 ; i++ ){
    months += '<option value="">' + (initialMonth + i) + '</option>' ;
}

document.getElementById("month").innerHTML = months ;

//-------------------------------------------------------------------------------------

let years = ''
let initialYear = 1900

for (let i = 0 ; i < 131 ; i++ ){
    years += '<option value="">' + (initialYear + i) + '</option>' ;
}

document.getElementById("year").innerHTML = years ;
  
//-------------------------------------------------------------------------
    
function displayName(){
    
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName") ;

    window.alert(fName.value+' '+lName.value)
        
}

//---------------------------------------------------------------------------------------

function phoneValidation(){

    let phone   = document.getElementById('phone');

    let phoneRegex =/^(\+2)?01[0125][0-9]{8}$/;

    if (phoneRegex.test(phone.value)){

        document.getElementById('invalidPhone').classList.add('d-none')

        invalidPhone(1)

    }else{

        document.getElementById('invalidPhone').classList.remove('d-none')

        invalidPhone(0)
    }

}


function invalidPhone(n){

    if (n === 1){

        document.getElementById('doneBtn').classList.remove('disabled')

    }else{

        document.getElementById('doneBtn').classList.add('disabled')

    }
}

//-----------------------------------------------------------------------------------------

function passValidation(){

    let pass   = document.getElementById('pass');

    let passRegexCapital =/^[A-Z]+/m;
    let passCapital;

    let passRegexSmall =/[a-z]+/m;
    let passSmall;

    let passRegexSpatial =/[\~\!\@\#\$\%\^\&\*\(\)\_\-\=\+\|\\\/\.]/m;
    let passSpatial;

    let passRegexCharacters =/(.){8,}/m;
    let passCharacters;

    let passRegexNumber =/[0-9]$/m;
    let passNumber;

    if (passRegexCapital.test(pass.value)){

        document.getElementById('capitalLetter').classList.replace('text-danger','text-light')
        document.getElementById('capitalLetterX').classList.replace('fa-xmark','fa-check')
        passCapital = true

    }else{

        document.getElementById('capitalLetter').classList.replace('text-light','text-danger')
        document.getElementById('capitalLetterX').classList.replace('fa-check','fa-xmark')
        passCapital = false
    }
    
    //-----------------

    if (passRegexSmall.test(pass.value)){

        document.getElementById('smallLetter').classList.replace('text-danger','text-light')
        document.getElementById('smallLetterX').classList.replace('fa-xmark','fa-check')
        passSmall = true

    }else{

        document.getElementById('smallLetter').classList.replace('text-light','text-danger')
        document.getElementById('smallLetterX').classList.replace('fa-check','fa-xmark')
        passSmall = false
    }

    //-----------------

    if (passRegexSpatial.test(pass.value)){

        document.getElementById('spatial').classList.replace('text-danger','text-light')
        document.getElementById('spatialX').classList.replace('fa-xmark','fa-check')
        passSpatial = true

    }else{

        document.getElementById('spatial').classList.replace('text-light','text-danger')
        document.getElementById('spatialX').classList.replace('fa-check','fa-xmark')
        passSpatial = false
    }

    //----------------------

    if (passRegexCharacters.test(pass.value)){

        document.getElementById('characters').classList.replace('text-danger','text-light')
        document.getElementById('charactersX').classList.replace('fa-xmark','fa-check')
        passCharacters = true

    }else{

        document.getElementById('characters').classList.replace('text-light','text-danger')
        document.getElementById('charactersX').classList.replace('fa-check','fa-xmark')
        passCharacters = false
    }

    //----------------------

    if (passRegexNumber.test(pass.value)){

        document.getElementById('passNumber').classList.replace('text-danger','text-light')
        document.getElementById('passNumberX').classList.replace('fa-xmark','fa-check')
        passNumber = true

    }else{

        document.getElementById('passNumber').classList.replace('text-light','text-danger')
        document.getElementById('passNumberX').classList.replace('fa-check','fa-xmark')
        passNumber = false
    }

    //------------------------

    if (
        passCapital === true 
        && 
        passSmall === true 
        && 
        passSpatial === true 
        && 
        passCharacters === true 
        && 
        passNumber === true ){

        invalidPass(1)

    }else{

        invalidPass(0)
    }

}

//----------------------------------------------------------------------

function invalidPass(n){

    if (n === 1){

        document.getElementById('donePass').classList.remove('disabled')

    }else{

        document.getElementById('donePass').classList.add('disabled')

    }
}

//----------------------------------------------------------------------

function hdp(){
    if (document.getElementById('pass').getAttribute('type') == 'password'){
        document.getElementById('pass').setAttribute('type','text')
        document.getElementById('eye').classList.replace('fa-eye-slash','fa-eye')
    }else{
        document.getElementById('pass').setAttribute('type','password')
        document.getElementById('eye').classList.replace('fa-eye','fa-eye-slash')
    }
}

//----------------------------------------------------------------------

function thanks(){
    window.alert("Thanks")
}


//--------------------------------------------------------------------------------

function btnWelcome(){
    window.alert('Welcome')
}

function btnWelcomeMagdy(){
    window.alert('Welcome Magdy')
}

//--------------------------------------------------------------------------------

let allBTN = document.querySelectorAll("#allBTN button")
function alertWelcome(){
    window.alert('Welcome')
}

for(let i = 0 ; i < allBTN.length ; i++){

    allBTN[i].addEventListener('click',alertWelcome)    
}

//--------------------------------------------------------------------------------


let allNoDemo = document.querySelectorAll("#allNoDemo button:not(#demo)")

function alertWelcomeMega(){
    window.alert('Welcome')
}

for(let i = 0 ; i < allNoDemo.length ; i++){

    allNoDemo[i].addEventListener('click',alertWelcomeMega)    
}

//--------------------------------------------------------------------------------

function randomColor(){

    let colorChange = document.getElementById('colorChange')

    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    colorChange.style.background = `rgb(${red},${green},${blue})`
}


//----------------------------------------------------------------------


document.getElementById("btnOpen").addEventListener("click",function(){

    window.open("https://www.facebook.com/Eng.M.Ma9dy/")
})


document.getElementById("btnOpenSelf").addEventListener("click",function(){

    window.open("https://www.facebook.com/Eng.M.Ma9dy/","_self")
})


document.getElementById("btnOpenBlank").addEventListener("click",function(){

    window.open("https://www.facebook.com/Eng.M.Ma9dy/","_blank")
})


document.getElementById("btnOpenBlankWH").addEventListener("click",function(){

    window.open("https://www.facebook.com/Eng.M.Ma9dy/","_blank","width=400px,height=400px")
})


document.getElementById("btnLocationHref").addEventListener("click",function(){

    window.location.href="https://www.facebook.com/eng.m.ma9dy"
})


document.getElementById("btnLocationAssign").addEventListener("click",function(){

    window.location.assign("https://www.facebook.com/eng.m.ma9dy")
})


document.getElementById("btnForward").addEventListener("click",function(){

    window.history.forward()
})


document.getElementById("btnBack").addEventListener("click",function(){

    window.history.back()
})


document.getElementById("btnCloseWindow").addEventListener("click",function(){

    window.close()
})


//---------------------

document.getElementById("innerWidth").addEventListener("click",function(){

    window.alert("Inner Width = " + window.innerWidth);

})


document.getElementById("innerHeight").addEventListener("click",function(){

    window.alert("Inner Height = " + window.innerHeight);
})





document.getElementById("screenWidth").addEventListener("click",function(){

    window.alert("Screen Width = " + window.screen.width);
})


document.getElementById("screenHeight").addEventListener("click",function(){

    window.alert("Screen Height = " + window.screen.height);
})





document.getElementById("availWidth").addEventListener("click",function(){

    window.alert("Available Width = " + window.screen.availWidth);
})


document.getElementById("availHeight").addEventListener("click",function(){

    window.alert("Available Height = " + window.screen.availHeight);
})


//----------------------------------------------------------------------------------



// This Function For Do Update Date and Time During Runtime

function updatedDateTime(){
    
    // For Get Date and Time From PC
    let dateTime = new Date();

    //For Get Hours
    let getHours = dateTime.getHours();

    //For Get Minutes
    let getMinutes = dateTime.getMinutes();

    //For Get Seconds
    let getSeconds = dateTime.getSeconds();
    
    //For Get Day
    let getDay = dateTime.getDate()

    //For Get Month
    let getMonth = dateTime.getMonth() + 1

    //For Get Year
    let getYears = dateTime.getFullYear()
    
    // For Display the time in HTML
    document.getElementById("websiteClock").innerHTML = `<span class="text-info">Time : </span>${getHours} : ${getMinutes} : ${getSeconds} `

    // For Display the Date in HTML
    document.getElementById("websiteDate").innerHTML = `<span class="text-info">Date : </span>${getDay} / ${getMonth} / ${getYears} `

    setTimeout(updatedDateTime,1000)
}

updatedDateTime()






//------------------------------------------------------------------

let createImg = document.createElement("img")

createImg.setAttribute("src","./../../src/Images/Toyota.jpg")
createImg.setAttribute("alt","Hello")

createImg.classList.add(
    "border" , 
    "border-5" , 
    "border-primary" , 
    "w-75" , 
)

let divOfCreateImg = document.getElementById("divOfCreateImg") 

divOfCreateImg.append(createImg)

//----------------------------------------------------------------------

let canvas = document.getElementById("canvas")

let cx = canvas.getContext("2d")

cx.moveTo(0,0)

cx.lineTo(100,50)

cx.stroke() 


//---------------------------------------------------------------------

let list1 = []

let myHTTP1 = new XMLHttpRequest();

myHTTP1.open("GET","https://jsonplaceholder.typicode.com/posts");

myHTTP1.send()

myHTTP1.addEventListener("readystatechange",function(){

    if(myHTTP1.readyState == 4 && myHTTP1.status == 200){

        list1 = JSON.parse(myHTTP1.response)

        display1()
    }
})

function display1(){
    var mega1 =``;
    for(var i = 0 ; i < 12 ; i++){
        mega1 +=
        `
        <div class="item1 col-md-4 text-start border my-3">
            <h2>${list1[i].title}</h2>
            <p>${list1[i].body}</p>
        </div>
        `
    }

    document.getElementById("myData1").innerHTML = mega1
}

//---------------------------------------------------------------------------------------

var list2 = []


var myHTTP2 = new XMLHttpRequest();

myHTTP2.open("GET","https://api.themoviedb.org/3/trending/movie/day?api_key=1f5b2e3f24af4de07a676323c4f98b83");

myHTTP2.send()


myHTTP2.addEventListener("readystatechange",function(){

    if(myHTTP2.readyState == 4 && myHTTP2.status == 200){
        
        list2 = JSON.parse(myHTTP2.response).results;

        display2()
    }
})


function display2(){
    var mega2 =``;
    for(var i = 0 ; i < 12 ; i++){
        mega2 +=
        `
        <div class="item2 col-md-4 text-start border my-3">
            <img class="my-3 w-100 bg-black" src="https://image.tmdb.org/t/p/w500${list2[i].poster_path}"/>
            <h2>${list2[i].title}</h2>
            <p>${list2[i].overview}</p>
        </div>
        `
    }

    document.getElementById("myData2").innerHTML = mega2
}

//-----------------------------------------------------------------------------------

var list3 = []


function getNews1(countryCode){

    let myHTTP3 = new XMLHttpRequest();

    myHTTP3.open("GET",`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sport&apiKey=63b5c25842aa4d819175f45f07f1d8c6`);

    myHTTP3.send()

    let myList3 = document.querySelectorAll("ul li")

    for(let i = 0 ; i < myList3.length ; i++){
    
        myList3[i].addEventListener("click",function(e){

            var targetCode = e.target.getAttribute('data_code')
        
            getNews1(targetCode)
        })
    }

    myHTTP3.addEventListener("readystatechange",function(){

        if(myHTTP3.readyState == 4 && myHTTP3.status == 200){
            
            list3 = JSON.parse(myHTTP3.response).articles;

            display3()
        }
    })
}

getNews1("eg")

function display3(){
    let mega3 =``;
    for(var i = 0 ; i < 12 ; i++){
        mega3 +=
        `
        <div class="item2 col-md-4 text-start border my-3">
            <img class="mb-3 w-100 bg-black" src="${list3[i].urlToImage ? list3[i].urlToImage : './../../src/Images/My_Logo_Box.png'}"/>
            <h5>${list3[i].title}</h5>
            <p>${list3[i].description}</p>
        </div>
        `
    }
    document.getElementById("myData3").innerHTML = mega3
}



//--------------------------------------------------------------------------------------



// API After ES6

let list4 = []

async function getMovie4(){

    // Default Method of fetch --> get

    let res4 = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=1f5b2e3f24af4de07a676323c4f98b83",{
        method:"GET"
    });

    // Set API Content In Var finalRes4

    let finalRes4 = await res4.json()


    
    // In This Case API Array in (finalRes4.results);



    // Set API Array in my Array list4

    list4 = finalRes4.results
 
    // call display function

    display4()
}

getMovie4()

function display4(){
    var mega4 =``;
    for(var i = 0 ; i < list4.length ; i++){
        mega4 +=
        `
        <div class="item2 col-md-4 text-start border my-3">
            <img class="my-3 w-100 bg-black" src="https://image.tmdb.org/t/p/w500${list4[i].poster_path}"/>
            <h2>${list4[i].title}</h2>
            <p>${list4[i].overview}</p>
        </div>
        `
    }
    document.getElementById("myData4").innerHTML = mega4
}



//--------------------------------------------------------------------------------------

// jQuery

$("#jQueryHide").click(function(){
    
    $("#jQueryDiv1").hide(1500)

})

$("#jQueryShow").click(function(){
    
    $("#jQueryDiv1").show(1500)

})

$("#jQueryToggle").click(function(){
    
    $("#jQueryDiv1").toggle(1500)

})







$("#jQuerySlideUp").click(function(){
    
    $("#jQueryDiv2").slideUp(1500)

})

$("#jQuerySlideDown").click(function(){
    
    $("#jQueryDiv2").slideDown(1500)

})

$("#jQuerySlideToggle").click(function(){
    
    $("#jQueryDiv2").slideToggle(1500)

})








$("#jQueryFadeOut").click(function(){
    
    $("#jQueryDiv3").fadeOut(1500)

})

$("#jQueryFadeIn").click(function(){
    
    $("#jQueryDiv3").fadeIn(1500)

})

$("#jQueryFadeToggle").click(function(){
    
    $("#jQueryDiv3").fadeToggle(1500)

})








$("#jQueryDiv1Div2").click(function(){

    $("#jQueryDiv1_1").slideToggle(1500,function(){

        $("#jQueryDiv1_2").slideToggle(1500)

    })
})








$("#customAnimate1").click(function(){

    $("#animate1").animate({'width':'100%','height':'100%'},2000)

})

$("#rCustomAnimate1").click(function(){

    $("#animate1").animate({'width':'150px','height':'100px'},2000)

})





$("#customAnimate2").click(function(){

    $("#animate2").animate({'width':'100%'},2000)
    $("#animate2").animate({'height':'100%'},2000)

})

$("#rCustomAnimate2").click(function(){

    $("#animate2").animate({'height':'100px'},2000)
    $("#animate2").animate({'width':'150px'},2000)

})






$("#customAnimate3").click(function(){

    $("#animate3_1").animate({'width':'100%'},2000)
    $("#animate3_2").animate({'width':'100%'},2000)

})

$("#rCustomAnimate3").click(function(){

    $("#animate3_1").animate({'width':'150px'},2000)
    $("#animate3_2").animate({'width':'150px'},2000)

})






$("#customAnimate4").click(function(){

    $("#animate4_1").animate({'width':'100%'},2000,function(){

        $("#animate4_2").animate({'width':'100%'},2000)
    })

})

$("#rCustomAnimate4").click(function(){

    $("#animate4_2").animate({'width':'150px'},2000,function(){

        $("#animate4_1").animate({'width':'150px'},2000)
    })

})





$("#customAnimate5").click(function(){

    $("#animate5_1").animate({'width':'+=50px'},2000,function(){

        $("#animate5_2").animate({'width':'+=80px'},2000)
    })

})

$("#rCustomAnimate5").click(function(){

    $("#animate5_1").css({
        width:'150px',
        height:'100px'
    },2000)

    $("#animate5_2").css({
        width:'150px',
        height:'100px'
    },2000)

})






$("#customAnimate6").click(function(){

    $("#animate6_1").animate({'margin-right':'+=100px'},1000)

    $("#animate6_2").animate({marginLeft:'+=100px'},1000)
  

})

$("#rCustomAnimate6").click(function(){

    $("#animate6_2").animate({marginLeft:'-=100px'},1000)

    $("#animate6_1").animate({'margin-right':'-=100px'},1000)
    

})




$("#customAnimate7").click(function(){

    $("#animate7").animate({'width':'100%'},2000)
    $("#animate7").animate({'height':'20vh'},2000)

})

$("#rCustomAnimate7").click(function(){

    $("#animate7").css({
        width:'100px',
        height:'80px'
    },2000)

})

$("#sCustomAnimate7").click(function(){

    $("#animate7").stop(true,false)

})


//--------------------------------------------------------------------------

$("#customAnimate8").click(function(){

    $("#mainSection").animate({width:"100%"},1500)
    $("#mainSection").animate({height:"75vh"},1500,function() {
        $("#mainTitle").fadeIn(2000,function(){
            $("#divCar1").show(2000,function(){
                $("#divCar2").fadeIn(2000,function(){
                    $("#divCar3").slideDown(2000);
                });
            });
        });
    })

})

$("#rCustomAnimate8").click(function(){

    $("#mainTitle").css({
        display:'none',
    })

    $("#divCar1").css({
        display:'none',
    })
    $("#divCar2").css({
        display:'none',
    })    
    $("#divCar3").css({
        display:'none',
    })

    $("#mainSection").css({
        width:'100px',
        height:'1px'
    })

})





$("#allIMGEx img").click(function (e) { 

    let imgSrc = $(e.target).attr("src");
    
    $("#mainIMGEx").attr("src",imgSrc)
});


//-----------------------------------------------------------------------------

let megaWords = document.querySelectorAll(".megaWord");

megaWords.forEach((megaWord) => {

  let letters = megaWord.textContent.split("");

  megaWord.textContent = "";

  letters.forEach((letter) => {

    let span = document.createElement("span");

    span.textContent = letter;

    span.className = "letter";

    megaWord.append(span);

  });

});


let currentMegaWordIndex = 0;

let maxMegaWordIndex = megaWords.length - 1;

megaWords[currentMegaWordIndex].style.opacity = "1";


let rotateText1 = () => {

  let currentMegaWord = megaWords[currentMegaWordIndex];

  let nextMegaWord = currentMegaWordIndex === maxMegaWordIndex ? megaWords[0] : megaWords[currentMegaWordIndex + 1];

  // rotate out letters of current megaWord
  
  Array.from(currentMegaWord.children).forEach((letter, i) => {

    setTimeout(() => {

      letter.className = "letter out";

    }, i * 80);

  });

  // reveal and rotate in letters of next megaWord

  nextMegaWord.style.opacity = "1";

  Array.from(nextMegaWord.children).forEach((letter, i) => {

    letter.className = "letter behind";

    setTimeout(() => {

      letter.className = "letter in";

    }, 340 + i * 80);

  });

  currentMegaWordIndex = currentMegaWordIndex === maxMegaWordIndex ? 0 : currentMegaWordIndex + 1;

};


rotateText1();

setInterval(rotateText1, 4000);


//-----------------------------------------------------------------------------

$(window).scroll(function(){

  let s2 = $("#section2").offset()

  // offset() | return object contain {top , Left} / (After section on the starting point From Top And Left)

  let windowScrollTop   = $(window).scrollTop()

  if (windowScrollTop > s2.top - 50) {

    $("#navbar11").css({"background-color":"red", padding:"50px"})

  }else{

    $("#navbar11").css({"background-color":"blue", padding:"20px"})

  }

})


//-----------------------------------------------------------------------------

$(window).scroll(function(){

    let s2 = $("#section22").offset()
  
    let windowScrollTop   = $(window).scrollTop()
  
    if (windowScrollTop > s2.top - 50) {
        
      $("#backToTopBTN").fadeIn(500)
  
    }else{
        
      $("#backToTopBTN").fadeOut(500)
  
    }
  
})
  
$("#backToTopBTN").click(function(){

  $("html,body").animate({scrollTop:0},1000)

})  

//-----------------------------------------------------------------------------

$("#colorGearBox").click(function(e){

  let offsetEle = $(e.target).offset().left;
  
  let boxWidth = $(".color-option").outerWidth();
  
  if (offsetEle <= 0) {
  
    $("#color-box").animate({left:`0px`},1000)
  
  }else{
  
    $("#color-box").animate({left:`-${boxWidth}px`},1000)
  
  }

})

let colorSpans = $(".color-option span")

for (let i = 0; i < colorSpans.length; i++) {

  colorSpans.eq(i).css("background-color",getRandomColor())
  
}

function getRandomColor(){
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255

    return `rgb(${r},${g},${b})`
}

colorSpans.click(function(e){

  let allChangeColor = $(".changeColor")

  for (let i = 0; i < colorSpans.length; i++) {

    let color = $(e.target).css("background-color");

    allChangeColor.eq(i).css("color",color)

  }
  
})
