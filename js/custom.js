/***************************************************************************************************************
||||||||||||||||||||||||||||    CUSTOM SCRIPT FOR DRONA SANKALP ACADEMY    |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/
//===Filter For Courses===//
"use strict";

var Field = document.querySelector("#stream");
var std = document.querySelector("#level");
var clp = document.querySelector("#home");
var dlp = document.querySelector("#menu3");
function init() {
    changeCat(Field.value);
}

function changeCat(val) {
    if (val === "Foundation") {
        std.innerHTML = "<option>All</option><option>IX</option><option>X</option><option>XI</option><option>XII</option>";
    }
    else {
        std.innerHTML = "<option>All</option>\n" +
            "<option>XI</option>\n" +
            "<option>XII</option>\n" +
            "<option>XII Passout</option>";
    }
}
function filtrate() {
    var lis = clp.querySelectorAll(".courseBlock");
    var ls = dlp.querySelectorAll(".courseBlock");
    var nil = clp.querySelectorAll("div.nothing")[0];
    var nl = dlp.querySelectorAll("div.nothing")[0];
    var allCourses = grapElements(lis);
    var allPackage = grapElements(ls);
    var subObj = {
        classRoom: allCourses,
        distance: allPackage,
        filtCourse: function (lis, prop, nill) {
            var temp = 0;
            nill.innerHTML = '';
            for (var j = 0; j < prop.length; j++) {
                if (prop[j].stream != Field.value) {
                    lis[prop[j].id].style.display = 'none';
                    temp += 1;
                } else {
                    if (std.value == "All" || std.value == prop[j].Class) {
                        lis[prop[j].id].style.display = 'block';
                    } else {
                        lis[prop[j].id].style.display = 'none';
                        temp += 1;
                    }
                }
            }
            if (temp == prop.length) {
                console.log(temp);
                nill.innerHTML = '<hr class="course-text">No Courses Available';
            }
        }
    };
    subObj.filtCourse(lis, subObj.classRoom, nil);
    subObj.filtCourse(ls, subObj.distance, nl);
}
function grapElements(lis) {
    var arr = [];
    for (var i = 0; i < lis.length; i++) {
        var sm = lis[i].getElementsByTagName('small')[0];
        var strm = sm.getElementsByTagName('span')[0];
        var clss = sm.getElementsByTagName('span')[2];
        var obj = {
            id: i,
            stream: strm.innerHTML,
            Class: clss.innerHTML
        };
        arr.push(obj);
    }
    return arr;
}

//===Event Table [creation and display]===//

function addTableEngg() {
    var classSelectionEngg = document.querySelector('.acad-engg-group');
    classSelectionEngg.addEventListener('click', onSelectionEngg);
}
function addTableMed() {
    var classSelectionMed = document.querySelector('.acad-med-group');
    classSelectionMed.addEventListener('click', onSelectionMed);
}

function onSelectionEngg(e) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'eventsEngg.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            var event = JSON.parse(this.responseText);
            var tableFirst = new CreateTable('Event', 'Date/Time/Venue', event[0]);
            var tableSecond = new CreateTable('Event', 'Date/Time/Venue', event[1]);
            var tableThird = new CreateTable('Event', 'Date/Time/Venue', event[2]);
            var tableFourth = new CreateTable('Event', 'Date/Time/Venue', event[3]);
            var listArray = e.target.parentElement.children;
            if (e.target === listArray[0]) {
                tableFirst.StructTable();
                tableFirst.displayTable(tableFirst.StructTable(), '#eventEngg-table', '.acad-engg');
            } else if (e.target === listArray[1]) {
                tableSecond.StructTable();
                tableSecond.displayTable(tableSecond.StructTable(), '#eventEngg-table', '.acad-engg');
            } else if (e.target === listArray[2]) {
                tableThird.StructTable();
                tableThird.displayTable(tableThird.StructTable(), '#eventEngg-table', '.acad-engg');
            } else if (e.target === listArray[3]) {
                tableFourth.StructTable();
                tableFourth.displayTable(tableFourth.StructTable(), '#eventEngg-table', '.acad-engg');
            }

        }
    }
    xhr.send();
}

function onSelectionMed(e) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'eventsMed.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            var event = JSON.parse(this.responseText);
            var tableFirst = new CreateTable('Event', 'Date/Time/Venue', event[0]);
            var tableSecond = new CreateTable('Event', 'Date/Time/Venue', event[1]);
            var tableThird = new CreateTable('Event', 'Date/Time/Venue', event[2]);
            var tableFourth = new CreateTable('Event', 'Date/Time/Venue', event[3]);
            var listArray = e.target.parentElement.children;
            if (e.target === listArray[0]) {
                tableFirst.StructTable();
                tableFirst.displayTable(tableFirst.StructTable(), '#eventMed-table', '.acad-med');
            } else if (e.target === listArray[1]) {
                tableSecond.StructTable();
                tableSecond.displayTable(tableSecond.StructTable(), '#eventMed-table', '.acad-med');
            } else if (e.target === listArray[2]) {
                tableThird.StructTable();
                tableThird.displayTable(tableThird.StructTable(), '#eventMed-table', '.acad-med');
            } else if (e.target === listArray[3]) {
                tableFourth.StructTable();
                tableFourth.displayTable(tableFourth.StructTable(), '#eventMed-table', '.acad-med');
            }
        }
    }
    xhr.send();
}

function CreateTable(col1, col2, table) {
    this.col1 = col1;
    this.col2 = col2;
    this.table = table;
}
CreateTable.prototype.StructTable = function () {
    var tbl = document.createElement('table');
    tbl.className = 'table table-bordered';
    var thead = tbl.createTHead();
    thead.classList.add('table-header');
    var headRow = thead.insertRow();
    var cell1 = document.createElement('th');
    var cell2 = document.createElement('th');
    cell1.className = 'text-center col-xs-8';
    cell2.className = 'text-center col-xs-4';
    cell1.textContent = this.col1;
    cell2.textContent = this.col2;
    headRow.appendChild(cell1);
    headRow.appendChild(cell2);
    var tbody = tbl.createTBody();
    for (var i = 0; i < this.table.length; i++) {
        var row = tbody.insertRow();
        for (var j = 0; j < 2; j++) {
            var cell = row.insertCell();
            switch (i) {
                case 0: switch (j) {
                    case 0: cell.textContent = this.table[0].eventName;
                        break;
                    case 1: cell.textContent = this.table[0].eventDuration;
                        cell.className = 'text-center';
                        break;
                };
                    break;
                case 1: switch (j) {
                    case 0: cell.textContent = this.table[1].eventName;
                        break;
                    case 1: cell.textContent = this.table[1].eventDuration;
                        cell.className = 'text-center';
                        break;
                };
                    break;
                case 2: switch (j) {
                    case 0: cell.textContent = this.table[2].eventName;
                        break;
                    case 1: cell.textContent = this.table[2].eventDuration;
                        cell.className = 'text-center';
                        break;
                };
                    break;
                case 3: switch (j) {
                    case 0: cell.textContent = this.table[3].eventName;
                        break;
                    case 1: cell.textContent = this.table[3].eventDuration;
                        cell.className = 'text-center';
                        break;
                };
                    break;
                case 4: switch (j) {
                    case 0: cell.textContent = this.table[4].eventName;
                        break;
                    case 1: cell.textContent = this.table[4].eventDuration;
                        cell.className = 'text-center';
                        break;
                };
                    break;
            }
        }
    }

    return tbl;
}

CreateTable.prototype.displayTable = function (table, idName, cls) {
    var tableParent = document.querySelector(idName);
    if (tableParent.children.length === 0) {
        tableParent.appendChild(table);
        console.log(table);
    } else {
        tableParent.removeChild(tableParent.firstElementChild);
        tableParent.appendChild(table);
        console.log(table);
    }
    $(cls).click(function(){
        $('html,body').animate({
            scrollTop: $(idName).offset().top},
            'slow');
       });
}

//===Registration Form filling and validation===//
function reg(){
    document.querySelector('#name').addEventListener('blur', validateName);
    document.querySelector('#fatherName').addEventListener('blur', validateFatherName); 
    document.querySelector('#dob').addEventListener('blur', validateDob);
    document.querySelector('#studentNo').addEventListener('blur', validatePhone);
    document.querySelector('#dadNo').addEventListener('blur', validateDadPhone);
    document.querySelector('#email').addEventListener('blur', validateEmail);
}
function validateName(e){
    var re = /^([a-z A-Z]+)$/;
    var name = document.querySelector('.name-err');
    if(!re.test(e.target.value)){
        e.target.parentElement.classList.add('has-error');
        e.target.parentElement.classList.add('has-feedback');
        name.classList.add('show');
        name.classList.remove('hidden');
    }else{
        e.target.parentElement.classList.remove('has-error');
        e.target.parentElement.classList.remove('has-feedback');
        name.classList.remove('show');
        name.classList.add('hidden');
    }
}

function validateFatherName(e){
    var re = /^([a-z A-Z]+)$/;
    var name = document.querySelector('.fname-err');
    if(!re.test(e.target.value)){
        e.target.parentElement.classList.add('has-error');
        e.target.parentElement.classList.add('has-feedback');
        name.classList.add('show');
        name.classList.remove('hidden');
    }else{
        e.target.parentElement.classList.remove('has-error');
        e.target.parentElement.classList.remove('has-feedback');
        name.classList.remove('show');
        name.classList.add('hidden');
    }
}

function validateDob(e){
    var name = document.querySelector('.dob-err');
    if(!e.target.value){
        e.target.parentElement.classList.add('has-error');
        e.target.parentElement.classList.add('has-feedback');
        name.classList.add('show');
        name.classList.remove('hidden');
    }else{
        e.target.parentElement.classList.remove('has-error');
        e.target.parentElement.classList.remove('has-feedback');
        name.classList.remove('show');
        name.classList.add('hidden');
    }
}

function validatePhone(e){
    var re = /^([1-9]){10}$/;
    var name = document.querySelector('.phone-err');
    if(!re.test(e.target.value)){
        e.target.parentElement.classList.add('has-error');
        e.target.parentElement.classList.add('has-feedback');
        name.classList.add('show');
        name.classList.remove('hidden');
    }else{
        e.target.parentElement.classList.remove('has-error');
        e.target.parentElement.classList.remove('has-feedback');
        name.classList.remove('show');
        name.classList.add('hidden');
    }
}

function validateDadPhone(e){
    var re = /^([1-9]){10}$/;
    var name = document.querySelector('.dphone-err');
    if(!re.test(e.target.value)){
        e.target.parentElement.classList.add('has-error');
        e.target.parentElement.classList.add('has-feedback');
        name.classList.add('show');
        name.classList.remove('hidden');
    }else{
        e.target.parentElement.classList.remove('has-error');
        e.target.parentElement.classList.remove('has-feedback');
        name.classList.remove('show');
        name.classList.add('hidden');
    }
}

function validateEmail(e){
    var re = /^([a-z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    var name = document.querySelector('.email-err');
    var succName = document.querySelector('.email-succ');
    if(!re.test(e.target.value) && e.target.value!==''){
        e.target.parentElement.classList.add('has-error');
        e.target.parentElement.classList.remove('has-success');
        succName.classList.add('hidden');
        name.classList.remove('hidden');
    } else if(e.target.value === ''){
        e.target.parentElement.classList.remove('has-error');
        succName.classList.add('hidden');
        name.classList.add('hidden');
        e.target.parentElement.classList.remove('has-success');
    }
    else{
        e.target.parentElement.classList.remove('has-error');
        e.target.parentElement.classList.add('has-success');
        succName.classList.remove('hidden');
        name.classList.add('hidden');
    }
}


//===ScrollToKnowMore===
function loadScroller(){
   $('.button').click(function(){
    $('html,body').animate({
        scrollTop: $(".choosing-area").offset().top},
        'slow');
   });  
}
//===RevolutionSliderActiver===
function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        $("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            startwidth: 1170,
            startheight: 700,

            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview4",

            dottedOverlay: 'yes',

            hideTimerBar: "off",
            onHoverStop: "off",
            navigation: {
                arrows: { enable: true }
            },
            gridwidth: [1170],
            gridheight: [800]
        });
    };
}


//====Main menu===
function mainmenu() {
    //Submenu Dropdown Toggle
    if ($('.main-menu li.dropdown ul').length) {
        $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    }

}



//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}



//===scoll to Top===
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}



//=== Prealoder===
function prealoader() {
    if ($('.preloader').length) {
        $('.preloader').delay(2000).fadeOut(500);
    }
}



//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function (evt) {
                alert("The selected language is: " + evt.selectedItem);
            }

        });
    };
}



//===Search box ===
function searchbox() {
    //Search Box Toggle
    if ($('.seach-toggle').length) {
        //Dropdown Button
        $('.seach-toggle').on('click', function () {
            $(this).toggleClass('active');
            $(this).next('.search-box').toggleClass('now-visible');
        });
    }

}



//=== History Carousel ===
function contactCarousel() {
    if ($('.contact-carousel').length) {
        $('.contact-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1100: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
}



//=== History Carousel ===
function certificatesCarousel() {
    if ($('.certificates').length) {
        $('.certificates').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }
}



//===Project Single Carousel===
function projectCarousel() {
    if ($('.project-single-carousel').length) {
        $('.project-single-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1100: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
}



//===Achivement Carousel===
function serviceCarousel() {
    if ($('.servicecarousel').length) {
        $('.servicecarousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: 10000,
            smartSpeed: 700,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }
}

//====News Corousel===//
$(".newscorousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 300,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1024: {
            items: 3
        },
        1100: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});

//===Prettyphoto Lightbox===
function prettyPhoto() {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        slideshow: 3000,
        autoplay_slideshow: false,
        fullscreen: true,
        social_tools: false
    });
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function () {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function () {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}



//===Event Carousel===
function eventCarousel() {
    if ($('.event-carousel').length) {
        $('.event-carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1100: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
}




//=== Fact counter ===
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function () {
            timer.countTo();
        })
    }

}



//=== Tool tip ===
function tooltip() {
    if ($('.tool_tip').length) {
        $('.tool_tip').tooltip();
    };
    $
}



//=== Accordion ===
function accordion() {
    if ($('.accordion-box').length) {
        $('.accordion-box .accord-btn').on('click', function () {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .accord-btn ').removeClass('active');
            }

            if ($(this).next('.accord-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }

            else {
                $(this).addClass('active');
                $(this).next('.accord-content').slideDown(500);
            }
        });
    }
}



//=== Cart Touch Spin ===
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}






// Select menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function (event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}



//  Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function (event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}


// ===Date picker ===
function datepicker() {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}



//=== Time picker===
function timepicker() {
    $('input[name="time"]').ptTimeSelect();
}



//=== CountDownTimer===
function countDownTimer() {
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html('<h2>' + event.strftime('%D : %H : %M : %S') + '</h2>');
            });
        });
    };
    if ($('.time-countdown-two').length) {
        $('.time-countdown-two').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef">seconds</span> </div> </li>');
            });
        });
    };
}



//=== Contact Form Validation ===
if ($("#contact-form").length) {
    $("#contact-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () { $(form_result_div).fadeOut('slow') }, 6000);
                }
            });
        }
    });
}



//=== Add comment Form Validation ===
if ($("#add-comment-form").length) {
    $("#add-comment-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () { $(form_result_div).fadeOut('slow') }, 6000);
                }
            });
        }
    });
}



//=== Review Form Validation ===
if ($("#consultation-form").length) {
    $("#consultation-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () { $(form_result_div).fadeOut('slow') }, 6000);
                }
            });
        }
    });
}



//=== Review Form Validation ===
if ($("#review-form").length) {
    $("#review-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () { $(form_result_div).fadeOut('slow') }, 6000);
                }
            });
        }
    });
}



//=== Review Form Validation ===
if ($("#request-form").length) {
    $("#request-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () { $(form_result_div).fadeOut('slow') }, 6000);
                }
            });
        }
    });
}



// Elements Animation
if ($('.wow').length) {
    var wow = new WOW({
        mobile: false
    });
    wow.init();
}




// Dom Ready Function
jQuery(document).on('ready', function () {
    (function ($) {
        // add your functions
        revolutionSliderActiver();
        mainmenu();
        scrollToTop();
        searchbox();
        languageSwitcher();
        selectDropdown();
        eventCarousel();
        CounterNumberChanger();
        accordion();
        projectMasonaryLayout();
        priceFilter();
        countDownTimer();
        contactCarousel();
        cartTouchSpin();
        certificatesCarousel();
        projectCarousel();
        serviceCarousel();
        prettyPhoto();
        datepicker();
        timepicker();
        tooltip()




    })(jQuery);
});


// Scroll Function
jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader()

    })(jQuery);
});



// Instance Of Fuction While Window Load event
jQuery(window).on('load', function () {
    (function ($) {
        prealoader();

    })(jQuery);
});



