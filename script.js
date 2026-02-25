function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+=val

}

function clearspecific(){
    document.getElementById("screen").value=""

}

function equalsAnswer(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
