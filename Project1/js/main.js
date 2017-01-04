// window.onload = function() {
//   alert("hello!");
// }
var data = {
  "items" : [
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Dzungggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
      "posterName"    : "Sannnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Tranggggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
      "posterName"    : "Ngannnnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/1.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Dzungggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/3.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/2.png",
      "posterName"    : "Sannnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/2.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/1.png",
      "posterName"    : "Tranggggg",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    },
    {
      "imageUrl"      : "http://www.vatcss.info/TechKidsGirls/4.png",
      "view"          : 857,
      "date"          : "07/05/12",
      "plus"          : 588,
      "posterAvatar"  : "http://www.vatcss.info/TechKidsGirls/3.png",
      "posterName"    : "Ngannnnn",
      "posterTitle"   : "HRC Photo",
      "content"       : "Lorem ipsum dolor sit amet, te possim inimicus ius. Alii ullam at corper pri ad, per nulla luptatum te, in qui delenit nostrum. Nam ad labores."
    }
  ]
}

$(document).ready(function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  $.ajax({
    type: "get",
    url : "imagesData.json"
  }).then(function(data){
    var html = template(data);
    $('#item-list').html(html);
    $('#item-list').masonry({
      itemSelector: ".item_container",
      columnWidth: ".item_container",
      percentPosition: true
    })
  }).fail(function(error) {
    console.log("Error : ");
    console.log(error);
  });

})
