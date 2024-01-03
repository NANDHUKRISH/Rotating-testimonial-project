(function(){
    "use strict";

    let counter=1;
    function contentRotater(){
    $(`#container p:nth-child(${counter})`).fadeIn(2000,function(){
         if($(this).is("#container p:last-child")){
            setTimeout(function(){
                $(`#container p:nth-child(${counter})`).fadeOut(2000,function(){
                    counter=1;
                    contentRotater();
                });

            },3000)
         }
         else{
            setTimeout(function(){
                $(`#container p:nth-child(${counter})`).fadeOut(2000,function(){
                    counter++;
                    contentRotater();
                });

            },3000)
         }
    });
    }

    contentRotater();
})();