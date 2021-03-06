import Ember from 'ember';
import layout from '../templates/components/slick-slider';

export default Ember.Component.extend({
  layout: layout,
  accessibility: true,
  adaptativeHeight: true,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  asNavFor: null,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-prev">Next</button>',
  centerMode: false,
  centerPadding: '50px',
  cssEase: 'ease',
  dots: false,
  draggable: true,
  fade: false,
  focusOnSelect: false,
  easing: 'linear',
  edgeFriction: 0.15,
  infinite: true,
  initialSlide: 0,
  lazyLoad: 'ondemand',
  mobileFirst: false,
  pauseOnHover: true,
  pauseOnDotsHover: false,
  respondTo: 'window',
  responsive: [],
  rows: 1,
  slide: '',
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCss: true,
  variableWidth: false,
  vertical: false,
  verticalSwiping: false,
  rtl: false,

  _initializeSlick: Ember.on('didInsertElement', function() {
    var _this = this;

    return this.$().slick({   
      accessibility    : this.get('accessibility'),
      adaptativeHeight : this.get('adaptativeHeight'),
      autoplay         : this.get('autoplay'),
      autoplaySpeed    : this.get('autoplaySpeed'),
      arrows           : this.get('arrows'),
      asNavFor         : this.get('asNavFor'),
      appendArrows     : this.get('appendArrows'),
      prevArrow        : this.get('prevArrow'),
      nextArrow        : this.get('nextArrow'),
      centerMode       : this.get('centerMode'),
      centerPadding    : this.get('centerPadding'),
      cssEase          : this.get('cssEase'),
      customPaging     : this.get('customPaging'),
      dots             : this.get('dots'),
      draggable        : this.get('draggable'),
      fade             : this.get('fade'),
      focusOnSelect    : this.get('focusOnSelect'),
      easing           : this.get('easing'),
      edgeFriction     : this.get('edgeFriction'),
      infinite         : this.get('infinite'),
      initialSlide     : this.get('initialSlide'),
      lazyLoad         : this.get('lazyLoad'),
      mobileFirst      : this.get('mobileFirst'),
      pauseOnHover     : this.get('pauseOnHover'),
      pauseOnDotsHover : this.get('pauseOnDotsHover'),
      respondTo        : this.get('respondTo'),
      responsive       : this.get('responsive'),
      rows             : this.get('rows'),
      slide            : this.get('slide'),
      slidesPerRow     : this.get('slidesPerRow'),
      slidesToShow     : this.get('slidesToShow'),
      slidesToScroll   : this.get('slidesToScroll'),
      speed            : this.get('speed'),
      swipe            : this.get('swipe'),
      swipeToSlide     : this.get('swipeToSlide'),
      touchMove        : this.get('touchMove'),
      touchThreshold   : this.get('touchThreshold'),
      useCss           : this.get('useCss'),
      variableWidth    : this.get('variableWidth'),
      vertical         : this.get('vertical'),
      verticalSwiping  : this.get('verticalSwiping'),
      rtl              : this.get('rtl')
    })
    .on('afterChange', function (slick, currentSlide) {
      _this.sendAction('afterChange', slick, currentSlide);
    })
    .on('beforeChange', function (slick, currentSlide, nextSlide) {
      _this.sendAction('beforeChange', slick, currentSlide, nextSlide);
    })
    .on('edge', function (slick, direction) {
      _this.sendAction('edge', slick, direction);
    })
    .on('reInit', function (slick) {
      _this.sendAction('reInit', slick);
    })
    .on('setPosition', function (slick) {
      _this.sendAction('setPosition', slick);
    })
    .on('swipe', function (slick, direction) {
      _this.sendAction('swipe', slick, direction);
    });
  })
});
