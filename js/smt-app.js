/**
 * Created by alex on 12/3/16.
 */


mui.ready(function () {
    var tabs=$('.s-tabs-item');

    for(var i=0;i<tabs.length;i++)
   {
       tabs[i].addEventListener('tap',function () {
            for(var i=0;i<tabs.length;i++)
            {
                $(tabs[i]).removeClass('item-active');
            }
            $(this).addClass('item-active');
       });
   }

});
