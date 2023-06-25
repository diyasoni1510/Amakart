console.log("hello")
const changeicon=(n)=>{
    let writtenreviews = document.getElementById(`thumb${n}`)
    if(writtenreviews.classList.contains("fa-regular")){
        writtenreviews.classList.add("fa-solid")
        writtenreviews.classList.remove("fa-regular")
    }
    else{
        writtenreviews.classList.remove("fa-solid")
        writtenreviews.classList.add("fa-regular")
    }
}

const checkPassword=()=>{
    let password = document.getElementById("password")
    if(password.value.toUpperCase() == "DIYA1510")
    {
        let loginbtn = document.getElementById("login")
        console.log(loginbtn)
        loginbtn.setAttribute("href" , "checkout.html")
    }
    else{
        alert("Password is wrong")
    }
}

const deliveryCheck=()=>{
    let deliverycheck = document.getElementById("deliverycheck");
    console.log(deliverycheck)
    deliverycheck.style.display = "inline"
}
const paymentCheck=()=>{
    let paymentCheck = document.getElementById("paymentCheck");
    console.log(paymentCheck)
    paymentCheck.style.display = "inline"
}