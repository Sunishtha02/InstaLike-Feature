var post=document.getElementById("post");
var heart=document.getElementById("hrt");

post.addEventListener("dblclick", like);

function like(){
    heart.style.visibility="visible";
    setTimeout(function(){;
        heart.style.visibility="hidden";
        heart.style.transition = "";
    },800);
}

