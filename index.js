//풀페이지 플러그인
$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage'],
        menu: '.nav2',
        sectionsColor: ['#C63D0F', '#fff', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth page','Fifth page'],
        responsiveWidth: 900,
        afterResponsive: function (isResponsive) {

        }
    });
});

//섹션 이동 버튼
$(document).on('click', '#one', function () {
    fullpage_api.moveTo(1);
});
$(document).on('click', '#two', function () {
    fullpage_api.moveTo(2);
});
$(document).on('click', '#three', function () {
    fullpage_api.moveTo(3);
});
$(document).on('click', '#four', function () {
    fullpage_api.moveTo(4);
});

//아코디언
function accordion_width() {
    $(".accordion-list").each(function () {
        $accordionList = $(this);
        $accordionItem = $(this).find(".accordion-item");		// 아코디언 각각의 class
        itemTotalWidth = $accordionList.outerWidth();		// 아코디언 전체 width
        itemBoxLength = $accordionItem.length;		// 아코디언 갯수
        mobileWidth = 1024;
        // itemWidth = 158; 		// 아코디언 각각 width
        if ($(window).width() > 1380) {
            itemWidth = 144
        } else {
            itemWidth = 100
        }
        activeWidth = itemTotalWidth - (itemWidth * (itemBoxLength - 1));

        // console.log("Total width : " + itemTotalWidth + "px, None Active width :  " + itemWidth + "px, Active width :  " + activeWidth + "px");

        if ($(window).width() > mobileWidth - 17) {
            $accordionItem.each(function () {
                $accordionItem.not(".active").css("width", itemWidth);
                $accordionList.find(".accordion-item.active").css("width", activeWidth);
            });
        } else {
            $accordionItem.removeAttr("style");
        }
    });
}
accordion_width();
$(window).on('resize', accordion_width);

// 1024 PC버전 마우스오버시
$accordionItem.on("click", function () {
    if ($(window).width() > mobileWidth && !$(this).is(".active")) {
        $(this).addClass("active").stop().animate({ "width": activeWidth }, 300, "swing");
        $accordionItem.not($(this)).removeClass("active").stop().animate({ "width": itemWidth }, 300, "swing");
        // $accordionItem.not($(this)).removeClass("active");
        // TweenMax.to($accordionItem.not($(this)), 0.5, {width:itemWidth, ease:Power2.easeOut })
    }
});

// 1024이하 모바일버전 클릭시
$accordionItem.on("click", function () {
    if ($(window).width() < mobileWidth + 1) {
        $(".accordion-list .accordion-item").not($(this)).removeClass("active");
        $(this).addClass("active");
    }
});

//슬라이딩
$('.slick-container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});