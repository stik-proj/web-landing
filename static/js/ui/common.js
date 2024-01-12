const teamListLeader = [
  {
    imgUrl: "/static/img/member/leader/gilbert.png",
    name: "Gilbert Gil",
    position: "CTO",
  },
  {
    imgUrl: "/static/img/member/leader/ethan.png",
    name: "Ethan Cho",
    position: "CEO",
  },
  {
    imgUrl: "/static/img/member/leader/daniel.png",
    name: "Daniel Lee",
    position: "COO",
  },
  {
    imgUrl: "/static/img/member/leader/kevin.png",
    name: "Kevin Son",
    position: "CSO",
  },
  {
    imgUrl: "/static/img/member/leader/taeho.png",
    name: "Taeho Lim",
    position: "CMO | Youtube Influencer",
    youtubeTag: ["@dantestock"],
    youtubeUrl: ["https://www.youtube.com/channel/UC6ij59Gy_HnqO4pFu9A_zgQ"],
    sub: "400K subscribers",
  },
  {
    imgUrl: "/static/img/member/leader/yongjae.png",
    name: "Yongjae Kim",
    position: "CMO | Youtube Influencer",
    youtubeTag: ["@yongjeabro", "@ap5798"],
    youtubeUrl: [
      "https://www.youtube.com/@yongjaebro",
      "https://www.youtube.com/@ap5798",
    ],
    sub: "490K subscribers",
  },
];
const teamListStrategyDesign = [
  {
    imgUrl: "/static/img/member/strategy design/Thomas Gil.png",
    name: "Thomas Gil",
    position: "PO",
  },
  {
    imgUrl: "/static/img/member/strategy design/Junyoung park.png",
    name: "Junyoung Park",
    position: "PM",
  },
  {
    imgUrl: "/static/img/member/strategy design/Hoyoung Kim.png",
    name: "Hoyoung Kim",
    position: "Planning",
  },
  {
    imgUrl: "/static/img/member/strategy design/Dawson Lee.png",
    name: "Dawson Lee",
    position: "Design",
  },
  {
    imgUrl: "/static/img/member/strategy design/Jiyun Lim.png",
    name: "Jiyun Lim",
    position: "Design",
  },
  {
    imgUrl: "/static/img/member/strategy design/Jieun Lee.png",
    name: "Jieun Lee",
    position: "Design",
  },
  {
    imgUrl: "/static/img/member/strategy design/Yisoo Kim.png",
    name: "Yisoo Kim",
    position: "Design",
  },
  {
    imgUrl: "/static/img/member/strategy design/Kaya Cheon.png",
    name: "Kaya Cheon",
    position: "Design",
  },
  {
    imgUrl: "/static/img/member/strategy design/Kyunghoon Yeom.png",
    name: "Kyunghoon Yeom",
    position: "Marketing",
  },
  {
    imgUrl: "/static/img/member/strategy design/Jeongyeon Moon.png",
    name: "Jeongyeon Moon",
    position: "Marketing",
  },
  {
    imgUrl: "/static/img/member/strategy design/Eunyoung Song.png",
    name: "Eunyoung Song",
    position: "QA/QC",
  },
  {
    imgUrl: "/static/img/member/strategy design/Youngjun Park.png",
    name: "Youngjun Park",
    position: "GM",
  },
  {
    imgUrl: "/static/img/member/strategy design/Jinhong Sung.png",
    name: "Jinhong Sung",
    position: "Strategy",
  },
  {
    imgUrl: "/static/img/member/strategy design/Byungryeol Min.png",
    name: "Byungryeol Min",
    position: "People",
  },
  {
    imgUrl: "/static/img/member/strategy design/Kitae Kwon.png",
    name: "Kitae Kwon",
    position: "Accountancy",
  },
  {
    imgUrl: "/static/img/member/strategy design/Hyeonseok Cho.png",
    name: "Hyeonseok Cho",
    position: "Cooperation",
  },
];
const teamListDevelopment = [
  {
    imgUrl: "/static/img/member/tech development/Scott Jeong.png",
    name: "Scott Jeong",
    position: "DEV Lead",
  },
  {
    imgUrl: "/static/img/member/tech development/Youngsoo Won.png",
    name: "Youngsoo Won",
    position: "DEV Lead",
  },
  {
    imgUrl: "/static/img/member/tech development/Dean Kang.png",
    name: "Dean Kang",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Juan Park.png",
    name: "Juan Park",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Buddy Hwang.png",
    name: "Buddy Hwang",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Robert Baik.png",
    name: "Robert Baik",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Samuel Kim.png",
    name: "Samuel Kim",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Russell Ahn.png",
    name: "Russell Ahn",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Haemil Cho.png",
    name: "Haemil Cho",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Eunsun Kim.png",
    name: "Eunsun Kim",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Jay Shin.png",
    name: "Jay Shin",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Jinho Lee.png",
    name: "Jinho Lee",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Sunghwi Hong.png",
    name: "Sunghwi Hong",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Young Jang.png",
    name: "Young Jang",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Bokyun kim.png",
    name: "Bokyun kim",
    position: "Development",
  },
  {
    imgUrl: "/static/img/member/tech development/Liam Lee.png",
    name: "Liam Lee",
    position: "Development",
  },
];
$.fn.memberInfoInput = function (memberlist) {
  memberlist.forEach((member, index) => {
    let youUrl = [];
    let memberUrl;
    if (member.youtubeUrl) {
      youUrl = member.youtubeUrl;
      // youUrl.forEach((url) => {
      //   memberUrl = url;
      //   console.log(memberUrl);
      // });
    }
    let youTag = [];
    let memberTag;
    if (member.youtubeTag) {
      youTag = member.youtubeTag;
      youTag.forEach((tag) => {
        memberTag = tag;
        console.log(memberTag);
      });
    }
    $(this).append(`
    <li class="team_member" >
      <img class="team_img" src="${member.imgUrl}" alt="">
      <p class="team_name">${member.name}</p>
      <p class="team_position">${member.position}</p>
    </li>`);
  });
  if (memberlist.desc) {
  }
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
      "._btnStaikaAppDownload",
      $.proxy(this._moveStaikaDownloadAppPage, this)
    );
    this.welDoc.on(
      "click",
      "._btnGazagoAppDownload",
      $.proxy(this._moveGazagoDownloadAppPage, this)
    );
    this.welDoc.on(
      "click",
      ".gnb li a",
      $.proxy(this._closeMobileGnbMenu, this)
    );
    this.welDoc.on("click", ".gnb li a", $.proxy(this._initTeamScroll, this));
    this.welDoc.on(
      "click",
      "._closeMobileGnbMenu",
      $.proxy(this._closeMobileGnbMenu, this)
    );
    this.welDoc.on(
      "click",
      ".teamNav ul li",
      $.proxy(this._onClickScrollMove, this)
    );
  },
  _onScrollEvent: function () {
    // $(".section06").on("mousewheel", function (e, a) {
    //   console.log(e);
    // });
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
  _moveStaikaDownloadAppPage: function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      window.open("https://apps.apple.com/us/app/staika/id1629354285");
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=kr.co.eztechfin.staika_app"
      );
    }
  },
  _moveGazagoDownloadAppPage: function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      window.open("https://testflight.apple.com/join/yNZhHo9Z");
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=kr.co.eztechfin.gazaGo"
      );
    }
  },
  _initTeamScroll: function (e) {
    const insTeam =
      $.fn.fp_scrolloverflow.iscrollHandler.iScrollInstances.filter((item) =>
        item.wrapper.innerText.includes("Team")
      );
    const insRoadmap =
      $.fn.fp_scrolloverflow.iscrollHandler.iScrollInstances.filter((item) =>
        item.wrapper.innerText.includes("Roadmap")
      );
    const insExperience =
      $.fn.fp_scrolloverflow.iscrollHandler.iScrollInstances.filter((item) =>
        item.wrapper.innerText.includes("Experience")
      );

    if (e.currentTarget.innerText === "Roadmap") {
      insRoadmap[0].scrollTo(0, 0);
    }
    insTeam[0].scrollTo(0, 0);
    if (e.currentTarget.innerText === "Experience") {
      insExperience[0].scrollTo(0, 0);
    }
  },
  _toggleTranslatebox: function (e) {
    const target = $(e.currentTarget);
    target.parent(".translate").toggleClass("show");
  },
  _openMobileGnbMenu: function () {
    $(".gnb").addClass("show");
  },
  _closeMobileGnbMenu: function () {
    $(".gnb").removeClass("show");
  },
  _onClickScrollMove: function (e) {
    const target = $(e.currentTarget).data("target");
    const elTeam = $("#" + target);

    const ins = $.fn.fp_scrolloverflow.iscrollHandler.iScrollInstances.filter(
      (item) => item.wrapper.innerText.includes("Team")
    );

    // $(".teamNav li").addClass("current").siblings().removeClass("current");

    if ($(window).innerWidth() < 1024) {
      if (target === "team01") {
        ins[0].scrollTo(0, -elTeam.position().top);
      } else {
        ins[0].scrollTo(0, -elTeam.position().top + $(".header").outerHeight());
      }
    } else {
      ins[0].scrollTo(0, -elTeam.position().top);
    }
  },
  initFullpage: function () {
    let needToMoveToStaika = window.location.search.includes("staikaApp");
    const scrollPosition =
      $("#StaikaApp").outerHeight() - $("#section5").outerHeight();

    $("#fullpage").fullpage({
      sectionsColor: [
        "",
        "#fff",
        "#fff",
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
        "8thPage",
        "lastPage",
      ],
      menu: "#menu",
      // autoScrolling: false,
      slidesNavigation: true,
      slidesToSections: false,
      bigSectionsDestination: "top",
      // normalScrollEvent: "#section6",
      scrollingSpeed: 1000,
      scrollOverflow: true,
      scrollOverflowReset: false,
      css3: true,
      // normalScrollElements: ".section06",
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

        if (needToMoveToStaika && index === 2) {
          const ins = $.fn.fp_scrolloverflow.iscrollHandler.iScrollInstances;
          ins[0].scrollTo(0, scrollPosition);
          needToMoveToStaika = false;
        }
      },
    });

    if (needToMoveToStaika) {
      $.fn.fullpage.moveTo(2);
    }
  },
  _ready: function () {
    var self = this;
    $(document).ready(function () {
      self.initFullpage();
    });
    $(".section03 .grid").masonry({
      itemSelector: ".grid-item",
    });
    $(".slider").slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplaySpeed: 500,
      speed: 1000,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
    // $(".teamListLeader").memberInfoInput(teamListLeader);
    $(".teamListStrategyDesign").memberInfoInput(teamListStrategyDesign);
    $(".teamListDevelopment").memberInfoInput(teamListDevelopment);
    // $(".teamListMarketingPeople").memberInfoInput(teamListMarketingPeople);
  },
};
var uiCommon = new ui.page.common();
