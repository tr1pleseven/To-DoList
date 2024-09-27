//variables
let todoinput = document.querySelector(".inputtodo")
let submitbutton = document.querySelector(".btn")
let _ul = document.querySelector("ul")

let clearlistbtn = document.getElementById("clearlist")

let progressbar = document.getElementById("progresso")

var gg = undefined
let checkboxeson = 0

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
if(todoinput.value != ""){
    //assign time
    const time = now.getDay()

    console.log(todoinput.value)

    e.preventDefault()


    //_CHILD_APPEND_LIST
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(todoinput.value))
    var deletebtn = li.appendChild(document.createElement("button"))
    deletebtn.setAttribute("type","submit")
    deletebtn.textContent = "X"
    deletebtn.className = "Delete"



    var lilabel = li.appendChild(document.createElement("label"))
    lilabel.className = "Progress"
    lilabel.textContent = "Finished:"

    gg = lilabel.appendChild(document.createElement("input"))
    gg.setAttribute("type","checkbox")
    console.log(time)
    gg.addEventListener('change', changefunction)


    
    

    li.className = "todo"

    _ul.appendChild(li)
    todoinput.value = null

    


    deletebtn.addEventListener("click", deleteevent)
    progressbar.textContent = `Progress:${checkboxeson}`
    function deleteevent(e){
        deletebtn.parentElement.remove()
        console.log(deletebtn.parentElement)
    }
}else{
    return
}


}

//_EVENTLISTENERS2.0

function changefunction(e){
    if(e.checked){
        console.log("true")
    }else if (e.checked == false){
        console.log("false")
    }
}



function inputevent(e){
    e.preventDefault()
    console.log(todoinput.value)
}