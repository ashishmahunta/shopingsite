


var element = document.getElementById('hero_category');
var element1 = document.getElementById('navbar_1');
var elementHeight = element.clientHeight;



// setTimeout(()=>{

//         element1.classList.add("nav_change");

// },4000);



document.addEventListener("scroll",()=>{
        console.log(window.scrollY);
       if(window.scrollY===0)
        {

            element1.classList.remove("nav_change");

        }
        if(window.scrollY===823)
        {
            element1.classList.add("nav_change");
        }




})

















const arr=[

    
    {name:"Lace Detail Printed Flared Tunic",price:1128,img:"https://img3.junaroad.com/uiproducts/17633685/zoom_0-1617114193.jpg"},
    {name:"Round Neck Printed Tunic",price:889,img:"https://img3.junaroad.com/uiproducts/18007236/zoom_0-1632387554.jpg"},
    {name:"Solid Kurta Palazzo Set",price:1259,img:"https://img3.junaroad.com/uiproducts/16949406/zoom_0-1582190397.jpg"},
    {name:"Yellow Cotton Kurta Palazzo Set",price:1499,img:"https://img3.junaroad.com/uiproducts/18292995/zoom_0-1647057243.jpg"},
    {name:"Bandhani Kurta Palazzo Set",price:1399,img:"https://img3.junaroad.com/uiproducts/16909870/zoom_0-1580810905.jpg"},
    {name:"Bandhani Kurta Palazzo Set",price:1196,img:"https://img3.junaroad.com/uiproducts/16909868/zoom_0-1580810907.jpg"},
    {name:"Zari Work Banarasi Saree With Blouse",price:1177,img:"https://img3.junaroad.com/uiproducts/17947782/zoom_0-1629890727.jpg"},
    {name:"Abstract Printed Saree With Blouse",price:1154,img:"https://img3.junaroad.com/uiproducts/18441971/zoom_0-1658500581.jpg"},
    {name:"Green Organza Kanjivaram Saree With Blouse",price:1099,img:"https://img3.junaroad.com/uiproducts/18401303/zoom_0-1654883060.jpg"},
    {name:"White Printed Woolen Shawl",price:1759,img:"https://img3.junaroad.com/uiproducts/18409050/zoom_0-1655808977.jpg"},
    {name:"White Solid Kurta",price:570,img:"https://img3.junaroad.com/uiproducts/18423444/zoom_0-1657090655.jpg"},
    {name:"Navy Blue Solid Pathani Kurta",price:1149,img:"https://img3.junaroad.com/uiproducts/18053979/zoom_0-1635767292.jpg"},
    {name:"Black Solid Short Kurta",price:750,img:"https://img3.junaroad.com/uiproducts/16493692/zoom_0-1565183160.jpg"},
    {name:"Printed Cotton Kurta Set",price:1749,img:"https://img3.junaroad.com/uiproducts/17183856/zoom_0-1596907576.jpg"},
    {name:"Grey Printed Flared Lehenga",price:1449,img:"https://img3.junaroad.com/uiproducts/18358263/zoom_0-1654074810.jpg"},
    {name:"Purple Net Aline Lehenga",price:2499,img:"https://img3.junaroad.com/uiproducts/18317761/zoom_0-1649008362.jpg"},
    {name:"Teal Solid Formal Blazer",price:2145,img:"https://img3.junaroad.com/uiproducts/18460055/zoom_0-1659766560.jpg"},
    {name:"Pink Solid Formal Blazer",price:6000,img:"https://img3.junaroad.com/uiproducts/18452285/zoom_0-1659242810.jpg"},
 
 ]
 let cart=[];
 let cart_quantity=0;

if(localStorage.getItem("cart"))
{
    const data=JSON.parse(localStorage.getItem("cart"));
    cart=data.items; 
    cart_quantity=data.cartLength;

}


const midsec = document.getElementById('midsec');
const  cart_counter= document.getElementById('cart_count');
cart_counter.innerText=cart_quantity;
for(let i=0;i<arr.length;i++)
{
    const productData= document.createElement("div")
    const imgTag=document.createElement("img");
    imgTag.src=arr[i].img;
    imgTag.width=300;
    imgTag.height=300;

    const button =document.createElement("button")
    
    
    const textNode=document.createElement("h5");
    textNode.innerText=arr[i].name;
    const textNodeP=document.createElement("h5");
    textNodeP.innerText="₹ "+arr[i].price;
    button.classList.add("button-37");
const wrapper = document.createElement("div");
    wrapper.appendChild(textNode);
    wrapper.appendChild(textNodeP);
    wrapper.classList.add("text_card");
    productData.appendChild(imgTag)
    productData.appendChild(wrapper);
    productData.appendChild(button);
    productData.classList.add("card");
    
    midsec.appendChild(productData);
    button.classList.add("btn_prime");
    textNodeP.classList.add("card_price");
    
   }


   const btn_prime= document.getElementsByClassName("btn_prime")
console.log(btn_prime)
const snackbar=document.getElementById("arz_snack");
   for(let i=0;i<arr.length;i++)
   {
      btn_prime[i].innerHTML="<i class='fas fa-shopping-cart'></i><h5>buy now</h5>";
      btn_prime[i].addEventListener("click",
      (e)=>{
        console.log(arr[i]);
        setTimeout(()=>{
                snackbar.classList.add("snackbar_hide");


        },3000)
        snackbar.innerText=arr[i].name + " added to cart";
        snackbar.classList.remove("snackbar_hide");
                if(cart.length===0)
                {
                    cart.push({...arr[i],quantity:1});
                    return;
                }
            else{
                let data=true;
                for (let index = 0; index < cart.length; index++) {
                        if(arr[i].name===cart[index].name)
                        {       data=false;
                            cart[index]={...cart[index],quantity:cart[index].quantity+1}
                        }

                }
                if(data===true)
                {
                    cart.push({...arr[i],quantity:1});
                }
               
                 




          
            
            }
            cart_quantity++;
            cart_counter.innerText=cart_quantity;

            let  carts={items:cart,cartLength:cart_quantity}

            localStorage.setItem("cart",JSON.stringify(carts));

           
            const cartdata=JSON.parse(localStorage.getItem("cart"));
       
        
        console.log(cart);
        console.log("this is from local storage");
        console.log(cartdata)
    
    })
    

   }



//    const card =document.getElementsByClassName("card");
//    console.log(card);
// const page = document.getElementById("product_page");
//    for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("click",()=>{

//             page.innerText=arr[i].name;
//             page.classList.remove("hide_page");


//     })
    
//    }