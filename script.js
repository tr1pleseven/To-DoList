//variables
let todoinput = document.querySelector(".inputtodo")
let submitbutton = document.querySelector(".btn")
let _ul = document.querySelector("ul")

let clearlistbtn = document.getElementById("clearlist")

let progressbar = document.getElementById("progresso")

var gg = undefined
let _CHECKBOXESON = 0

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
    gg.className = "CheckTest"
    console.log(time)

    

    

    

    li.className = "todo"

    _ul.appendChild(li)
    todoinput.value = null
    
    

    deletebtn.addEventListener("click", deleteevent)
    
    function deleteevent(e){
        deletebtn.parentElement.remove()
        console.log(deletebtn.parentElement)
        _CHECKBOXESON = _CHECKBOXESON - 1
        return _CHECKBOXESON
    }

    const collection = document.querySelectorAll(".CheckTest")


    let _check = 

    gg.addEventListener('change', changefunction)

    function changefunction(e){
           
            
        
            if (e.target.checked == true){
                console.log(gg.checked + "1")
                _CHECKBOXESON = _CHECKBOXESON + 1
                e.target.setAttribute("onclick","return false")
                console.log(_CHECKBOXESON)
                progressbar.textContent = `Finished Tasks:${_CHECKBOXESON}`
                return _CHECKBOXESON
              } 
                
    }

    /*/function changefunction(_check){
        if (_check.checked == true){
            console.log(_check.checked + "1")
            _CHECKBOXESON = _CHECKBOXESON + 1 
            progressbar.textContent = `Progress:${_CHECKBOXESON}`
            console.log(_CHECKBOXESON)
          } else if (_check.checked == false) {
            console.log(_check.checked + "2")
            if(_CHECKBOXESON > 0){
                _CHECKBOXESON = _CHECKBOXESON - 1
                progressbar.textContent = `Progress:${_CHECKBOXESON}`
                console.log(_CHECKBOXESON)
            }else {
                return
            }
            
          }
    }
    /*/
}else{
    return
}
}

//_EVENTLISTENERS2.0





function inputevent(e){
    e.preventDefault()
    console.log(todoinput.value)
}