var controller = new ScrollMagic.Controller();

var m2 = TweenMax.to('.m_2', 1, {
    x: 200,
    backgroundColor: '#f20',
    width: 200 + 'px'
});

//第一個場景
var scene01 = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        offset: 300,
        triggerHook : .5
    }).setTween(m2)
    .addIndicators({
    name : 'key_01'
    }).addTo(controller);


// 第二個場景

//動畫
var timeline = new TimelineMax();

timeline.to('.m_3' , 1 , {
  x: 100  
}).to('.m_3' ,1 , {
    y: 100
}).to('.m_3' ,1 , {
   x: 100,
   rotation : 360,
   scale : 10
})

//觸發事件
var scene02 = new ScrollMagic.Scene({
    triggerElement: "#trigger_01",
    reverse : true


}).setTween(timeline)
.addIndicators({
name : 'key_02'
}).addTo(controller);