$(document).ready(function(){

    $("#show-order").click(function(){
        let title_show_order=$("#title-show-order");
        if(title_show_order.html()=='Show order summary'){
            title_show_order.html('Hide order summary');
        } 
        else{
            title_show_order.html('Show order summary');
        }

        let icon_up_down = $("#down-path").attr('d');
        if(icon_up_down=='M832 352H192l320 320 320-320z'){
            
            $("#down-path").attr("d","M192 672h640L512 352 192 672z");
        } 
        if(icon_up_down=='M192 672h640L512 352 192 672z'){
           
            $("#down-path").attr("d","M832 352H192l320 320 320-320z");
        }
           
        
        
      $("#div-order").toggle(50,"swing");

    });

    // billing-select
    let billing_select=$("#billing-select");
    billing_select.change(function(){
        // alert($(this).val())
        if($(this).val()==0){
            $("#billing-adress-infos").removeClass("d-none");
        }else{
            $("#billing-adress-infos").addClass("d-none");

        }
    });


    let btnContinurToshipping=$(".btn-to-shipping");
    let btnToReturn=$(".btn-to-return");
    // let hide_if_click_continue=$('.hide-if-click-continue');
    btnContinurToshipping.click(function(){
         $('.method-shipping').removeClass('d-none');
         $('.hide-if-click-continue').addClass('d-none');
         $('.hide-payemenyt-method').removeClass('d-none');
    });
    btnToReturn.click(function(){
        $('.method-shipping').addClass('d-none');
        $('.hide-if-click-continue').removeClass('d-none');
        $('.hide-payemenyt-method').addClass('d-none');

       

   });
    
  });
//   localstorage

let titleDom= document.querySelector("#title-product");
let imgDom= document.querySelector("#img-product");
let priceDom= document.getElementsByClassName("price-product");



titleDom.innerHTML +=localStorage.getItem("title");


    for(let i=0;i<priceDom.length;i++){
        priceDom[i].innerHTML ="<span>$</span>"+localStorage.getItem("price");
    
    }


imgDom.setAttribute("src",localStorage.getItem("imgelink"));

  const mediaQuery = window.matchMedia("(min-width: 991px)");

 
mediaQuery.addEventListener("change", (e) => {
    var div_order = document.getElementById("div-order");
    var styles = window.getComputedStyle(div_order);
    var display = styles.getPropertyValue('display');
    if(display=='none'){
        document.getElementById("div-order").style.display='block';
    }
});

 //get inputs in localstorage
 let PaymentAddressContact =document.getElementById('PaymentAddressContact');
PaymentAddressContact.innerHTML=localStorage.getItem("email");

let PaymentAddressShipToContent =document.getElementById('PaymentAddressShipToContent');
PaymentAddressShipToContent.innerHTML=localStorage.getItem("fname")+' '+localStorage.getItem("lname")+' '+'number phone';


let PaymentAddressInfo =document.getElementById('PaymentAddressInfo');
PaymentAddressInfo.innerHTML=localStorage.getItem("adress")+' '+localStorage.getItem("postal")+' '+'khsni country';


let PaymentCountry =document.getElementById('PaymentCountry');
PaymentCountry.innerHTML='khsni country';


//coupon
coupon.addEventListener('focus', function(e){
  
    document.getElementById('coupon-div').style.border = '2px solid rgb(129, 104, 66)';
        });
coupon.addEventListener('blur', function(e){
    if(e.target.value!="")  {
        e.target.nextElementSibling.classList.remove('danger-color');
        document.getElementById('coupon-div').classList.remove('empty-field')
        document.querySelector('.error-text').remove();
    }
    else {
        let errorMsg = "<p class='error-text danger-color'>empty field</p>"
        e.target.nextElementSibling.classList.add('danger-color');
        document.getElementById('coupon-div').classList.add('empty-field')
        if(!e.target.nextElementSibling.nextElementSibling) e.target.parentNode.insertAdjacentHTML("beforeend",errorMsg)
    }
        });