//variables
let todoinput = document.querySelector(".inputtodo")
let submitbutton = document.querySelector(".btn")
let _ul = document.querySelector("ul")

let clearlistbtn = document.getElementById("clearlist")


//get date
const now = new Date()


//event listeners
submitbutton.addEventListener("click", clickevent)
todoinput.addEventListener("input" , inputevent)
clearlistbtn.addEventListener("click", clearlist)


function clearlist(e){
   _ul.innerHTML = ""
}



function clickevent(e){

    //assign time
    const time = now.getDay()

e.preventDefault()
var li = document.createElement("li")

//_CHILD_APPEND_LIST
li.appendChild(document.createTextNode(todoinput.value))

var newdiv1 = li.appendChild(document.createElement("div"))
var lilabel = newdiv1.appendChild(document.createElement("label"))
lilabel.className = "Progress"
lilabel.textContent = "Done:"



var gg = lilabel.appendChild(document.createElement("input"))
gg.setAttribute("type","checkbox")
console.log(time)

li.className = "todo"


_ul.appendChild(li)
todoinput.value = null



}

function inputevent(e){
    e.preventDefault()
    console.log(todoinput.value)
}