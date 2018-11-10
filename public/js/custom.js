/* Show and hide menu */

$(document).ready(function(){

    'use strict';

    $(window).scroll(function() {

        'use strict';

        if($(window).scrollTop() < 80 ) {

            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'

            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0)'

            });

        } else {

            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'

            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0.7)',
                'border-color': '#444'

            });

            $('.navbar-brand img').css({
               'height': '35px',
                'padding-top': '0px'

            });

            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'


            });


        }


    });


});

//add smooth scrolling
$(document).ready(function() {

    'use strict';


    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});

/* active menu item on click */
$(document).ready(function() {

    'use strict';


    $('.navbar-nav li a').click(function(){

        'use strict';

        $('.navbar-nav li a').parent().removeClass("active");

        $(this).parent().addClass("active");

    });
});

// highlight menu item on scroll
$(document).ready(function() {

    'use strict';

    $(window).scroll( function() {

        'use strict';

        $("section").each(function()  {

            'use strict';

            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");

            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");

            }


        });


    });


});

// add auto padding to header

$(document).ready(function() {

    'use strict';

    setInterval( function() {

        'use strict';

        var windowHeight = $(window).height();

        var containerHeight = $(".header-container").height();

        var padTop = windowHeight - containerHeight;

        $(".header-container").css({

            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'

        });


    }, 10)


});

// Add bx slider to screens
$(document).ready(function() {

    $('.bxslider').bxSlider({

        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });

});


// Add counter
$(document).ready(function() {

    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });

    $("#buy-ip-copyright").click(function() {
        dosomething();
    });
});


window.addEventListener('load', function() {
  // 检查web3是否已经注入到(Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // 使用 Mist/MetaMask 的提供者
    console.log("web3 new Instance");
    web3 = new Web3(web3.currentProvider);
  } else {
    alert("安装 MetaMask");
  }

})

function dosomething() {
    // 获取当前metamask上激活的账户
    var userAccount = web3.eth.accounts[0];
    if (typeof userAccount !== 'undefined') {
    // 当前用户余额是否大于费用
    var price = $("#price").val();
    var rate = $("#rate").val();
    var accountBalance;
    web3.eth.getBalance(userAccount, (error, balance) => {
            if (error) return;
    accountBalance= balance.c[0];
        if (accountBalance < price*(100000000)) {
          alert("余额不足");
          // 调用did接口生成新的did
        } else {
            $.ajax({
               type: "GET",
               url: "http://18.179.20.67:8080/api/1/did",
               success: function(resp){
                 console.log(resp);
                 var privateKey = resp.privateKey;
                 var publicKey = resp.publicKey;
                 var did = resp.did;
                 alert(privateKey);
                 alert(publicKey);
                 alert(did);
               },
               error: function(e){
                 alert('Error121212: ' + e);
               }
             });
        }
});

    } else {
       alert("请登录metamask")
    }
}

// Add animation/ Initialize Woo
$(document).ready(function() {

    'use strict';

    new WOW().init();

});
