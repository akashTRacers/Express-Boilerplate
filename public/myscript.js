function UserAction(articleId) {
    console.log('article Id:: ', articleId);
    var xhttp = new XMLHttpRequest();
    xhttp.open("Delete", "http://localhost:8002/delete", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
   
}