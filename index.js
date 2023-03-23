let f = document.getElementById('fname');
let L = document.getElementById('Lname');
let U = document.getElementById('Uname');
let G = document.getElementById('gender'); 
let E = document.getElementById("email");
let p = document.getElementById("password");


function myFunction() {
    // alert(fName.value)
    if (f.value == undefined || f.value == "") {
        alert("please input your First name ")
    }

   else  if (L.value == undefined || L.value == ""){
        alert("please input your Last name ")
    }

    else if (U.value == null || U.value == ""){
        alert("please input your Username")
    }

    else if (G.value == null || G.value== ""){
        alert("please input your Gender")
    }

    else if (E.value == null || E.value=="")
    alert('please input your email')

    else if ( p.value.length < 5 ){
        alert('password must be more than 5 characters')
    }

    else{
        document.write("First name: " +f.value +'<br></br>' + "Last name: " + L.value+'<br></br>'+ "User name: " + U.value+'<br></br>'+ "Gender: " + G.value+'<br></br>'+ "Email: "+E.value+'<br></br>' +'Password: '+p.value);
    }

}


