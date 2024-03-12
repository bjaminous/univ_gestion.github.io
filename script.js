var links = document.getElementsByClassName("highlight-link");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function() {
        this.classList.add("touch-active");
    });

    links[i].addEventListener("mouseout", function() {
        this.classList.remove("touch-active");
    });

    links[i].addEventListener("click", function(event) {
        event.preventDefault();
    });

    links[i].addEventListener("touchstart", function() {
        this.classList.add("touch-active");
    });

    links[i].addEventListener("touchend", function() {
        this.classList.remove("touch-active");
    });

    links[i].addEventListener("touchcancel", function() {
        this.classList.remove("touch-active");
    });
}

//maximze et restore
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

//faire apparaitre le tableau
function toggleTable() {
    var table = document.getElementById("Table_course");
    var containt = document.getElementById ("container4");
    var btn1 = document.getElementById ("register_btn");
    var btn2 = document.getElementById ("print_btn");
    var thead = document.getElementById ("thead");

    if (table.style.display == "none") {
        table.style.display = "block";
        containt.style.height = "100%";
        btn1.style.display = "block";
        btn2.style.display = "block";
        thead.style.display = "block";

    } else {
        table.style.display = "none";
        containt.style.height = "400px";
        btn1.style.display = "none";
        btn2.style.display = "none";
        thead.style.display = "none";
    }
}

//alert
function afficherAlerte() {
    var reponse = confirm("If you are sure that the courses you have selected click ok");
    if (reponse == true) {
      window.location.href = "student_course.html";
    } else {
      
    }
  }

//....
document.getElementById("arrow").addEventListener("click", function() {
    window.location.href = "course_registration.html";
});
document.getElementById("registre").addEventListener("click", function() {
    window.location.href = "course_registration.html";
});
