//滑動離開頂部時就取消at_top的class
$(window).scroll(function (e) {
  if ($(window).scrollTop() <= 0)
  $(".navbar,.explore").addClass("at_top");else

  $(".navbar,.explore").removeClass("at_top");
});

//緩慢滑動
$(document).on('click', 'a', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top },
  500);
});

//更新一些移動景物的位置


//vue監看物件
var vm_c = new Vue({
  el: "#card_list",
  data: {
    works: [{
      dy: "唐",
      img: "https://imgur.com/55xjwzC.png",
      des: "北方民族南遷與胡漢融合 ，一種流行於北周至初唐乃至於後代遼國的「蹀躞帶」形式出現，因為其淵源與本次策展中心的滿人腰帶頗有相似之處。在唐初也曾將被稱為「蹀躞七事」的物件佩飾劃入官服。《舊唐書· 輿服志》: 「武官五品以上佩蹀躞七事 , 七事謂佩刀、 刀子、 礪石、 契芯真、 噦厥、 針筒、 火石袋。至開元初罷之。 」" },

    {
      dy: "明",
      img: "https://imgur.com/qgDsn8Q.png",
      des: "除了官服補子象徵地位外，革帶上鑲綴材質也可分辨地位高低。在懸掛物上，內臣出入宮門所需牙牌、烏木牌與從蹀躞七事等演變而來的金七事、四事、三事等具備多種功能的隨身物件也被佩戴在腰帶上" },


    {
      dy: "清",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/62/%E6%B8%85_%E4%BD%9A%E5%90%8D_%E3%80%8A%E6%B8%85%E5%9C%A3%E7%A5%96%E5%BA%B7%E7%86%99%E7%9A%87%E5%B8%9D%E6%9C%9D%E6%9C%8D%E5%83%8F%E3%80%8B.jpg",
      des: "清代的腰帶包含朝帶、吉服帶、常服帶、行帶、忠孝帶等等多種形制，而腰帶上所佩戴之物更是琳瑯滿目、多不勝數。從被清宮稱為「活計」的織繡物件包含扇套、表套、扳指套、眼鏡盒、荷包、褡褳、煙荷包等等到火鐮盒、鞘刀、牙籤筒等物件，佩戴在腰帶上的物件種類相當繁多。" }] } });







// gif 物件
var vm_g = new Vue({
  el: "#life_list",
  data: {
    works: [{
      activity: "扳指",
      img: "https://imgur.com/JowsIf0.png",
      gif: "https://imgur.com/qoLGhqE.gif",
      show: "https://imgur.com/JowsIf0.png",
      url: "#section_works" },

    {
      activity: "火鐮",
      img: "https://imgur.com/B7PfWJ2.png",
      gif: "https://imgur.com/mgQFWpq.gif",
      show: "https://imgur.com/B7PfWJ2.png",
      url: "#fire" },


    {
      activity: "荷包",
      img: "https://imgur.com/hpadE4w.png",
      gif: "https://imgur.com/n0dWnfx.gif",
      show: "https://imgur.com/hpadE4w.png",
      url: "#pack" },

    {
      activity: "牙籤筒",
      img: "https://imgur.com/CKgzGZ5.png",
      gif: "https://imgur.com/xFMRsOo.gif",
      show: "https://imgur.com/CKgzGZ5.png",
      urrl: "#teeth" }] },




  methods: {
    mouseover: function (ev, i) {
      console.log(ev); // this is the event
      console.log(i); // i is index of v-for
      i.show = i.gif;
    },
    mouseleave: function (ev, i) {
      console.log(ev); // this is the event
      console.log(i); // i is index of v-for

      i.show = i.img;
    } } });