var controller  = new ScrollMagic.Controller();

 var m2 = TweenMax.to('.m_2' , 1 , {
    x: 200,
    backgroundColor: '#f20'
});


new ScrollMagic.Scene({
   triggerElement: "#trigger"
}).setTween(m2).addIndicators().addTo(controller);

