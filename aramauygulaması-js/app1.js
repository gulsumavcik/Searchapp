const formwrapper=document.querySelector(".form-wrapper");
const form=document.querySelector("#form");
const searchinput=document.querySelector("#searchinput");
const buttonwrapper=document.querySelector(".button-wrapper");
const searchbutton=document.querySelector("#searchbutton");
const clearbutton=document.querySelector("#clearbutton");
const imagelistwrapper=document.querySelector(".imagelist-wrapper");

runeventlisteners();

function runeventlisteners(){
    form.addEventListener("submit",search);
    clearbutton.addEventListener("click",clear);

}
function clear(){
    searchinput.value="";
    imagelistwrapper.innerHTML="";
}
function search(e){
    const value=searchinput.value.trim(); 
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization:"Client-ID lcXV9hgHYA2kpagZ9pDHcUyoyJDqY65Zy6ddW7l18yE"
        }
    })
    .then((res)=>res.json())
    .then((data)=> {
        Array.from(data.results).forEach((image)=>{
           // console.log(image.urls.small)
            addImagetoUI(image.urls.small)
        })
    })
     
    .catch((err)=> console.log(err));
    e.preventDefault();
}

function addImagetoUI(url){
    console.log(imagelistwrapper)
const div = document.createElement("div");
div.className="card";
const img = document.createElement("img");
img.setAttribute("src",url);
img.height='400';
img.width='400';
div.append(img);
imagelistwrapper.append(div);
}
