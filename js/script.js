$(document).ready(function () {
    $(".lines-dropdowns").click(function () { 
        $("nav.navbar ul li").slideToggle("slow");
        $(".line-1").toggleClass("line-drop-1");
        $(".line-2").toggleClass("line-drop-2");
        $(".line-3").toggleClass("line-drop-3");
    });
    $(".footer-items .item-information h3 i").click(function () { 
        $(".footer-items .item-information ul ").slideToggle("slow");
        
    });
    $(".footer-items .item-My_Account h3 i").click(function () { 
        $(".footer-items .item-My_Account ul ").slideToggle("slow");
        
    });
});