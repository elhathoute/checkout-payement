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
    $("#show-order").click(function(){
        var div_order = document.getElementById("div-order");
            var styles = window.getComputedStyle(div_order);
            var display = styles.getPropertyValue('display');
            console.log(display);
            if(display=='none'){
                $("#div-order").css("display", "block");
                // $("#div-order").addClass('d-block');
            }
            if(display=='block'){
                $("#div-order").css("display", "none");
                // $("#div-order").addClass('d-block');
            }


        let title_show_order=$("#title-show-order");
        

        if(title_show_order.html()==='Hide order summary'){
            title_show_order.html('');
            title_show_order.html('Show order summary');
         $("#div-order").removeClass('d-block');
         $("#div-order").addClass('d-none');

        } 
        else {
            $("#div-order").removeClass('d-none');
            $("#div-order").addClass('d-block');
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
           
        
        
    //   $("#div-order").toggle(50,"swing");

    });

    // billing-select
    let billing_select=$("#billing-select");
    billing_select.change(function(){
        // alert($(this).val())
        if($(this).val()==0){
            $("#billing-adress-infos").removeClass("d-none");
            //first-name
            let errorContainerFname = document.getElementById('error-container-fname')
        let errorContainerLname = document.getElementById('error-container-lname')
        let errorContainerApartement = document.getElementById('error-container-apartement')
        let errorContainerAdress = document.getElementById('error-container-adress')
        let errorContainerPostal = document.getElementById('error-container-postal')
        let errorContainerCity = document.getElementById('error-container-city')
fname.addEventListener('focus', function(){
    document.getElementById('fname-div').style.border = '2px solid rgb(17,17,17)';
        });
        fname.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('fname-div').classList.remove('empty-field')
                document.querySelector('#email-error-fname').remove();
            }
            else {
                let errorMsg = "<span class='error-text danger-color' id='email-error-fname'>First name required</span>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('fname-div').classList.add('empty-field','mb-4')
                // document.getElementById('names-container').classList.add('mb-4')
                if(!document.getElementById('email-error-fname')) errorContainerFname.insertAdjacentHTML("beforeend",errorMsg)
            }
                });
//last-name
lname.addEventListener('focus', function(){
document.getElementById('lname-div').style.border = '2px solid rgb(17,17,17)';
});
lname.addEventListener('blur', function(e){
if(e.target.value!="")  {
    e.target.nextElementSibling.classList.remove('danger-color');
    document.getElementById('lname-div').classList.remove('empty-field')
    if(document.querySelector('#email-error-lname'))document.querySelector('.error-text').remove();
}
else {
    let errorMsg = "<p class='error-text danger-color' id='email-error-lname'>First name required</p>"
    e.target.nextElementSibling.classList.add('danger-color');
    document.getElementById('lname-div').classList.add('empty-field','mb-4')
    // document.getElementById('names-container').classList.add('mb-4')
    if(!document.getElementById('email-error-lname')) errorContainerLname.insertAdjacentHTML("beforeend",errorMsg)
}
    });

//adress
adress.addEventListener('focus', function(){
document.getElementById('adress-div').style.border = '2px solid rgb(17,17,17)';
});
adress.addEventListener('blur', function(e){
if(e.target.value!="")  {
    e.target.nextElementSibling.classList.remove('danger-color');
    document.getElementById('adress-div').classList.remove('empty-field')
    document.querySelector('#email-error-adress').remove();
}
else {
    let errorMsg = "<p class='error-text danger-color' id='email-error-adress'>Address required</p>"
    e.target.nextElementSibling.classList.add('danger-color');
    document.getElementById('adress-div').classList.add('empty-field','mb-4')
    // document.getElementById('names-container').classList.add('mb-4')
    if(!document.getElementById('email-error-adress')) errorContainerAdress.insertAdjacentHTML("beforeend",errorMsg)
}
    });


//postal
var zipRegex = /^\d{5}(-\d{4})?$/;
postal.addEventListener('focus', function(){
document.getElementById('postal-div').style.border = '2px solid rgb(17,17,17)';

});
postal.addEventListener('blur', function(e){
if(e.target.value!="")  {
    e.target.nextElementSibling.classList.remove('danger-color');
    document.getElementById('postal-div').classList.remove('empty-field','mb-4')
    if(document.querySelector('#email-error-postal'))  document.querySelector('#email-error-postal').remove();
    if(!zipRegex.test(e.target.value))  {
        let errorMsg = "<span class='error-text danger-color' id='email-error-postal'>Invalid Zip code</span>"
        e.target.nextElementSibling.classList.add('danger-color');
        document.getElementById('postal-div').classList.add('empty-field','mb-4','fs-5')
    if(!document.getElementById('email-error-postal')) errorContainerPostal.insertAdjacentHTML("beforeend",errorMsg)

    }
}
else {
    let errorMsg = "<span class='error-text danger-color' id='email-error-postal'>Zip code required</span>"
    document.getElementById('postal-div').classList.remove('empty-field','mb-4')
    e.target.nextElementSibling.classList.add('danger-color');
    document.getElementById('postal-div').classList.add('empty-field','mb-4')
    if(!document.getElementById('email-error-postal')) errorContainerPostal.insertAdjacentHTML("beforeend",errorMsg)
    else{
        errorContainerPostal.innerHTML=''
        errorContainerPostal.insertAdjacentHTML("beforeend",errorMsg)
    }
}
    });

//city
city.addEventListener('focus', function(){
document.getElementById('city-div').style.border = '2px solid rgb(17,17,17)';
});
city.addEventListener('blur', function(e){
if(e.target.value!="")  {
    e.target.nextElementSibling.classList.remove('danger-color');
    document.getElementById('city-div').classList.remove('empty-field')
    document.querySelector('#email-error-city').remove();
}
else {
    let errorMsg = "<p class='error-text danger-color' id='email-error-city'>City / town required</p>"
    e.target.nextElementSibling.classList.add('danger-color');
    document.getElementById('city-div').classList.add('empty-field','mb-4')
    if(!document.getElementById('email-error-city')) errorContainerCity.insertAdjacentHTML("beforeend",errorMsg)
}
    });
        }else{
            $("#billing-adress-infos").addClass("d-none");

        }
    });
