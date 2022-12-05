class Pulmuone {
  init(){
    this.header();
    this.section1();
    this.section3();
    this.section6();
    this.footer();
  }
  header(){
    $('.main-btn').on({
      mouseenter(){
        $('.sub').stop().hide();
        $('.sub-bg').stop().slideDown(300);
        $(this).next().stop().slideDown(300);
      }
    });

    $('#nav').on({
      mouseleave(){
        $('.sub').stop().hide();
        $('.sub-bg').stop().slideUp(300);
      }
    });
  }
  section1(){
    $('.icon-btn').eq(0).on({
      mouseenter: function(){
        $(this).children().attr('src','./img/main_sec01_img4_on.png')
      },
      mouseleave: function (){
        $(this).children().attr('src','./img/main_sec01_img4.png')
      }
    });

    $('.icon-btn').eq(1).on({
      mouseenter: function(){
        $(this).children().attr('src','./img/main_sec01_img1_on.png')
      },
      mouseleave: function (){
        $(this).children().attr('src','./img/main_sec01_img1.png')
      }
    });

    $('.icon-btn').eq(2).on({
      mouseenter: function(){
        $(this).children().attr('src','./img/main_sec01_img2_on.png')
      },
      mouseleave: function (){
        $(this).children().attr('src','./img/main_sec01_img2.png')
      }
    });

    $('.icon-btn').eq(3).on({
      mouseenter: function(){
        $(this).children().attr('src','./img/main_sec01_img3_on.png')
      },
      mouseleave: function (){
        $(this).children().attr('src','./img/main_sec01_img3.png')
      }
    });
  }
  section3(){
    $('#section3 .one').on({
      mouseenter(){
        $(this).css('background', '#666');
        $(this).find('img').attr('src','./img/s01_list_icon_1_on.png');
        $(this).find('.text').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s01_list_img1.jpg)"});
        $(this).find('img').attr('src','./img/s01_list_icon_1.png');
        $(this).find('.text').removeClass('on');
      }
    });
    $('#section3 .two').on({
      mouseenter(){
        $(this).css('background', 'rgb(44, 63, 70)');
        $(this).find('img').attr('src','./img/s01_list_icon_2_on.png');
        $(this).find('.text').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s01_list_img2.jpg)"});
        $(this).find('img').attr('src','./img/s01_list_icon_2.png');
        $(this).find('.text').removeClass('on');
      }
    });
    $('#section3 .three').on({
      mouseenter(){
        $(this).css('background', 'rgb(114, 146, 70)');
        $(this).find('img').attr('src','./img/s01_list_icon_3_on.png');
        $(this).find('.text').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s01_list_img3.jpg)"});
        $(this).find('img').attr('src','./img/s01_list_icon_3.png');
        $(this).find('.text').removeClass('on');
      }
    });
  }
  section6(){
    $('#section6 .one').on({
      mouseenter(){
        $(this).css('background', '#b7b684');
        $(this).find('em, span').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s04_list_img1.jpg)"});
        $(this).find('em, span').removeClass('on');
      }
    });
    $('#section6 .two').on({
      mouseenter(){
        $(this).css('background', '#9cb472');
        $(this).find('em, span').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s04_list_img2.jpg)"});
        $(this).find('em, span').removeClass('on');
      }
    });
    $('#section6 .three').on({
      mouseenter(){
        $(this).css('background', '#8e8b77');
        $(this).find('em, span').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s04_list_img3.jpg)"});
        $(this).find('em, span').removeClass('on');
      }
    });
    $('#section6 .four').on({
      mouseenter(){
        $(this).css('background', '#7e8b66');
        $(this).find('em, span').addClass('on');
      },
      mouseleave(){
        $(this).css({"background":"url(../img/s04_list_img4.jpg)"});
        $(this).find('em, span').removeClass('on');
      }
    });
  }
  footer(){
    $('#footer .family').on({
      click(){
        $('#footer .family-box').css('display', 'flex');
      }
    });
    $('#footer .family-box').on({
      mouseleave(){
        $(this).css('display', 'none');
      }
    });
  }
}
const newPulmuone = new Pulmuone();
newPulmuone.init();