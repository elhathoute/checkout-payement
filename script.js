const params =window.location.search;
const paraOfUrl= new URLSearchParams(params);
let imgelink=paraOfUrl.get('imagelink');
let title=paraOfUrl.get('title');
let price=paraOfUrl.get('price');

// set img title price in localstorage
localStorage.setItem("imgelink",imgelink);
localStorage.setItem("title",title);
localStorage.setItem("price",price);


let titleDom= document.querySelector("#title-product");
let imgDom= document.querySelector("#img-product");
let priceDom= document.getElementsByClassName("price-product");
const regions = ["Tanger-Tetouan-Al Hoceima", "Oriental", "Fes-Meknes", "Rabat-Sale-Kenitra", "Beni Mellal-Khenifra", "Casablanca-Settat", "Marrakech-Safi", "Draa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laayoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"]


titleDom.innerHTML +=localStorage.getItem("title");
if(title==null){
    titleDom.innerHTML=' ';
}
if(price!=null){
    for(let i=0;i<priceDom.length;i++){
        priceDom[i].innerHTML ="<span>$</span>"+localStorage.getItem("price");
    
    }
}
if(price==''){
    
    for(let i=0;i<priceDom.length;i++){
        priceDom[i].innerHTML ="<span>$00.00</span>";
    
    }

}

imgDom.setAttribute("src",localStorage.getItem("imgelink"));
//get input to change our border in event focus
let email = document.getElementById('email');
let coupon = document.getElementById('coupon')
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let adress = document.getElementById('adress');
let apartement = document.getElementById('apartement');
let postal = document.getElementById('postal');
let city = document.getElementById('city');
let errorContainerEmail = document.getElementById('error-container-email')
let errorContainerFname = document.getElementById('error-container-fname')
let errorContainerLname = document.getElementById('error-container-lname')
let errorContainerApartement = document.getElementById('error-container-apartement')
let errorContainerAdress = document.getElementById('error-container-adress')
let errorContainerPostal = document.getElementById('error-container-postal')
let errorContainerCity = document.getElementById('error-container-city')
//email
        email.addEventListener('focus', function(){
            document.getElementById('email-div').style.border = '2px solid rgb(129, 104, 66)';
                });
         email.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('email-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error'>Email required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('email-div').classList.add('empty-field')
                if(!document.getElementById('email-error')) errorContainerEmail.insertAdjacentHTML("beforeend",errorMsg)
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
                    fname.addEventListener('blur', function(e){
                        if(e.target.value!="")  {
                            e.target.nextElementSibling.classList.remove('danger-color');
                            document.getElementById('fname-div').classList.remove('empty-field')
                            document.querySelector('.error-text').remove();
                        }
                        else {
                            let errorMsg = "<p class='error-text danger-color' id='email-error-fname'>First name required</p>"
                            e.target.nextElementSibling.classList.add('danger-color');
                            document.getElementById('fname-div').classList.add('empty-field')
                            document.getElementById('names-container').classList.add('mb-4')
                            if(!document.getElementById('email-error-fname')) errorContainerFname.insertAdjacentHTML("beforeend",errorMsg)
                        }
                            });
//last-name
lname.addEventListener('focus', function(){
    document.getElementById('lname-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        lname.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('lname-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error-lname'>First name required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('lname-div').classList.add('empty-field')
                document.getElementById('names-container').classList.add('mb-4')
                if(!document.getElementById('email-error-lname')) errorContainerLname.insertAdjacentHTML("beforeend",errorMsg)
            }
                });

//adress
adress.addEventListener('focus', function(){
    document.getElementById('adress-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        adress.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('adress-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error-adress'>Address required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('adress-div').classList.add('empty-field','mb-4')
                document.getElementById('names-container').classList.add('mb-4')
                if(!document.getElementById('email-error-adress')) errorContainerAdress.insertAdjacentHTML("beforeend",errorMsg)
            }
                });
//appartement
apartement.addEventListener('focus', function(){
    document.getElementById('apartement-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        apartement.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('apartement-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error-apartement'>Appartment, suite, ... required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('apartement-div').classList.add('empty-field','mb-4')
                if(!document.getElementById('email-error-apartement')) errorContainerApartement.insertAdjacentHTML("beforeend",errorMsg)
            }
                });

//postal
postal.addEventListener('focus', function(){
    document.getElementById('postal-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        postal.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('postal-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error-postal'>Postal code required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('postal-div').classList.add('empty-field','mb-4')
                if(!document.getElementById('email-error-postal')) errorContainerPostal.insertAdjacentHTML("beforeend",errorMsg)
            }
                });

//city
city.addEventListener('focus', function(){
    document.getElementById('city-div').style.border = '2px solid rgb(0, 0, 97)';
        });
        city.addEventListener('blur', function(e){
            if(e.target.value!="")  {
                e.target.nextElementSibling.classList.remove('danger-color');
                document.getElementById('city-div').classList.remove('empty-field')
                document.querySelector('.error-text').remove();
            }
            else {
                let errorMsg = "<p class='error-text danger-color' id='email-error-city'>City required</p>"
                e.target.nextElementSibling.classList.add('danger-color');
                document.getElementById('city-div').classList.add('empty-field','mb-4')
                if(!document.getElementById('email-error-city')) errorContainerCity.insertAdjacentHTML("beforeend",errorMsg)
            }
                });

        //btn continue-to-shipping

        var continue_to_shipping = document.getElementById("continue-to-shipping");
        let bread_crumbs_informations=document.getElementById('informations');
        let bread_crumbs_shipping=document.getElementById('shipping');
        let bread_crumbs_payement=document.getElementById('payement');
      
        // continue_to_shipping.classList.add('disabled');

        continue_to_shipping.addEventListener('click',function(){
           
           bread_crumbs_informations.className=' non-active-breadcrumb';
           bread_crumbs_shipping.className='active-breadcrumb';
       
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
        //   document.getElementById('shipping').remove('.non-active-breadcrumb');
        
         
       

        })
       

        $(document).ready(function(){
             //   verification of inputs
        $('.inputs-informations').keyup(function () {
            var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(
             (($('#email').val()!='') &&(EmailRegex.test($('#email').val())==true))&&
             $('#fname').val()!=''&&
             $('#lname').val()!=''&&
             $('#adress').val()!=''&&
            $('#apartement').val()!=''&&
             $('#apartement').val()!=''&&
             $('#postal').val()!=''&&
             $('#city').val()!=''&&
            $('#region-select').val()!=''
            ){
                $('#continue-to-shipping').prop('disabled',false);

                $('#continue-to-shipping').css('background-color','green');
            }
            else 
            {
                $('#continue-to-shipping').prop('disabled',true);

           
                $('#continue-to-shipping').css('background-color','red');  
            }

        });
   

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
     

        function checkEmpty(){
            var input = document.getElementById("label");
            if (input.value === "") {
                input.classList.add("big");
            }else {
                input.classList.remove("big");
            }
        }
        
   
