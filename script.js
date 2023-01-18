const params =window.location.search;
const paraOfUrl= new URLSearchParams(params);
let imgelink=paraOfUrl.get('imagelink');
let title=paraOfUrl.get('title');
let price=paraOfUrl.get('price');

let titleDom= document.querySelector("#title-product");
let imgDom= document.querySelector("#img-product");
let priceDom= document.getElementsByClassName("price-product");



titleDom.innerHTML +=title;
if(title==null){
    titleDom.innerHTML=' ';
}
if(price!=null){
    for(let i=0;i<priceDom.length;i++){
        priceDom[i].innerHTML ="<span>$</span>"+price;
    
    }
}
if(price==''){
    
    for(let i=0;i<priceDom.length;i++){
        priceDom[i].innerHTML ="<span>$00.00</span>";
    
    }

}

imgDom.setAttribute("src",imgelink);
//get input to change our border in event focus
let email = document.getElementById('email');
let coupon = document.getElementById('coupon')
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let adress = document.getElementById('adress');
let apartement = document.getElementById('apartement');
let postal = document.getElementById('postal');
let city = document.getElementById('city');
let errorContainer = document.getElementById('error-container')
//email
        email.addEventListener('focus', function(){
            document.getElementById('email-div').style.border = '2px solid rgb(129, 104, 66)';
                });
         email.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                alert('empty')
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('email-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color'>empty field</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('email-div').classList.add('empty-field')
                 errorContainer.insertAdjacentHTML("beforeend",errorMsg)
            }
                });
//coupon
coupon.addEventListener('focus', function(){
    document.getElementById('coupon-div').style.border = '2px solid rgb(129, 104, 66)';
        });
coupon.addEventListener('blur', function(){
    document.getElementById('coupon-div').style.border = '1px solid rgb(174, 172, 172)';
        });
//first-name
        fname.addEventListener('focus', function(){
                document.getElementById('fname-div').style.border = '2px solid rgb(0, 0, 97)';
                    });
                    fname.addEventListener('blur', function(){
                document.getElementById('fname-div').style.border = '1px solid black';
                    });
//last-name
lname.addEventListener('focus', function(){
    document.getElementById('lname-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        lname.addEventListener('blur', function(){
    document.getElementById('lname-div').style.border = '1px solid black';
        });

//adress
adress.addEventListener('focus', function(){
    document.getElementById('adress-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        adress.addEventListener('blur', function(){
    document.getElementById('adress-div').style.border = '1px solid black';
        });
//appartement
apartement.addEventListener('focus', function(){
    document.getElementById('apartement-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        apartement.addEventListener('blur', function(){
    document.getElementById('apartement-div').style.border = '1px solid black';
        });

//postal
postal.addEventListener('focus', function(){
    document.getElementById('postal-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        postal.addEventListener('blur', function(){
    document.getElementById('postal-div').style.border = '1px solid black';
        });

//city
city.addEventListener('focus', function(){
    document.getElementById('city-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        city.addEventListener('blur', function(){
    document.getElementById('city-div').style.border = '1px solid black';
        });

        //btn continue-to-shipping

        let continue_to_shipping = document.getElementById("continue-to-shipping");

        // console.log(continue_to_shipping);
        continue_to_shipping.addEventListener('click',function(){
           //get inputs 
          
          let email_localStorage= email.value;
          let fname_localStorage= fname.value;
          let lname_localStorage= lname.value;
          let adress_localStorage= adress.value;
          let apartement_localStorage= apartement.value;
          let postal_localStorage= postal.value;
          let city_localStorage= city.value;
          //store inputs  in localstorage
          localStorage.setItem("email",email_localStorage);
          localStorage.setItem("fname",fname_localStorage);
          localStorage.setItem("lname",lname_localStorage);
          localStorage.setItem("adress",adress_localStorage);
          localStorage.setItem("apartement",apartement_localStorage);
          localStorage.setItem("postal",postal_localStorage);
          localStorage.setItem("city",city_localStorage);

        })
        //show order

        // let show_order=document.getElementById("show-order");

        // //get div of order
        //  let div_order =document.getElementById("div-order");
        // show_order.addEventListener('click',function () {

        //     div_order.classList.remove('invisible');
        // })

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
                    console.log('down');
                    $("#down-path").attr("d","M192 672h640L512 352 192 672z");
                } 
                if(icon_up_down=='M192 672h640L512 352 192 672z'){
                    console.log('up');
                    $("#down-path").attr("d","M832 352H192l320 320 320-320z");
                }
                   
                
                
              $("#div-order").toggle(50,"swing");

            });
          });
        // function myFunction() {
        //     var order = document.getElementById('div-order');
        //     if (order.style.display === 'none') {
        //         order.style.display = 'block';
        //     } else {
        //         order.style.display = 'none';
        //        }
           
        //     }


        function checkEmpty(){
            var input = document.getElementById("label");
            if (input.value === "") {
                input.classList.add("big");
            }else {
                input.classList.remove("big");
            }
        }
        
   
