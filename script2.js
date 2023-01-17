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