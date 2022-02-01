//login

let input1 = document.getElementById("input1");
let check = document.getElementsByClassName("fa-check-circle");
let axclaim = document.getElementsByClassName("fa-exclamation-circle");
let errorMsg = document.getElementsByClassName("error");
let password = document.getElementById("password");
let user = document.getElementsByClassName("user-input");
let name = document.getElementById("name")
let useremail = document.getElementById("email")
let userpassword = document.getElementById("userpassword")


let gatdat = JSON.parse(localStorage.getItem("userinfo"))


let formValidation = _ => {

    let loginObj = {

        userEmail: input1.value,
        userPass: password.value
    }




    if (input1.value === "" || password.value === "") {


        alert("input required")
    }
    else {

        
        
        
        
        let logindatacheck = gatdat.some((gatdat) => {
            return gatdat.email == input1.value && gatdat.pass == password.value
            
        })
        
        if (logindatacheck === true) {
            
            let  userGetData = JSON.parse(localStorage.getItem("userloginInfo")) || []
            userGetData.push(loginObj)
            localStorage.setItem("userloginInfo", JSON.stringify(userGetData));
            
            
            alert("successfully login")
            // window.location.href = "home.html"
            window.location.assign("home.html")


        }
        else{
            alert("user not exist")
        }


    }

    input1.value = "";
    password.value = ""
}


let showPas = e => {

    var password = document.getElementById("password")

    if (password.value == "") {
        e.disabled = true;
    }
    else {

        if (e.className == "far fa-eye-slash") {
            password.type = "text";
            e.className = "far fa-eye";
        }
        else {
            e.className = "far fa-eye-slash";
            password.type = "password";

        }
    }





}


//sugn up


var frstname = document.getElementById("frstname");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var confirmPas = document.getElementById("confirmPas");

//sign Up function


let signUp = _ => {






    // seting data in local storage//

    let userObj = {

        frstName: frstname.value,
        lastName: lastName.value,
        email: email.value,
        pass: pass.value,
        confirmPas: confirmPas.value
    }



    let array = [userObj]
    let gatdat = JSON.parse(localStorage.getItem("userinfo"))
    let convert;



    if (frstname.value === "" || lastName.value === "" || email.value === "" || pass.value === "" || confirmPas.value === "") {

        alert("Input required")
    }
    else {

        if (gatdat === null) {

            convert = JSON.stringify(array)
            let setdata = localStorage.setItem("userinfo", convert);

            window.location.href = "loginn.html"

        }
        else {

            let removeDublicate = gatdat.some((gatdat) => { return gatdat.email === email.value })

            // console.log(removeDublicate);
            if (removeDublicate === true) {

                alert("your account axist")
            }
            else {

                gatdat.push(userObj)
                localStorage.setItem("userinfo", JSON.stringify(gatdat))
                window.location.href = "loginn.html"

            }
        }


    }






    frstname.value = "";
    lastName.value = "";
    email.value = "";
    pass.value = "";
    confirmPas.value = "";



}




let showData = ()=>{

let html = ""

let gatdat = JSON.parse(localStorage.getItem("userinfo"))


gatdat.forEach((e,index) => {
    console.log(e);

    

    let tabel = document.getElementById("tr")
    tabel.innerHTML =`
    
    <tr>
    <td>Email</td>
    <td id="email">${e.email}</td>
    </tr>
    <tr>
    <td>Password</td>
    <td id="userpassword">${e.pass}</td>
    </tr>
    `
    
    
    
});

}

let logOut = ()=>{

localStorage.removeItem("userloginInfo")
window.location.href = "loginn.html"
}