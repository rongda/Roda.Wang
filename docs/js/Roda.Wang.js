$(function(){
	$('#fullpage').fullpage({
	//Navigation
        menu: "#topMenu",//绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
        lockAnchors: false,
        anchors:['home','about','resume','service','contact'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: [],
        showActiveTooltip: true,//
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        controlArrowColor:'#78413f',//左右滑块的箭头的背景颜色

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,//滚动到最底部后是否滚顶部
        loopTop: false,//滚动到最顶部后是否滚底部
        loopHorizontal: true,//左右滑块是否循环滑动
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,//内容是否垂直居中l;
        resize : false,//字体是否随着窗口缩放而缩放;
        //sectionsColor : ['#78413f'],//Section background color
        //paddingTop: '3em',
        //paddingBottom: '10px',
        fixedElements: '#header',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
        	if (nextIndex == '5') {
        		$('#global-arrow-down').animate({
				bottom: '-100%'
			}, 1500, 'easeOutExpo');
        	}
        	if (index == '5') {
        		$('#global-arrow-down').animate({
				bottom: '5%'
			}, 1500, 'easeOutExpo');
        	}
                if(index == '1'){
                        $("#section0").find('.home_have').addClass('tly20').removeClass('tly0');
                        $("#section0").find('.home_rodaicon').addClass('tlx-20').removeClass('tlx0');
                        $("#section0").find('.home_ricon').removeClass('tly0').addClass('tly-20');
                }
                if(index == '2'){
                        $("#section1").find('p').removeClass('tly0').addClass('tly20');
                }
        },
        afterLoad:function(anchorLink,index){
                if(index == '1'){
                        $("#section0").find('.home_have').removeClass('tly20').addClass('tly0');
                        $("#section0").find('.home_rodaicon').removeClass('tlx-20').addClass('tlx0');
                        $("#section0").find('.home_ricon').removeClass('tly-20').addClass('tly0');
                }
                if(index == '2'){
                        $("#section1").find('p').removeClass('tly20').addClass('tly0');
                }
        }
        //afterRender: function(){},
        //afterResize: function(){},
        //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        //onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

        //responsive-nav
        var navigation = responsiveNav("#topMenu",{label: "MENU"});

        //login
        $("#login").click(function(){
                $("#login_con").animate({
                        top:0
                },1000,'easeOutExpo');         
        });
        $(".close").click(function(){
                $("#login_con").animate({
                        top:'-100%'
                },1000,'easeOutExpo');         
        });   
          
});