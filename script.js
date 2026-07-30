function validateForm() {

    
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let email = document.getElementById("email").value;

    
    if (name == "" || roll == "" || dept == "" || email == "") {
        alert("Fill all fields");
        return;
    }


    let pattern = /^[^\s@]+@[^\s@]+\.com+$/;
    if (!pattern.test(email)) {
        alert("Enter valid email");
        return;
    }

    
    document.getElementById("dname").innerHTML = name;
    document.getElementById("droll").innerHTML = roll;
    document.getElementById("ddept").innerHTML = dept;
    document.getElementById("demail").innerHTML = email;

    
    let lastDigit = roll.charAt(roll.length - 1);

    showSkill(lastDigit);

    
    let tech = ["HTML", "CSS", "JavaScript"];

    let output = "";

    tech.forEach(function (item) {
        output += "<li>" + item + "</li>";
    });

    document.getElementById("tech").innerHTML = output;

    
    document.getElementById("myForm").reset();

}


function showSkill(lastDigit) {

    if (lastDigit <= 3) {
        document.getElementById("result").innerHTML = "Skill Level : Beginner";
    }

    else if (lastDigit <= 7) {
        document.getElementById("result").innerHTML = "Skill Level : Intermediate";
    }

    else {
        document.getElementById("result").innerHTML = "Skill Level : Advanced";
    }

}
