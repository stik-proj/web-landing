const teamListLeader = [
  {
    imgUrl: "./static/img/member/leader/gilbert.png",
    name: "Gilbert",
    position: "CTO",
  },
  {
    imgUrl: "./static/img/member/leader/ethan.png",
    name: "Ethan Cho",
    position: "CEO",
  },
  {
    imgUrl: "./static/img/member/leader/daniel.png",
    name: "Daniel Lee",
    position: "COO",
  },
  {
    imgUrl: "./static/img/member/leader/kevin.png",
    name: "Kevin Son",
    position: "CSO",
  },
];
const teamListStrategic = [
  {
    imgUrl: "./static/img/member/strategic/jinhong.png",
    name: "Jinhong Sung",
    position: "Planning",
  },
  {
    imgUrl: "./static/img/member/strategic/kitae.png",
    name: "Kitae Kwon",
    position: "Planning",
  },
  {
    imgUrl: "./static/img/member/strategic/jinho.png",
    name: "Jinho Lee",
    position: "Development",
  },
  {
    imgUrl: "./static/img/member/strategic/youngsoo.png",
    name: "Youngsoo Won",
    position: "Development",
  },
  {
    imgUrl: "./static/img/member/strategic/jaehyo.png",
    name: "Jaehyo Lim",
    position: "Development",
  },
  {
    imgUrl: "./static/img/member/strategic/suyoung.png",
    name: "Suyoung Kim",
    position: "Development",
  },
  {
    imgUrl: "./static/img/member/strategic/hanwool.png",
    name: "Hanwool Lee",
    position: "Development",
  },
  {
    imgUrl: "./static/img/member/strategic/sunghwi.png",
    name: "Sunghwi Hong",
    position: "Development",
  },
  {
    imgUrl: "./static/img/member/strategic/onyu.png",
    name: "onyu Jeong",
    position: "Development",
  },
];
const teamListBlockChain = [
  {
    imgUrl: "./static/img/member/blockchain/scott.png",
    name: "Scott Jeong",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/samuel.png",
    name: "Samuel Kim",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/dean.png",
    name: "Dean Kang",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/juan.png",
    name: "Juan Park",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/haemil.png",
    name: "Haemil Cho",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/jay.png",
    name: "Jay Shin",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/eunsun.png",
    name: "Eunsun Kim",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/buddy.png",
    name: "Buddy Hwang",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/robert.png",
    name: "Robert Baik",
    position: "Tech LAB",
  },
  {
    imgUrl: "./static/img/member/blockchain/urika.png",
    name: "Urika Jeon",
    position: "Planning",
  },
  {
    imgUrl: "./static/img/member/blockchain/sia.png",
    name: "Sia Park",
    position: "Design",
  },
  {
    imgUrl: "./static/img/member/blockchain/kaya.png",
    name: "Kaya Cheon",
    position: "Design",
  },
];
const teamListMarketingPeople = [
  {
    imgUrl: "./static/img/member/marketingPeople/hyeonseok.png",
    name: "Hyeonseok Cho",
    position: "Marketing",
  },
  {
    imgUrl: "./static/img/member/marketingPeople/kyunghoon.png",
    name: "Kyunghoon Yeom",
    position: "Marketing",
  },
  {
    imgUrl: "./static/img/member/marketingPeople/byungryeol.png",
    name: "Byungryeol Min",
    position: "People",
  },
];

$.fn.memberInfoInput = function (memberlist) {
  memberlist.forEach((member) => {
    $(this).append(`
    <li class="team_member" >
      <img class="team_img" src="${member.imgUrl}" alt="">
      <p class="team_name">${member.name}</p>
      <p class="team_position">${member.position}</p>
    </li>`);
  });
};
var ui = ui || {};
ui.page = ui.page || {};
ui.page.common = function () {
  this.init();
};
ui.page.common.prototype = {
  init: function () {
    this._assignElements();
    this._attachEventHandlers();
    this._onScrollEvent();
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
    this.welDoc.on(
      "click",
      "._onClickScrollMove",
      $.proxy(this._onClickScrollMove, this)
    );
  },
  _onScrollEvent: function () {
    $(window).scroll(function () {
      console.log("a");
    });
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
  _onClickScrollMove: function (e) {
    const target = $(e.currentTarget).data("team");
    const elTeam = $("#" + target);

    // $("html").bind("mousewheel DOMMouseScroll", function (e) {
    //   $("html,body").animate({ scrollTop: elTeam.offset().top });
    // });
    console.log(target);
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
          "#fff",
        ],
        anchors: [
          "firstPage",
          "secondPage",
          "3rdPage",
          "4thpage",
          "5thPage",
          "6thPage",
          "7thPage",
          "lastPage",
        ],
        menu: "#menu",
        slidesNavigation: true,
        slidesToSections: true,
        bigSectionsDestination: top,

        scrollingSpeed: 1000,
        scrollOverflow: true,
        onScrollOverflow: function (section, slide, position, direction) {
          console.log(section, slide, position, direction);
        },
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
    // $(".section05 .grid").masonry({
    //   itemSelector: ".grid-item",
    //   isFitWidth: true,
    // });
    // $(".section07 .grid").masonry({
    //   itemSelector: ".grid-item",
    // });
    $(document).ready(function () {
      console.log($("#section6"));
      $("#section6").scroll(function () {
        console.log("a");
      });
      // $("#member").fullpage({
      //   sectionsColor: ["", "#fff", "#fff", "#fff", "#fff"],
      //   anchors: ["firstTeam", "secondTeam", "3thTeam", "4thTeam"],
      //   menu: "#teamMenu",
      //   slidesNavigation: true,
      //   slidesToSections: true,
      //   bigSectionsDestination: top,
      //   scrollingSpeed: 1000,
      //   scrollOverflow: true,
      //   afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      //     console.log(
      //       "afterSlideLoad--" +
      //         "anchorLink: " +
      //         anchorLink +
      //         " index: " +
      //         index +
      //         " slideAnchor: " +
      //         slideAnchor +
      //         " slideIndex: " +
      //         slideIndex
      //     );
      //     console.log("----------------");
      //   },
      //   afterLoad: function (anchorLink, index) {
      //     if (index !== 1) {
      //       $("body").addClass("active-container");
      //     } else {
      //       $("body").removeClass("active-container");
      //     }
      //   },
      // });
    });
    $("#teamListLeader").memberInfoInput(teamListLeader);
    $("#teamListStrategic").memberInfoInput(teamListStrategic);
    $("#teamListBlockChain").memberInfoInput(teamListBlockChain);
    $("#teamListMarketingPeople").memberInfoInput(teamListMarketingPeople);
  },
};
var uiCommon = new ui.page.common();
