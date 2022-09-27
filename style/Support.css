var menu = new Vue({
  el: "#board",
  data: {
    imgArry: [
      "../image/index-img/1.png",
      "../image/index-img/2.png",
      "../image/index-img/3.png",
      "../image/index-img/4.png",
    ],
    index: 0,
  },
  methods: {
    prev: function () {
      if (this.index != 0) {
        this.index--;
      } else {
        this.index = this.imgArry.length - 1;
      }
    },
    next: function () {
      if (this.index != this.imgArry.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    openHref: function () {
      console.log("3212131");
      switch (this.index) {
        case 0:
          window.open("./html/Introduction.html");
          break;
        case 1:
          window.open("https://space.bilibili.com/176491860");
          break;
        case 2:
          window.open("./html/Light software.html");
          break;
        case 3:
          window.open("./html/Support.html");
          break;
      }
    },
  },
});
