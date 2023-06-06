const arr=[

   {name:"sonata watch",price:1500},
   {name:"jersy",price:15000},


]






const scrollButton = document.getElementById("scroll_cat");
scrollButton.addEventListener("click", () =>{
console.log("working scroll");
window.scrollTo(scrollButton.getBoundingClientRect().top,scrollButton.getBoundingClientRect().left);


})





// for(product of arr)
// {
//     const productData= document.createElement("div")
//     const imgTag=document.createElement("img");
//     imgTag.src="https://assets.ajio.com/medias/sys_master/root/20210420/R70k/607ecc5baeb269a9e3971fef/-1117Wx1400H-462323964-green-MODEL.jpg";
//     imgTag.width=300;
//     imgTag.height=300;

//     const button =document.createElement("button");
//     button.innerText="click me";
 

//    const textNode=document.createTextNode(`${product.name}`)
//    productData.appendChild(imgTag)
//    productData.appendChild(textNode);
//    productData.appendChild(button);
//    productData.classList.add("card");
//    midsec.appendChild(productData);
//    button.addEventListener("click",(e)=>{console.log(product.name)})

// }