// verification input code receive
$('.input-group-lg').keyup(function(){
    if(
    ($('#digit-1').val()!='')
   && ($('#digit-2').val()!='')
    &&($('#digit-3').val()!='')
    &&($('#digit-4').val()!='')
    &&($('#digit-5').val()!='')
    &&($('#digit-6').val()!='')
    ){
        $('#done').prop('disabled',false);
        $('#paiment-2').prop('disabled',false);
    }else{
        $('#done').prop('disabled',true);
        $('paiment-2').prop('disabled',true);


    }
    
  })

  // verification input CARD paiment
$('.input-group-card').keyup(function(){
    if(
    ($('#credit-card').val()!='')
   && ($('#expiration').val()!='')
    &&($('#security').val()!='')
    &&($('#card-holder-fname').val()!='')
    &&($('#card-holder-lname').val()!='')
   
    ){
       
        $('#paiment-1').prop('disabled',false);
    }else{
       
        $('paiment-1').prop('disabled',true);


    }
    
  })

// btn continue
    let btnContinueToshipping=$(".btn-to-shipping");
    // let btnToReturn=$(".btn-to-return");


     
     
 
//   var btnContinue=0;
    btnContinueToshipping.click(function(){
    
       
      
    });
    
    
  });





//   localstorage

let titleDom= document.querySelector("#title-product");
let imgDom= document.querySelector("#img-product");
let priceDom= document.getElementsByClassName("price-product");



titleDom.innerHTML =localStorage.getItem("title");


    for(let i=0;i<priceDom.length;i++){
        priceDom[i].innerHTML ="<span>$</span>"+localStorage.getItem("price");
    
    }


imgDom.setAttribute("src",localStorage.getItem("imgelink"));

var current_media_query = "";

getCurrentMediaQuery();

function getCurrentMediaQuery() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    current_media_query = "desktop";
    console.log(current_media_query);

  } else {
    current_media_query = "mobile";
    
   $("#div-order").addClass('d-none');
$("#title-show-order").html('Show order summary');

    console.log(current_media_query);

  }
  return current_media_query;
}

$(window).on("resize", function() {
  getCurrentMediaQuery();
});





//   const mediaQuery = window.matchMedia("(max-width: 991px)");
 
// mediaQuery.addEventListener("change", (e) => {

