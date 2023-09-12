var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")

var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")

var sign = "X"

function selectedBox(id){
    var selectedElement = document.getElementById(id)
    if(sign=="X"){
        player2.style.textShadow = "5px 5px 10px red, -5px -5px 10px red"
        player1.style.textShadow = "none"
        selectedElement.style.backgroundColor = "blue"
        selectedElement.style.boxShadow = "2px 2px 5px blue, -2px -2px 5px blue"
        selectedElement.style.border = "1px solid skyblue"
    }else{
        player1.style.textShadow = "5px 5px 10px blue, -5px -5px 10px blue"
        player2.style.textShadow = "none"
        selectedElement.style.backgroundColor = "red"
        selectedElement.style.boxShadow = "2px 2px 5px red, -2px -2px 5px red"
        selectedElement.style.border = "1px solid orange"
    }
    if(selectedElement.innerText == ""){
        selectedElement.innerText = sign

        setTimeout(function(){
            winner(sign)
        },100)
        
        setTimeout(function(){
            if(sign == "X"){
                sign="O"
            }else{
                sign="X"
            }
        },100)
    }
}

//Winner Logic
function winner(sign){
    if((box1.innerText == sign && box2.innerText == sign && box3.innerText == sign) || (box4.innerText == sign && box5.innerText == sign && box6.innerText == sign) || (box7.innerText == sign && box8.innerText == sign && box9.innerText == sign) || (box1.innerText == sign && box4.innerText == sign && box7.innerText == sign) || (box2.innerText == sign && box5.innerText == sign && box8.innerText == sign) || (box3.innerText == sign && box6.innerText == sign && box9.innerText == sign) || (box1.innerText == sign && box5.innerText == sign && box9.innerText == sign) || (box3.innerText == sign && box5.innerText == sign && box7.innerText == sign)){
        if(sign == "X"){
            player1.className = "fa-solid fa-user-graduate"
            player1.style.textShadow = "5px 5px 10px blue, -5px -5px 10px blue"
            player2.className = "fa-solid fa-user-injured"
            player2.style.textShadow = "none"
            document.getElementById("1").innerText = "WINNER"
            document.getElementById("1").style.fontSize = "50px"
            count = 3
            var timer = document.getElementById("timer")
            var id = setInterval(function(){
                if(count<=0){
                    clearInterval(id)
                }
                timer.innerText=count
                count-=1
            },1000)
            setTimeout(function(){
                location.reload()
            },4000)
        }else{
            player2.className = "fa-solid fa-user-graduate"
            player2.style.textShadow = "5px 5px 10px red, -5px -5px 10px red"
            player1.className = "fa-solid fa-user-injured"
            player1.style.textShadow = "none"
            document.getElementById("2").innerText = "WINNER"
            document.getElementById("2").style.fontSize = "50px"
            document.getElementById("2").style.color = "red"
            count = 3
            var timer = document.getElementById("timer")
            var id = setInterval(function(){
                if(count<=0){
                    clearInterval(id)
                }
                timer.innerText=count
                count-=1
            },1000)
            setTimeout(function(){
                location.reload()
            },4000)
        }
    }
}