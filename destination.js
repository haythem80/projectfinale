console.log(document)
const likeElt=document.getElementsByClassName("fa-heart");
// console.log(likeElt)
for(var i=0;i< likeElt.length;i++ ){
    likeElt[i].addEventListener("click",likecolor);
}

function likecolor(event){
var likeEvent=event.target

console.log(likeEvent.style)
if(likeEvent.style.color===""){

    likeEvent.style.color="red"
}
else if(likeEvent.style.color==="red"){

    likeEvent.style.color=""
}
}

const deleteElt=document.getElementsByClassName("fa-trash");
// console.log(deleteElt)
for(var i=0;i< deleteElt.length;i++ ){
    deleteElt[i].addEventListener("click",deleteRow);
}

function deleteRow(event){
const deleteEvent=event.target
// console.log(deleteEvent)
const del=deleteEvent.parentElement
// console.log(del)
del.remove();
}