//     var div_order = document.getElementById("div-order");
//     var styles = window.getComputedStyle(div_order);
//     var display = styles.getPropertyValue('display');
//     console.log(display);
//     if(display=='block'){
//         document.getElementById("div-order").style.display='none';
//     }
// });

 //get inputs in localstorage
 let PaymentAddressContact =document.getElementById('PaymentAddressContact');
PaymentAddressContact.innerHTML=localStorage.getItem("email");

let PaymentAddressShipToContent =document.getElementById('PaymentAddressShipToContent');
PaymentAddressShipToContent.innerHTML=localStorage.getItem("adress")+','+localStorage.getItem("city")+','+localStorage.getItem("postal")+','+localStorage.getItem("region")+','+'United States';



   //credit card number
   let creditCardContainer = document.getElementById('credit-card-div')
   let creditCard = document.getElementById('credit-card')
  
   document.querySelector("#credit-card").addEventListener("keypress", function (evt) {
    const input = evt.target.value.split(' ').join('')
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
    if(input.length>=19) evt.preventDefault();

});

document.getElementById('credit-card').addEventListener('input',function(e){
  e.target.value = e.target.value.replace(/[^\d]/g, "");
  e.target.value = e.target.value.replace(/(\d{4})/g, "$1 ").trim();
  
})

//expiration date
document.querySelector("#expiration").addEventListener("keypress", function (evt) {
    let input = evt.target.value
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
    if(input.length>=7) evt.preventDefault();

});

document.getElementById('expiration').addEventListener("keydown", function(event) {
    
    setTimeout(()=>{
        const value = event.target.value;
    if (value.length === 2 ) {
      event.target.value = `${value}/`;
    }
    },500)

  });
  document.getElementById('expiration').addEventListener("keyup", function(event) {
    
        const value = event.target.value;
    if (value.length === 2 ) {
      event.target.value = `${value}/`;
    }

  });



  
   var cardRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9][0-9])[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35\d{3})\d{11}))$/;
   creditCard.addEventListener('focus', function(e){
       // alert('focused')
     });
     
     creditCard.addEventListener('blur', function(e){
                   // alert('worked')
                   const input = e.target.value.split(' ').join('')
                   if(input!="")  {
                    console.log(e.target.value.split(' ').join(''))
                       e.target.nextElementSibling.classList.remove('danger-color');
                      document.getElementById('credit-card-div').classList.remove('empty-field')
                       if(document.getElementById('email-error-credit-card'))document.getElementById('email-error-credit-card').remove();
                       if(!cardRegex.test(input))  {
                        // alert('incorrect card regex')
                           let errorMsg = "<p class='error-text danger-color' id='email-error-credit-card'>Invalid credit card number. </p>"
                           e.target.nextElementSibling.classList.add('danger-color');
                           document.getElementById('credit-card-div').classList.add('empty-field', 'mb-0')
                           if(!document.getElementById('email-error-credit-card')) document.querySelector('#credit-card-error').insertAdjacentHTML("beforeend",errorMsg)
                           
                       }
                    //    else alert('correct card regex')
                   }
                   else {
                       let errorMsg = "<p class='error-text danger-color' id='email-error-credit-card'>Card number required</p>"
                       e.target.nextElementSibling.classList.add('danger-color');
                       document.getElementById('credit-card-div').classList.add('empty-field')
                       // document.getElementById('names-container').classList.add('mb-4')
                       if(!document.getElementById('email-error-credit-card')) document.querySelector('#credit-card-error').insertAdjacentHTML("beforeend",errorMsg)
                       else{
                           document.querySelector('#credit-card-error').innerHTML=''
                           document.querySelector('#credit-card-error').insertAdjacentHTML("beforeend",errorMsg)
                       }
                   }
                       });

//coupon
coupon.addEventListener('focus', function(e){
  
    document.getElementById('coupon-div').style.border = '2px solid rgb(129, 104, 66)';
        });
coupon.addEventListener('blur', function(e){
    if(e.target.value!="")  {
        e.target.nextElementSibling.classList.remove('danger-color');
        document.getElementById('coupon-div').classList.remove('empty-field')
        document.querySelector('#error-coupon').remove();
    }
    else {
        let errorMsg = "<p class='error-text danger-color' id='error-coupon'>empty field</p>"
        e.target.nextElementSibling.classList.add('danger-color');
        document.getElementById('coupon-div').classList.add('empty-field')
        if(!e.target.nextElementSibling.nextElementSibling) e.target.parentNode.insertAdjacentHTML("beforeend",errorMsg)
    }
        });

  

