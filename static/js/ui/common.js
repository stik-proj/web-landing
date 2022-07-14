var ui = ui || {};
ui.page = ui.page || {};
ui.page.common = function () {
  this.init();
};
ui.page.common.prototype = {
  init: function () {
    this._assignElements();
    this._attachEventHandlers();
    this._ready();
  },
  _assignElements: function () {
    this.welDoc = $(document.body);
    this.welWin = $(window);
    this.welDoc.on(
      "click",
      'a[href="#"]',
      $.proxy(this._onClickEventPrevent, this)
    );
    this.welDoc.on(
      "click",
      "._toggleTranslateMenu",
      $.proxy(this._toggleTranslatebox, this)
    );
    this.welDoc.on(
      "click",
      "._openMobileGnbMenu",
      $.proxy(this._openMobileGnbMenu, this)
    );
    this.welDoc.on(
      "click",
      ".gnb li a",
      $.proxy(this._closeMobileGnbMenu, this)
    );
    this.welDoc.on(
      "click",
      "._closeMobileGnbMenu",
      $.proxy(this._closeMobileGnbMenu, this)
    );
  },
  _onClickEventPrevent: function (event) {
    event.preventDefault();
  },
  _attachEventHandlers: function () {
    this.welDoc.on(
      "click",
      'a[href="#"]',
      $.proxy(this._onClickEventPrevent, this)
    );
  },
  _toggleTranslatebox: function (e) {
    const target = $(e.currentTarget);
    target.parent(".translate").toggleClass("show");
    console.log(target);
  },
  _openMobileGnbMenu: function () {
    $(".gnb").addClass("show");
  },
  _closeMobileGnbMenu: function () {
    $(".gnb").removeClass("show");
  },

  _ready: function () {
    $(document).ready(function () {
      $("#fullpage").fullpage({
        sectionsColor: [
          "",
          "#000",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
        ],
        anchors: [
          "firstPage",
          "secondPage",
          "3rdPage",
          "4thpage",
          "5thPage",
          "6thPage",
          "lastPage",
        ],
        menu: "#menu",
        slidesNavigation: true,
        slidesToSections: true,
        bigSectionsDestination: top,

        scrollingSpeed: 1000,

        scrollOverflow: true,
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
          console.log(
            "afterSlideLoad--" +
              "anchorLink: " +
              anchorLink +
              " index: " +
              index +
              " slideAnchor: " +
              slideAnchor +
              " slideIndex: " +
              slideIndex
          );
          console.log("----------------");
        },
        afterLoad: function (anchorLink, index) {
          if (index !== 1) {
            $("body").addClass("active-container");
          } else {
            $("body").removeClass("active-container");
          }
        },
      });
    });
    $(".section03 .grid").masonry({
      itemSelector: ".grid-item",
    });
    $(".section05 .grid").masonry({
      itemSelector: ".grid-item",
      isFitWidth: true,
    });
  },
};
var uiCommon = new ui.page.common();
