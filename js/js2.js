function openinfo(evt,infoname) {
    var i, tagcontent  ,taglink;
tagcontent = document.getElementsByClassName('tagcontent');
for (i = 0; i < tagcontent.length; i++) {
    tagcontent[i].style.display = "none";
}
taglink = document.getElementsByClassName("taglink"); 
for (i = 0; i < taglink.length;i++) {
 taglink[i].className = taglink[i].className.replace("active"," ")  ;
}
document.getElementById(infoname).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById('defaultopen').click()