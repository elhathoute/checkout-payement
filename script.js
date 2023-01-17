const params =window.location.search;
const paraOfUrl= new URLSearchParams(params);
let imgelink=paraOfUrl.get('imagelink');
let title=paraOfUrl.get('title');
let price=paraOfUrl.get('price');

let titleDom= document.querySelector("#title-product");
let imgDom= document.querySelector("#img-product");
let priceDom= document.getElementsByClassName("price-product");



titleDom.innerHTML +=title;
if(price!=null){
    for(let i=0;i<3;i++){
        priceDom[i].innerHTML ="<span>$</span>"+price;
    
    }
}
if(price==''){
    
    for(let i=0;i<3;i++){
        priceDom[i].innerHTML ="<span>$00.00</span>";
    
    }

}

imgDom.setAttribute("src",imgelink);
