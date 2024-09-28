//variables
let todoinput = document.querySelector(".inputtodo")
let submitbutton = document.querySelector(".btn")
let _ul = document.querySelector("ol")

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
   _CHECKBOXESON = 0
   progressbar.textContent = `Finished Tasks:${_CHECKBOXESON}`
}



function clickevent(e,_change){
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

    let spancheck = lilabel.appendChild(document.createElement("span"))

    spancheck.className = "checkmark"

    

    

    

    li.className = "todo"

    _ul.appendChild(li)
    todoinput.value = null
    
    

    

    const collection = document.querySelectorAll(".CheckTest")


    gg.addEventListener('change', changefunction)


    function changefunction(_change){
           
            

            if (_change.target.checked == true){
                console.log(_change.target.checked + "1")
                _CHECKBOXESON = _CHECKBOXESON + 1
                _change.target.setAttribute("onclick","return false")
                console.log(_CHECKBOXESON)
                progressbar.textContent = `Finished Tasks:${_CHECKBOXESON}`
                
                return _CHECKBOXESON
                
              } 

    }


    deletebtn.addEventListener("click", deleteevent)
    function deleteevent(e){
        deletebtn.parentElement.remove()
       
        console.log(e.checked)
        if(e.target.parentElement.querySelector('.CheckTest').checked == true) {
            _CHECKBOXESON = _CHECKBOXESON - 1
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