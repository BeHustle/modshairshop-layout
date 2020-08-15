'use strict';

svg4everybody();

//установка маски для телефонов
$('.phone_mask').mask('+7(999)999-99-99');
////

//отрисовка полосы среднего рейтинга у товаров
var reviewRateElements = document.querySelectorAll('.reviews__rate');
var setRateWidth = function () {
  if (reviewRateElements) {
    reviewRateElements.forEach(function (item) {
      var intRate = parseInt(item.textContent);
      var floorRate = parseFloat(item.textContent);
      var moduleRate = floorRate - intRate;
      var rateLineElements = item.parentElement.parentElement.querySelectorAll('.stars__line');

      for (var i = 0; i < intRate; i++) {
        rateLineElements[i].style.width = '100%';
      }

      if (moduleRate !== 0) {
        rateLineElements[intRate].style.width = parseInt(moduleRate * 100) + '%';
      }
    });
  }
};

setRateWidth();
///

//отрисовка полосы ухаживающего эффекта у товаров
var effectContainerElement = document.querySelector('.main-product__effect');
var effectFullTemplate = document.querySelector('#effect-full');
var effectEmptyTemplate = document.querySelector('#effect-empty');
var effectCountElement = document.querySelector('.main-product__effect-count');

var setEffect = function () {
  if (effectContainerElement && effectFullTemplate && effectEmptyTemplate) {
    effectFullTemplate = effectFullTemplate.content;
    effectEmptyTemplate = effectEmptyTemplate.content;
    var count = parseInt(effectCountElement.textContent);
    for (var i = 0; i < count; i++) {
      var fullElement = effectFullTemplate.cloneNode(true);
      effectContainerElement.appendChild(fullElement);
    }
    for (var k = count; k < 10; k++) {
      var emptyElement = effectEmptyTemplate.cloneNode(true);
      effectContainerElement.appendChild(emptyElement);
    }
  }
};

setEffect();
////


//открытие и закрытие мобильного меню
$('.burger-btn').click(function (evt) {
  evt.preventDefault();
  $('.burger-btn').toggleClass('open');
  $('.main-nav').toggleClass('main-nav--hidden');
});
////


//открытие и закрытие меню категорий на планшете и мобильном
$('#toggle-category').click(function (evt) {
  evt.preventDefault();
  $('.page-header__categories').toggleClass('page-header__categories--show');
  $('.main-nav__down-svg').toggleClass('main-nav__down-svg--rotate');
});
////


//карусель отзывов
$('.reviews__container').each(function () {
  var owl = $(this).find('.reviews__list').owlCarousel({
    items: 1,
    loop: true,
  });

  $(this).find('.reviews__btn--prev').on('click', function () {
    owl.trigger('prev.owl.carousel');
  });

  $(this).find('.reviews__btn--next').on('click', function () {
    owl.trigger('next.owl.carousel');
  });
});
//


//открытие и закрытие общего меню фильтров на планшете и мобильном
$('.filter__fake-link').click(function (evt) {
  evt.preventDefault();
  $(this).parent().toggleClass('filter__item--show');
});
////


//открытие и закрытие фильтра на мобильном
$('.filter__toggle-mobile').click(function (evt) {
  evt.preventDefault();
  $('.filter__toggle-mobile').toggleClass('filter__toggle-mobile--show');
  $('.filter').toggleClass('filter--show');
});
////

//слайдер цены. Привязываем ajax к change
$('.filter__price-slider').slider({
  min: parseInt($('#price-min').text()),
  max: parseInt($('#price-max').text()),
  values: [parseInt($('#price-min').text()), parseInt($('#price-max').text())],
  range: true,
  animate: true,
  change: function (evt, ui) {
    const [min, max] = ui.values;
    $('#price-min-input').val(min);
    $('#price-max-input').val(max);
  }
});
////


//попапы
var openModal = function(evt, modalId, overlayClass = '.overlay') {
  evt.preventDefault();
  $(modalId).removeClass('d-none');
  $(overlayClass).removeClass('d-none');
};

var closeModal = function(evt, modalClass = '.modal', overlayClass = '.overlay') {
  evt.preventDefault();
  $(modalClass).addClass('d-none');
  $(overlayClass).addClass('d-none');
};

$('.cabinet-popup-open').click(function (evt) {
  openModal(evt, '#account-modal');
});

$('.privacy-popup-open').click(function (evt) {
  openModal(evt, '#privacy-modal');
});

$('.modal__close').click(function (evt) {
  closeModal(evt);
});

$('.overlay').click(function (evt) {
  closeModal(evt);
});
////

//открытие и закрытие аккордионов в личном кабинете
//основной
$('.account__accordion').click(function (evt) {
  evt.preventDefault();
  $(this).parent().toggleClass('account__item--show')
});
//заказы
$('.account__order-accordion').click(function (evt) {
  evt.preventDefault();
  $(this).parent().toggleClass('account__order--show')
});
////
