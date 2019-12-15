'use strict';

$(function() {


  // トップ（挨拶文と名前）のアニメーション
  $('#greet').slideDown(1000, function() {
    $("#fade").show('slide');
    $('#piliod').css('color', 'orange');
  });

  // ページ内スクロール
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 68;

    if (href == "#top") {
      $('html, body').animate({
        scrollTop: 0
      }, speed, 'swing');
      return false;
    } else {
      $('html, body').animate({scrollTop:position}, speed, 'swing');
      return false;
    }
  });

  // スクロールに応じて要素を表示するアニメーション
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          // if (scroll > elemPos - windowHeight + 65){
          //     $(this).addClass('scrollin');
          // }
          if (scroll > elemPos - windowHeight){
              $(this).addClass('scrollin');
          }
          // if (scroll > elemPos - windowHeight + 200){
          //     $(this).addClass('scrollin');
          // }
      });
  });

  // マウスホバー時にスキルのスコア値を表示するアニメーション
  $('.skill__item').hover(
    function() {
      $(this).find('img').addClass('skill__score');
    },
    function() {
      $(this).find('img').removeClass('skill__score');
    }
  );

  // 習熟度を表現するプログレスサークルのアニメーション関数
  function progressG (skillname, level, skillcolor) {
    var bar = new ProgressBar.Circle(skillname, {
      color: '#333', // スコア値の文字色
      strokeWidth: 6,
      trailWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: skillcolor, width: 6 },
      to: { color: skillcolor, width: 6 },

      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(level);  // 1〜100までを0.01〜1で指定
  }

  // プログレスサークルの初期生成
  progressG(html5, 0.8, '#F16529');
  progressG(css3, 0.68, '#3c9cd7');
  progressG(bootstrap4, 0.2, '#563D7C');
  progressG(javascript, 0.4, '#fdd83c');
  progressG(jquery, 0.45, '#0868ac');
  progressG(ruby, 0.75, '#A60003');
  progressG(rails, 0.39, '#A62C39');
  progressG(php, 0.1, '#8993BE');
  progressG(mysql, 0.32, '#5d87a1');
  progressG(git, 0.4, '#DE4C36');
  progressG(linux, 0.1, '#000');
  progressG(aws, 0.05, '#f90');
  progressG(motivation, 1, '#f00');
  progressG(slack, 0.72, '#2eb67d');

  // クリックによるプログレスサークルの再アニメーション
  $('.skill__item').click(function() {
    switch ($(this).children('.skill__progress').children('div').attr('id')) {
      case 'html5':
        $('#html5').empty();
        progressG(html5, 0.8, '#F16529');
      break;
      case 'css3':
        $('#css3').empty();
        progressG(css3, 0.68, '#3c9cd7');
      break;
      case 'bootstrap4':
        $('#bootstrap4').empty();
        progressG(bootstrap4, 0.2, '#563D7C');
      break;
      case 'javascript':
        $('#javascript').empty();
        progressG(javascript, 0.4, '#fdd83c');
      break;
      case 'jquery':
        $('#jquery').empty();
        progressG(jquery, 0.45, '#0868ac');
      break;
      case 'ruby':
        $('#ruby').empty();
        progressG(ruby, 0.75, '#A60003');
      break;
      case 'rails':
        $('#rails').empty();
        progressG(rails, 0.39, '#A62C39');
      break;
      case 'php':
        $('#php').empty();
        progressG(php, 0.1, '#8993BE');
      break;
      case 'mysql':
        $('#mysql').empty();
        progressG(mysql, 0.32, '#5d87a1');
      break;
      case 'git':
        $('#git').empty();
        progressG(git, 0.4, '#DE4C36');
      break;
      case 'linux':
        $('#linux').empty();
        progressG(linux, 0.1, '#000');
      break;
      case 'aws':
        $('#aws').empty();
        progressG(aws, 0.05, '#f90');
      break;
      case 'motivation':
        $('#motivation').empty();
        progressG(motivation, 1, '#f00');
      break;
      case 'slack':
        $('#slack').empty();
        progressG(slack, 0.72, '#2eb67d');
      break;
    }
  });

  // FAQの回答表示アニメーション
  $('.faq__item').click(function() {
    var $answer = $(this).find('.faq__answer');
    var $toggle = $(this).find('.faq__toggle');

    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $toggle.text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $toggle.text('-');
    }
  });

  // ハンバーガーメニューのアニメーション
  $('#hamburger-open').click(function() {
    $('.side-menu').css('right', '0');
    $('.side-menu__cover').css('display', 'block');
  });

  $('.hamburger-close').click(function() {
    $('.side-menu').css('right', '-70%');
    $('.side-menu__cover').css('display', 'none');
  });


});



