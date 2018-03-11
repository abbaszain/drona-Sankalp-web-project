"use strict";var Field=document.querySelector("#stream"),std=document.querySelector("#level"),clp=document.querySelector("#home"),dlp=document.querySelector("#menu3");function init(){changeCat(Field.value)}function changeCat(e){std.innerHTML="Foundation"===e?"<option>All</option><option>IX</option><option>X</option><option>XI</option><option>XII</option>":"<option>All</option>\n<option>XI</option>\n<option>XII</option>\n<option>XII Passout</option>"}function filtrate(){var e=clp.querySelectorAll(".courseBlock"),t=dlp.querySelectorAll(".courseBlock"),a=clp.querySelectorAll("div.nothing")[0],n=dlp.querySelectorAll("div.nothing")[0],s={classRoom:grapElements(e),distance:grapElements(t),filtCourse:function(e,t,a){var n=0;a.innerHTML="";for(var s=0;s<t.length;s++)t[s].stream!=Field.value?(e[t[s].id].style.display="none",n+=1):"All"==std.value||std.value==t[s].Class?e[t[s].id].style.display="block":(e[t[s].id].style.display="none",n+=1);n==t.length&&(console.log(n),a.innerHTML='<hr class="course-text">No Courses Available')}};s.filtCourse(e,s.classRoom,a),s.filtCourse(t,s.distance,n)}function grapElements(e){for(var t=[],a=0;a<e.length;a++){var n=e[a].getElementsByTagName("small")[0],s=n.getElementsByTagName("span")[0],o=n.getElementsByTagName("span")[2],r={id:a,stream:s.innerHTML,Class:o.innerHTML};t.push(r)}return t}function addTableEngg(){document.querySelector(".acad-engg-group").addEventListener("click",onSelectionEngg)}function addTableMed(){document.querySelector(".acad-med-group").addEventListener("click",onSelectionMed)}function onSelectionEngg(r){var e=new XMLHttpRequest;e.open("GET","eventsEngg.json",!0),e.onload=function(){if(200===this.status){var e=JSON.parse(this.responseText),t=new CreateTable("Event","Date/Time/Venue",e[0]),a=new CreateTable("Event","Date/Time/Venue",e[1]),n=new CreateTable("Event","Date/Time/Venue",e[2]),s=new CreateTable("Event","Date/Time/Venue",e[3]),o=r.target.parentElement.children;r.target===o[0]?(t.StructTable(),t.displayTable(t.StructTable(),"#eventEngg-table",".acad-engg")):r.target===o[1]?(a.StructTable(),a.displayTable(a.StructTable(),"#eventEngg-table",".acad-engg")):r.target===o[2]?(n.StructTable(),n.displayTable(n.StructTable(),"#eventEngg-table",".acad-engg")):r.target===o[3]&&(s.StructTable(),s.displayTable(s.StructTable(),"#eventEngg-table",".acad-engg"))}},e.send()}function onSelectionMed(r){var e=new XMLHttpRequest;e.open("GET","eventsMed.json",!0),e.onload=function(){if(200===this.status){var e=JSON.parse(this.responseText),t=new CreateTable("Event","Date/Time/Venue",e[0]),a=new CreateTable("Event","Date/Time/Venue",e[1]),n=new CreateTable("Event","Date/Time/Venue",e[2]),s=new CreateTable("Event","Date/Time/Venue",e[3]),o=r.target.parentElement.children;r.target===o[0]?(t.StructTable(),t.displayTable(t.StructTable(),"#eventMed-table",".acad-med")):r.target===o[1]?(a.StructTable(),a.displayTable(a.StructTable(),"#eventMed-table",".acad-med")):r.target===o[2]?(n.StructTable(),n.displayTable(n.StructTable(),"#eventMed-table",".acad-med")):r.target===o[3]&&(s.StructTable(),s.displayTable(s.StructTable(),"#eventMed-table",".acad-med"))}},e.send()}function CreateTable(e,t,a){this.col1=e,this.col2=t,this.table=a}function reg(){document.querySelector("#name").addEventListener("blur",validateName),document.querySelector("#fatherName").addEventListener("blur",validateFatherName),document.querySelector("#dob").addEventListener("blur",validateDob),document.querySelector("#studentNo").addEventListener("blur",validatePhone),document.querySelector("#dadNo").addEventListener("blur",validateDadPhone),document.querySelector("#email").addEventListener("blur",validateEmail)}function validateName(e){var t=document.querySelector(".name-err");/^([a-z A-Z]+)$/.test(e.target.value)?(e.target.parentElement.classList.remove("has-error"),e.target.parentElement.classList.remove("has-feedback"),t.classList.remove("show"),t.classList.add("hidden")):(e.target.parentElement.classList.add("has-error"),e.target.parentElement.classList.add("has-feedback"),t.classList.add("show"),t.classList.remove("hidden"))}function validateFatherName(e){var t=document.querySelector(".fname-err");/^([a-z A-Z]+)$/.test(e.target.value)?(e.target.parentElement.classList.remove("has-error"),e.target.parentElement.classList.remove("has-feedback"),t.classList.remove("show"),t.classList.add("hidden")):(e.target.parentElement.classList.add("has-error"),e.target.parentElement.classList.add("has-feedback"),t.classList.add("show"),t.classList.remove("hidden"))}function validateDob(e){var t=document.querySelector(".dob-err");e.target.value?(e.target.parentElement.classList.remove("has-error"),e.target.parentElement.classList.remove("has-feedback"),t.classList.remove("show"),t.classList.add("hidden")):(e.target.parentElement.classList.add("has-error"),e.target.parentElement.classList.add("has-feedback"),t.classList.add("show"),t.classList.remove("hidden"))}function validatePhone(e){var t=document.querySelector(".phone-err");/^([1-9]){10}$/.test(e.target.value)?(e.target.parentElement.classList.remove("has-error"),e.target.parentElement.classList.remove("has-feedback"),t.classList.remove("show"),t.classList.add("hidden")):(e.target.parentElement.classList.add("has-error"),e.target.parentElement.classList.add("has-feedback"),t.classList.add("show"),t.classList.remove("hidden"))}function validateDadPhone(e){var t=document.querySelector(".dphone-err");/^([1-9]){10}$/.test(e.target.value)?(e.target.parentElement.classList.remove("has-error"),e.target.parentElement.classList.remove("has-feedback"),t.classList.remove("show"),t.classList.add("hidden")):(e.target.parentElement.classList.add("has-error"),e.target.parentElement.classList.add("has-feedback"),t.classList.add("show"),t.classList.remove("hidden"))}function validateEmail(e){var t=document.querySelector(".email-err"),a=document.querySelector(".email-succ");/^([a-z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/.test(e.target.value)||""===e.target.value?""===e.target.value?(e.target.parentElement.classList.remove("has-error"),a.classList.add("hidden"),t.classList.add("hidden"),e.target.parentElement.classList.remove("has-success")):(e.target.parentElement.classList.remove("has-error"),e.target.parentElement.classList.add("has-success"),a.classList.remove("hidden"),t.classList.add("hidden")):(e.target.parentElement.classList.add("has-error"),e.target.parentElement.classList.remove("has-success"),a.classList.add("hidden"),t.classList.remove("hidden"))}function loadScroller(){$(".button").click(function(){$("html,body").animate({scrollTop:$(".choosing-area").offset().top},"slow")})}function revolutionSliderActiver(){$(".rev_slider_wrapper #slider1").length&&$("#slider1").revolution({sliderType:"standard",sliderLayout:"auto",delay:5e3,startwidth:1170,startheight:700,navigationType:"bullet",navigationArrows:"0",navigationStyle:"preview4",dottedOverlay:"yes",hideTimerBar:"off",onHoverStop:"off",navigation:{arrows:{enable:!0}},gridwidth:[1170],gridheight:[800]})}function mainmenu(){$(".main-menu li.dropdown ul").length&&($(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>'),$(".main-menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))}function stickyHeader(){if($(".stricky").length){100<$(window).scrollTop()?($(".stricky").addClass("stricky-fixed"),$(".scroll-to-top").fadeIn(1500)):$(this).scrollTop()<=100&&($(".stricky").removeClass("stricky-fixed"),$(".scroll-to-top").fadeOut(1500))}}function scrollToTop(){$(".scroll-to-target").length&&$(".scroll-to-target").on("click",function(){var e=$(this).attr("data-target");$("html, body").animate({scrollTop:$(e).offset().top},1e3)})}function prealoader(){$(".preloader").length&&$(".preloader").delay(2e3).fadeOut(500)}function languageSwitcher(){$("#polyglot-language-options").length&&$("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({effect:"slide",animSpeed:500,testMode:!0,onChange:function(e){alert("The selected language is: "+e.selectedItem)}})}function searchbox(){$(".seach-toggle").length&&$(".seach-toggle").on("click",function(){$(this).toggleClass("active"),$(this).next(".search-box").toggleClass("now-visible")})}function contactCarousel(){$(".contact-carousel").length&&$(".contact-carousel").owlCarousel({loop:!0,margin:30,nav:!1,dots:!0,autoplayHoverPause:!1,autoplay:6e3,smartSpeed:700,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1100:{items:1},1200:{items:1}}})}function certificatesCarousel(){$(".certificates").length&&$(".certificates").owlCarousel({loop:!0,margin:30,nav:!1,dots:!0,autoplayHoverPause:!1,autoplay:6e3,smartSpeed:700,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:2},1024:{items:3},1100:{items:3},1200:{items:4}}})}function projectCarousel(){$(".project-single-carousel").length&&$(".project-single-carousel").owlCarousel({dots:!0,loop:!0,margin:30,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplayHoverPause:!1,autoplay:6e3,smartSpeed:1e3,responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1100:{items:1},1200:{items:1}}})}function serviceCarousel(){$(".servicecarousel").length&&$(".servicecarousel").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,autoplayHoverPause:!0,autoplay:1e4,smartSpeed:700,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:2},1024:{items:3},1100:{items:3},1200:{items:4}}})}function prettyPhoto(){$("a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:"normal",slideshow:3e3,autoplay_slideshow:!1,fullscreen:!0,social_tools:!1})}function projectMasonaryLayout(){($(".masonary-layout").length&&$(".masonary-layout").isotope({layoutMode:"masonry"}),$(".post-filter").length&&$(".post-filter li").children("span").on("click",function(){var e=$(this),t=e.parent().attr("data-filter");return $(".post-filter li").children("span").parent().removeClass("active"),e.parent().addClass("active"),$(".filter-layout").isotope({filter:t,animationOptions:{duration:500,easing:"linear",queue:!1}}),!1}),$(".post-filter.has-dynamic-filter-counter").length)&&$(".post-filter.has-dynamic-filter-counter").find("li").each(function(){var e=$(this).data("filter");console.log(e);var t=$(".gallery-content").find(e).length;$(this).children("span").append('<span class="count"><b>'+t+"</b></span>")})}function eventCarousel(){$(".event-carousel").length&&$(".event-carousel").owlCarousel({dots:!1,loop:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplayHoverPause:!1,autoplay:6e3,smartSpeed:1e3,responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1100:{items:1},1200:{items:1}}})}function CounterNumberChanger(){var e=$(".timer");e.length&&e.appear(function(){e.countTo()})}function tooltip(){$(".tool_tip").length&&$(".tool_tip").tooltip(),$}function accordion(){$(".accordion-box").length&&$(".accordion-box .accord-btn").on("click",function(){!0!==$(this).hasClass("active")&&$(".accordion-box .accord-btn ").removeClass("active"),$(this).next(".accord-content").is(":visible")?($(this).removeClass("active"),$(this).next(".accord-content").slideUp(500)):($(this).addClass("active"),$(this).next(".accord-content").slideDown(500))})}function cartTouchSpin(){$(".quantity-spinner").length&&$("input.quantity-spinner").TouchSpin({verticalbuttons:!0})}function selectDropdown(){if($(".selectmenu").length){$(".selectmenu").selectmenu();$(".selectmenu").selectmenu({change:function(e,t){$(this).trigger("change",t)}})}}function priceFilter(){$(".price-ranger").length&&($(".price-ranger #slider-range").slider({range:!0,min:10,max:200,values:[11,99],slide:function(e,t){$(".price-ranger .ranger-min-max-block .min").val("$"+t.values[0]),$(".price-ranger .ranger-min-max-block .max").val("$"+t.values[1])}}),$(".price-ranger .ranger-min-max-block .min").val("$"+$(".price-ranger #slider-range").slider("values",0)),$(".price-ranger .ranger-min-max-block .max").val("$"+$(".price-ranger #slider-range").slider("values",1)))}function datepicker(){$("#datepicker").length&&$("#datepicker").datepicker()}function timepicker(){$('input[name="time"]').ptTimeSelect()}function countDownTimer(){$(".time-countdown").length&&$(".time-countdown").each(function(){var e=$(this),t=e.data("countdown-time");e.countdown(t,function(e){$(this).html("<h2>"+e.strftime("%D : %H : %M : %S")+"</h2>")})}),$(".time-countdown-two").length&&$(".time-countdown-two").each(function(){var e=$(this),t=e.data("countdown-time");e.countdown(t,function(e){$(this).html('<li> <div class="box"> <span class="days">'+e.strftime("%D")+'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+e.strftime("%H")+'</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">'+e.strftime("%M")+'</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">'+e.strftime("%S")+'</span> <span class="timeRef">seconds</span> </div> </li>')})})}if(CreateTable.prototype.StructTable=function(){var e=document.createElement("table");e.className="table table-bordered";var t=e.createTHead();t.classList.add("table-header");var a=t.insertRow(),n=document.createElement("th"),s=document.createElement("th");n.className="text-center col-xs-8",s.className="text-center col-xs-4",n.textContent=this.col1,s.textContent=this.col2,a.appendChild(n),a.appendChild(s);for(var o=e.createTBody(),r=0;r<this.table.length;r++)for(var l=o.insertRow(),i=0;i<2;i++){var c=l.insertCell();switch(r){case 0:switch(i){case 0:c.textContent=this.table[0].eventName;break;case 1:c.textContent=this.table[0].eventDuration,c.className="text-center"}break;case 1:switch(i){case 0:c.textContent=this.table[1].eventName;break;case 1:c.textContent=this.table[1].eventDuration,c.className="text-center"}break;case 2:switch(i){case 0:c.textContent=this.table[2].eventName;break;case 1:c.textContent=this.table[2].eventDuration,c.className="text-center"}break;case 3:switch(i){case 0:c.textContent=this.table[3].eventName;break;case 1:c.textContent=this.table[3].eventDuration,c.className="text-center"}break;case 4:switch(i){case 0:c.textContent=this.table[4].eventName;break;case 1:c.textContent=this.table[4].eventDuration,c.className="text-center"}}}return e},CreateTable.prototype.displayTable=function(e,t,a){var n=document.querySelector(t);0===n.children.length||n.removeChild(n.firstElementChild),n.appendChild(e),console.log(e),$(a).click(function(){$("html,body").animate({scrollTop:$(t).offset().top},"slow")})},$(".newscorousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,autoplayHoverPause:!0,autoplay:!0,smartSpeed:300,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:2},1024:{items:3},1100:{items:5},1200:{items:6}}}),$("#contact-form").length&&$("#contact-form").validate({submitHandler:function(t){var a=$(t).find('button[type="submit"]'),n="#form-result";$(n).remove(),a.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var s=a.html();a.html(a.prop("disabled",!0).data("loading-text")),$(t).ajaxSubmit({dataType:"json",success:function(e){"true"==e.status&&$(t).find(".form-control").val(""),a.prop("disabled",!1).html(s),$(n).html(e.message).fadeIn("slow"),setTimeout(function(){$(n).fadeOut("slow")},6e3)}})}}),$("#add-comment-form").length&&$("#add-comment-form").validate({submitHandler:function(t){var a=$(t).find('button[type="submit"]'),n="#form-result";$(n).remove(),a.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var s=a.html();a.html(a.prop("disabled",!0).data("loading-text")),$(t).ajaxSubmit({dataType:"json",success:function(e){"true"==e.status&&$(t).find(".form-control").val(""),a.prop("disabled",!1).html(s),$(n).html(e.message).fadeIn("slow"),setTimeout(function(){$(n).fadeOut("slow")},6e3)}})}}),$("#consultation-form").length&&$("#consultation-form").validate({submitHandler:function(t){var a=$(t).find('button[type="submit"]'),n="#form-result";$(n).remove(),a.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var s=a.html();a.html(a.prop("disabled",!0).data("loading-text")),$(t).ajaxSubmit({dataType:"json",success:function(e){"true"==e.status&&$(t).find(".form-control").val(""),a.prop("disabled",!1).html(s),$(n).html(e.message).fadeIn("slow"),setTimeout(function(){$(n).fadeOut("slow")},6e3)}})}}),$("#review-form").length&&$("#review-form").validate({submitHandler:function(t){var a=$(t).find('button[type="submit"]'),n="#form-result";$(n).remove(),a.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var s=a.html();a.html(a.prop("disabled",!0).data("loading-text")),$(t).ajaxSubmit({dataType:"json",success:function(e){"true"==e.status&&$(t).find(".form-control").val(""),a.prop("disabled",!1).html(s),$(n).html(e.message).fadeIn("slow"),setTimeout(function(){$(n).fadeOut("slow")},6e3)}})}}),$("#request-form").length&&$("#request-form").validate({submitHandler:function(t){var a=$(t).find('button[type="submit"]'),n="#form-result";$(n).remove(),a.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var s=a.html();a.html(a.prop("disabled",!0).data("loading-text")),$(t).ajaxSubmit({dataType:"json",success:function(e){"true"==e.status&&$(t).find(".form-control").val(""),a.prop("disabled",!1).html(s),$(n).html(e.message).fadeIn("slow"),setTimeout(function(){$(n).fadeOut("slow")},6e3)}})}}),$(".wow").length){var wow=new WOW({mobile:!1});wow.init()}jQuery(document).on("ready",function(){jQuery,revolutionSliderActiver(),mainmenu(),scrollToTop(),searchbox(),languageSwitcher(),selectDropdown(),eventCarousel(),CounterNumberChanger(),accordion(),projectMasonaryLayout(),priceFilter(),countDownTimer(),contactCarousel(),cartTouchSpin(),certificatesCarousel(),projectCarousel(),serviceCarousel(),prettyPhoto(),datepicker(),timepicker(),tooltip()}),jQuery(window).on("scroll",function(){jQuery,stickyHeader()}),jQuery(window).on("load",function(){jQuery,prealoader()});