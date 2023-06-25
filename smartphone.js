console.log("hello")


const checkSquare=(n)=>{
    const square = document.getElementById(`ullii${n}`);
    // const square = document.getElementsById(`ullii${n}`);
    // square.classList = "fa-solid" ? "fa-regular" : "fa-solid";
    // square.classList = "fa-square" ? "fa-square-check" : "fa-square";
    if(square.classList.contains("fa-regular")){
        square.classList.remove("fa-regular")
        square.classList.add("fa-solid")
        square.classList.remove("fa-square");
        square.classList.add("fa-square-check")
    }
    else{
        square.classList.add("fa-regular")
        square.classList.remove("fa-solid")
        square.classList.add("fa-square");
        square.classList.remove("fa-square-check")
    }

}

const showItems=(n)=>{
    let ul = document.getElementById(`ul${n}`)
    console.log(ul)
    ul.classList.toggle("display-none")
}

let smartphoneDiv = document.getElementsByClassName("smartphone-div")
let uli = document.getElementById("ul1");
// console.log(uli)
let li = Array.from(uli.getElementsByTagName("li"))
// console.log(li)
let BrandName = document.getElementsByClassName("specifications");
// console.log(BrandName)

// console.log(BrandName[1].getElementsByTagName("h3")[0].innerHTML)
const displayBrand=(n)=>{
    let listBrandname = li[n].innerText;
    let squarebox = Array.from(uli.getElementsByTagName("i"));
    // console.log(squarebox)
    for(let i=0; i<BrandName.length; i++)
    {
       let h3 = BrandName[i].getElementsByTagName("h3")[0];
       let textvalue = h3.className;
    //    console.log(h3)
    //    console.log(textvalue)
    //    console.log(textvalue.toString().toUpperCase())
    //    console.log(listBrandname.toString().toUpperCase())
       if(textvalue.toString().toUpperCase() == listBrandname.toString().toUpperCase()){
        if(squarebox[i].classList.contains("Removefilter")){
            console.log("Enter")
            smartphoneDiv[i].style.display = "none"
            squarebox[i].classList.remove("Removefilter")

        }
        else{
            squarebox[i].classList.add("Removefilter")
            console.log(squarebox[i])
            smartphoneDiv[i].style.display = ""
        }
       }
       else{
        // console.log("enter")
        smartphoneDiv[i].style.display = "none"

       }
    }
    // console.log(listBrandname)
}