var modal = document.getElementById('myModal');

var modal2 = document.getElementById('myModal2');

var btn = document.getElementById("jsButt");

var btn2 = document.getElementById("mainButt");

var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal)
        {
            modal.style.display = "none";
        }
    if(event.target == modal2) 
        {
            modal2.style.display = "none";
        }
}



