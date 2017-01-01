$(document).ready(function(){
  function updateDots(){ 
    $(".dot").each(function(i){
      var scale=1;
      var cur=$(this);
      var pos=cur.position();
      //var lastPos=cur.data("lastPos");
      $(".dot:not(.dot:eq("+i+"))").each(function(){
        var cur2=$(this); 
        var pos2=cur2.position();
        var dx=pos2.left-pos.left;
        var dy=pos2.top-pos.top;
        var distance=Math.sqrt((dx*dx)+(dy*dy));
        var max=20;
        var p=Math.max(0,(max-distance)/max);
        scale+=(1.5-scale)*0.4*p;
      })
      cur.children(".dot-gfx").css({
        transform:"scale("+(scale)+","+scale+")"  
      })
    })
    requestAnimationFrame(updateDots);
  }
  updateDots();
});