//expiration date

document.getElementById('expiration').addEventListener('blur', function(e){
    if(e.target.value!="")  {
        e.target.nextElementSibling.classList.remove('danger-color');
        document.getElementById('expiration-div').classList.remove('empty-field')
       if(document.querySelector('#email-error-expiration')) document.querySelector('#email-error-expiration').remove();
    }
    else {
        let errorMsg = "<p class='error-text danger-color' id='email-error-expiration'>Expiration date required</p>"
        e.target.nextElementSibling.classList.add('danger-color');
        document.getElementById('expiration-div').classList.add('empty-field')
        document.getElementById('expiration-div').classList.add('mb-3')
        if(!document.getElementById('email-error-expiration')) document.getElementById('error-container-expiration').insertAdjacentHTML("beforeend",errorMsg)
        
    }
        });
        
//security

document.querySelector("#security").addEventListener("keypress", function (evt) {
    const input = evt.target.value.split(' ').join('')
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
    if(input.length>=4) evt.preventDefault();

});
        document.getElementById('security').addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('security-div').classList.remove('empty-field')
              if( document.querySelector('#email-error-security'))  document.querySelector('#email-error-security').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error-security'>security date required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('security-div').classList.add('empty-field')
                document.getElementById('security-div').classList.add('mb-3')
                if(!document.getElementById('email-error-security')) document.getElementById('error-container-security').insertAdjacentHTML("beforeend",errorMsg)
                
            }
                });


//card-holder fname 
document.getElementById('card-holder-fname').addEventListener('blur', function(e){
    if(e.target.value!="")  {
        e.target.nextElementSibling.classList.remove('danger-color');
        document.getElementById('card_holder_fname-div').classList.remove('empty-field')
        document.querySelector('#email-error-card-holder-fname').remove();
    }
    else {
        let errorMsg = "<p class='error-text danger-color' id='email-error-card-holder-fname'>card holder name required</p>"
        e.target.nextElementSibling.classList.add('danger-color');
        document.getElementById('card_holder_fname-div').classList.add('empty-field')
        document.getElementById('card_holder_fname-div').classList.add('mb-3')
        if(!document.getElementById('email-error-card-holder-fname')) document.getElementById('error-container-card-holder-fname').insertAdjacentHTML("beforeend",errorMsg)
        
    }
        });



        // ----------------------------------------------------------
        let errorContainerEmail = document.getElementById('error-container-email')
        let errorContainerFname = document.getElementById('error-container-fname')
        let errorContainerLname = document.getElementById('error-container-lname')
        let errorContainerApartement = document.getElementById('error-container-apartement')
        let errorContainerAdress = document.getElementById('error-container-adress')
        let errorContainerPostal = document.getElementById('error-container-postal')
        let errorContainerCity = document.getElementById('error-container-city')
        let errorContainerPhone = document.getElementById('error-container-phone')

        
//responsive credit card
function myFunction(x) {
    if (x.matches) { 
        
      document.getElementById('card-holder-container').classList.add('flex-wrap')
      document.getElementById('expiration-security-container').classList.add('flex-wrap')
    
        document.getElementById('expiration-div').classList.add('w-100')
      document.getElementById('expiration-div').classList.remove('w-50')
      document.getElementById('security-div').classList.add('w-100')
      document.getElementById('security-div').classList.remove('w-50')
    //   document.getElementById('card_holder_fname-div').classList.add('w-100')
    //   document.getElementById('card_holder_fname-div').classList.remove('w-50')
    //   document.getElementById('card_holder_Last_Name-div').classList.add('w-100')
    //   document.getElementById('card_holder_Last_Name-div').classList.remove('w-50')
    } else {
        document.getElementById('expiration-div').classList.remove('w-100')
        document.getElementById('expiration-div').classList.add('w-50')
        document.getElementById('security-div').classList.remove('w-100')
      document.getElementById('security-div').classList.add('w-50')
   
      document.getElementById('card-holder-container').classList.remove('flex-wrap')
      document.getElementById('expiration-security-container').classList.remove('flex-wrap')
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) 
  x.addListener(myFunction)