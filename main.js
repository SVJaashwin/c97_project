function add_user(){
    var name = document.getElementById("user_name").value ;
    localStorage.setItem("user_name",name);
    window.location="room.html";
}