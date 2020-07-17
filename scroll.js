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
        triggerHook: .5
    }).setTween(m2)
    .addIndicators({
        name: 'key_01'
    }).addTo(controller);


// 第二個場景

//動畫
var timeline = new TimelineMax();

timeline.to('.m_3', 1, {
    x: 100
}).to('.m_3', 1, {
    y: 100
}).to('.m_3', 1, {
    x: 100,
    rotation: 360,
    scale: 10
})

//觸發事件
var scene02 = new ScrollMagic.Scene({
        triggerElement: "#trigger_01",
        reverse: true


    }).setTween(timeline)
    .addIndicators({
        name: 'key_02'
    }).addTo(controller);


//場景3

var m4 = TweenMax.to('.m_4', 1, {
    x: 300
});

var m5 = TweenMax.to('.m_5', 1, {
    x: 200,
    y: 100,
    backgroundColor: 'yellow'
})





//動態加入class
var scene03 = new ScrollMagic.Scene({
        triggerElement: "#trigger_02",
        reverse: true
    }).setClassToggle('.section_04', 'animaion') //動態加入class
    .setTween([m4, m5]) //陣列放多段動畫
    .addIndicators({
        name: 'class_03'
    }).addTo(controller);


//動態
var stickmove = new TimelineMax();

stickmove.fromTo('.m_6', 1, {
    stickmovex: 0,
    opacity: 0
}, {
    x: 100,
    opacity: 1
}).fromTo('.m_7', 1, {
    x: 0,
    opacity: 0
}, {
    x: 100,
    opacity: 1
}).fromTo('.m_8', 1, {
    x: 0,
    opacity: 0

}, {
    x: 100,
    opacity: 1
})




//固定住畫面
var scene04 = new ScrollMagic.Scene({
        triggerElement: "#trigger_03",
        offset: 0,
        triggerHook: 0,
        duration: '300%'
    }).setPin('.section_05').setTween(stickmove)
    .addIndicators({
        name: 'key_04'
    }).addTo(controller);


// 滾動視差

var parallax = new TimelineMax();
var parallax01 = TweenMax.to('.m_9', 1, {
    y: '-100%'
});
var parallax02 = TweenMax.to('.m_10', 1, {
    y: '100%'
});
var parallax03 = TweenMax.to('.m_11', 1, {
    y: '40%'
});


parallax.add([parallax01, parallax02, parallax03]);




var scene05 = new ScrollMagic.Scene({
        triggerElement: '#trigger_04',
        duration: '100%'
    }).setTween(parallax)
    .addIndicators({
        name: 'key_05'
    }).addTo(controller);