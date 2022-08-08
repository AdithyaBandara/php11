function m() {

    var email = document.getElementById("e").value;
    var password = document.getElementById("p").value;

    var form = new FormData();
    form.append("e",email);
    form.append("p",password);




    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4) {

            var response = request.responseText;

            document.getElementById("t").innerHTML = response;


        }
    };

    request.open("POST", "signin.php", true);
    request.send();
}