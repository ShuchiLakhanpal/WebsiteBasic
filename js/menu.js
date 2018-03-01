$(function(){
         $('#showall').click(function(){
               $('.targetDiv').show(1000);
        });
        $('.showSingle').click(function(){
              $('.targetDiv').hide(2000);//hiding all with class targetdiv and in next line displays the list on which click was performed 
              $('#div'+$(this).attr('target')).show(1000);
        });
});