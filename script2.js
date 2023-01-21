$(document).ready(function(){
//   input group
    $('.form-otp').find('input').each(function() {
        $(this).on('keyup', function(e) {
          var parent = $($(this).parent());
          if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));
            if (prev.length) {
              $(prev).select();
            }
          } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));
            if (next.length) {
              $(next).select();
            }
          }
          var counter = 0;
          $('.form-otp').find('input').each(function() {
            if ($(this).val() == '') {
              counter++;
            } else {
    
            }
          });
    
          if (counter > 0) {
            $('.js-otp-confirm').addClass('disabled');
          } else {
            $('.js-otp-confirm').removeClass('disabled');
          }
        });
      });


// fin input group
$("#title-show-order").html('Hide order summary');
    $("#show-order").click(function(){
        let title_show_order=$("#title-show-order");
        console.log(title_show_order.html());

        if(title_show_order.html()==='Hide order summary'){
            title_show_order.html('');
            title_show_order.html('Show order summary');
        } 
        else {
            title_show_order.html('');
            title_show_order.html('Hide order summary');
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

// btn continue
    let btnContinueToshipping=$(".btn-to-shipping");
    let btnToReturn=$(".btn-to-return");

   
     
     
 
  var btnContinue=0;
    btnContinueToshipping.click(function(){
        btnContinue++;
        console.log('continue = '+btnContinue);
        if(btnContinue==1){
         $('.method-shipping').removeClass('d-none');

         $('.hide-if-click-continue').addClass('d-none');
         $('.hide-payemenyt-method').removeClass('d-none');

         $('#payement').removeClass('non-active-breadcrumb');
         $('#shipping').removeClass('active-breadcrumb');
         $('#shipping').addClass('non-active-breadcrumb');
         $('#payement').addClass('active-breadcrumb');
         //credit card number
    let creditCardContainer = document.getElementById('credit-card-div')
    let creditCard = document.getElementById('credit-card')
    var cardRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9][0-9])[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35\d{3})\d{11}))$/;
    creditCard.addEventListener('focus', function(e){
        // alert('focused')
      });
      
      creditCard.addEventListener('blur', function(e){
                    // alert('worked')
                    if(e.target.value!="")  {
                        e.target.nextElementSibling.classList.remove('danger-color');
                        e.target.classList.remove('empty-field')
                        if(document.getElementById('email-error-credit-card'))document.getElementById('email-error-credit-card').remove();
                        if(!cardRegex.test(e.target.value))  {
                            let errorMsg = "<p class='error-text danger-color' id='email-error-credit-card'>Invalid credit card number. </p>"
                            e.target.nextElementSibling.classList.add('danger-color');
                            e.target.classList.add('empty-field')
                            if(!document.getElementById('email-error-credit-card')) document.querySelector('.credit-card-error').insertAdjacentHTML("beforeend",errorMsg)
                            
                        }
                    }
                    else {
                        let errorMsg = "<p class='error-text danger-color' id='email-error-credit-card'>Card number required</p>"
                        e.target.nextElementSibling.classList.add('danger-color');
                       e.target.classList.add('empty-field')
                        // document.getElementById('names-container').classList.add('mb-4')
                        if(!document.getElementById('email-error-credit-card')) document.querySelector('.credit-card-error').insertAdjacentHTML("beforeend",errorMsg)
                        else{
                            document.querySelector('.credit-card-error').innerHTML=''
                            document.querySelector('.credit-card-error').insertAdjacentHTML("beforeend",errorMsg)
                        }
                    }
                        });
        }
         if(btnContinue==2){
              $('.page-4-show').addClass('d-none');
              $('#page-4').removeClass('d-none');
           
         
         
            }
            if(btnContinue==3){
            console.log(btnContinue)
            $('#page-5').removeClass('d-none');
            $('.page-4-show').addClass('d-none');
            $('#page-4').addClass('d-none');
          
         }
       
      
    });
    // btn return
    var btnReturn=0;
    btnToReturn.click(function(){
      
        btnReturn++;
       
        console.log('return = '+btnReturn);
        if(btnReturn==1){
            $('.method-shipping').addClass('d-none');
            $('.hide-if-click-continue').removeClass('d-none');
            $('.hide-payemenyt-method').addClass('d-none');

            $('#payement').removeClass('active-breadcrumb');
            $('#payement').addClass('non-active-breadcrumb');

            $('#shipping').removeClass('non-active-breadcrumb');
            $('#shipping').addClass('active-breadcrumb');

        }
       if(btnReturn>1){
        location.href = "index.html";
       }
 
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
PaymentAddressShipToContent.innerHTML=localStorage.getItem("adress")+' ,'+localStorage.getItem("postal")+','+'zip code'+','+'United States';


// let PaymentAddressInfo =document.getElementById('PaymentAddressInfo');
// PaymentAddressInfo.innerHTML=localStorage.getItem("adress")+' '+localStorage.getItem("postal")+'United States';


// let PaymentCountry =document.getElementById('PaymentCountry');
// PaymentCountry.innerHTML='khsni country';


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

  