function socialMedia(x){
    if(x == 1){
        window.open("https://www.linkedin.com/in/eng-m-ma9dy/","_blank")
    }else if(x == 2){
        window.open("https://github.com/Eng-M-Ma9dy","_blank")
    }else if(x == 3){
        window.open("https://www.facebook.com/Eng.M.Ma9dy/","_blank")
    }else if(x == 4){
        window.open("https://wa.me/+201140155633","_blank")
    }
}


function codePage(x){
    if(x == 1){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-HTML/","_blank")
    }else if(x == 2){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-CSS/","_blank")
    }else if(x == 3){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-SASS/","_blank")
    }else if(x == 4){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-Bootstrap/","_blank")
    }else if(x == 5){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-JS/","_blank")
    }else if(x == 6){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-TS/","_blank")
    }else if(x == 7){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-React/","_blank")
    }else if(x == 8){
        window.open("https://eng-m-ma9dy.github.io/FrontEnd-Angular/","_blank")
    }
}



let openBar     = document.getElementById("btnOpenBar")
let closeBar    = document.getElementById("btnCloseBar")

$("#btnOpenBar").click(function(){
    $("#allShapes2").animate({'width':'70%'},1000);

    openBar.classList.add("d-none");
    closeBar.classList.remove("d-none");
})

$("#btnCloseBar").click(function(){
    $("#allShapes2").animate({'width':'0%'},1000);
    closeBar.classList.add("d-none");
    openBar.classList.remove("d-none");
})
