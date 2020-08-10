var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container-block1");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

$("#draggable" + slideIndex).draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#draggable2").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});
$("#draggable3").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});
$("#draggable4").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#draggable5").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#droppable" + slideIndex).droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Normal-03.svg"
    );
    $(".box1").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable2").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Long%20Sleeve-03.svg"
    );
    $("#active_d_2").removeClass("active_2").addClass("active_1");
    $("#active_d_2_m").removeClass("active_2").addClass("active_1");
    $(".box2").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable3").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_ffp2-03.svg"
    );
    $("#active_d_3").removeClass("active_2").addClass("active_1");
    $("#active_d_3_m").removeClass("active_2").addClass("active_1");
    $(".box3").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable4").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Face%20shield-03.svg"
    );
    $("#active_d_4").removeClass("active_2").addClass("active_1");
    $("#active_d_4_m").removeClass("active_2").addClass("active_1");
    $(".box4").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});

$("#droppable5").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Balaji%20Precautions-03.svg"
    );
    $("#active_d_5").removeClass("active_2").addClass("active_1");
    $("#active_d_5_m").removeClass("active_2").addClass("active_1");
    $(".box4").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});

$(document).ready(function () {
  var divs = $(".mydivs>.d_d_div");
  var now = 0; // currently shown div
  divs.hide().first().show(); // hide all divs except first
  $("button[name=next]").click(function () {
    divs.eq(now).hide();
    now = now + 1 < divs.length ? now + 1 : 0;
    divs.eq(now).show(); // show next
  });
  $("button[name=prev]").click(function () {
    divs.eq(now).hide();
    now = now > 0 ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
  });
});
var dropped = false;
$("#drag").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag");
    target.style.width = "35%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img").attr(
      "src",
      "assets/img/Airbone_Character/After/Character_Face%20shield-03.svg"
    );
    document.getElementById("drag_img").style.display = "block";
  },
  stop: function (event) {
    if (!dropped) {
      var target = document.getElementById("drag");
      target.style.opacity = 0;
      $("#drag_img").attr(
        "src",
        "assets/img/Airbone_Character/After/Balaji%20Precautions-03.svg"
      );
    }
  },
});
$("#drag").draggable({
  cursor: "move",
  cursorAt: { width: "50%", height: "50%" },
  helper: function (event) {
    return $("#drag").attr("src", "assets/img/Assets/Gloves.svg");
  },
});
$("#drop").droppable({
  drop: function (event, ui) {
    $("#drop").html('<img src="assets/img/Assets/Gloves.svg">');
    $("#drag").hide();
    $("#active_r_1").removeClass("active_2").addClass("active_1");
    $("#active_r_1_m").removeClass("active_2").addClass("active_1");
    dropped = true;
    var target = document.getElementById("drop");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex").style.display = "block";
    document.getElementById("drop_drag_next_con").style.display = "block";
  },
});
var dropped1 = false;
$("#drag_1").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_1");
    target.style.width = "25%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_1").attr(
      "src",
      "assets/img/Airbone_Character/After/Character_F%20M-03.svg"
    );
    document.getElementById("drag_img_1").style.display = "block";
  },
  stop: function (event) {
    if (!dropped1) {
      var target = document.getElementById("drag_1");
      target.style.opacity = 0;
      $("#drag_img_1").attr(
        "src",
        "assets/img/Airbone_Character/After/Character_Face%20shield-03.svg"
      );
    }
  },
});
$("#drag_1").draggable({
  cursor: "move",
  cursorAt: { width: "50%", height: "50%" },
  helper: function (event) {
    return $("#drag_1").attr("src", "  assets/img/assets/apron.svg");
  },
});
$("#drop_1").droppable({
  drop: function (event, ui) {
    $("#drop_1").html('<img src="  assets/img/assets/apron.svg">');
    $("#drag_1").hide();
    $("#active_r_2").removeClass("active_2").addClass("active_1");
    $("#active_r_2_m").removeClass("active_2").addClass("active_1");
    dropped1 = true;
    var target = document.getElementById("drop_1");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_1").style.display = "block";
    document.getElementById("drop_drag_next_con_1").style.display = "block";
  },
});
var dropped2 = false;
$("#drag_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_2");
    target.style.width = "30%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_2").attr(
      "src",
      "assets/img/Droplet_Character/After/Character_Mask-03.svg"
    );
    document.getElementById("drag_img_2").style.display = "block";
  },
  stop: function (event) {
    if (!dropped2) {
      var target = document.getElementById("drag_2");
      target.style.opacity = 0;
      $("#drag_img_2").attr(
        "src",
        "assets/img/Droplet_Character/After/Character_Mask-03.svg"
      );
    }
  },
});
$("#drag_2").draggable({
  cursor: "move",
  cursorAt: { width: "50%", height: "50%" },
  helper: function (event) {
    return $("#drag_2").attr("src", "assets/img/Assets/Sanitizer.svg");
  },
});
$("#drop_2").droppable({
  drop: function (event, ui) {
    $("#drop_2").html('<img src="assets/img/Assets/Sanitizer.svg">');
    $("#drag_2").hide();
    dropped2 = true;
    var target = document.getElementById("drop_2");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_2").style.display = "block";
    document.getElementById("drop_drag_next_con_2").style.display = "block";
  },
});
var dropped3 = false;
$("#drag_3").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_3");
    target.style.width = "30%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_3").attr(
      "src",
      "assets/img/Airbone_Character/After/Character_Normal-03.svg"
    );
    document.getElementById("drag_img_3").style.display = "block";
  },
  stop: function (event) {
    if (!dropped3) {
      var target = document.getElementById("drag_3");
      target.style.opacity = 0;
      $("#drag_img_3").attr(
        "src",
        "assets/img/Airbone_Character/After/Character_F%20M-03.svg"
      );
    }
  },
});
$("#drag_3").draggable({
  cursor: "move",
  cursorAt: { width: "50%", height: "50%" },
  helper: function (event) {
    return $("#drag_3").attr("src", "assets/img/Assets/Face shield & Mask.svg");
  },
});
$("#drop_3").droppable({
  drop: function (event, ui) {
    $("#drop_3").html('<img src="assets/img/Assets/Face shield & Mask.svg">');
    $("#drag_3").hide();
    $("#active_r_4").removeClass("active_2").addClass("active_1");
    $("#active_r_4_m").removeClass("active_2").addClass("active_1");
    dropped3 = true;
    var target = document.getElementById("drop_3");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_3").style.display = "block";
    document.getElementById("drop_drag_next_con_3").style.display = "block";
  },
});
var dropped4 = false;
$("#drag_4").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_4");
    target.style.width = "30%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_4").attr(
      "src",
      "assets/img/Airbone_Character/After/Character_Normal-03.svg"
    );
    document.getElementById("drag_img_4").style.display = "block";
  },
  stop: function (event) {
    if (!dropped4) {
      var target = document.getElementById("drag_4");
      target.style.opacity = 0;
      $("#drag_img_4").attr(
        "src",
        "assets/img/Airbone_Character/After/Character_Normal-03.svg"
      );
    }
  },
});
$("#drag_4").draggable({
  cursor: "move",
  cursorAt: { width: "50%", height: "50%" },
  helper: function (event) {
    return $("#drag_4").attr("src", "assets/img/Assets/Sanitizer.svg");
  },
});
$("#drop_4").droppable({
  drop: function (event, ui) {
    $("#drop_4").html('<img src="assets/img/Assets/Sanitizer.svg">');
    $("#drag_4").hide();
    dropped4 = true;
    var target = document.getElementById("drop_4");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_4").style.display = "block";
    document.getElementById("drop_drag_next_con_4").style.display = "block";
  },
});

if ($(window).width() > 600) {
  $(".rwl_1").addClass("rwl");
} else {
  $(".rwl_1").removeClass("rwl");
}

$("#drag_d_1").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_1");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_1").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_1").css("display", "block");
    $("#drop_d_1").hide();
    $("#drag_d_1").hide();
    $(".block1b-text-container").css("display", "block");
    $("#active_d_1").removeClass("active_2").addClass("active_1");
    $("#active_d_1_m").removeClass("active_2").addClass("active_1");
  },
});
$("#drag_d_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_2");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_2").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_2").css("display", "block");
    $("#drop_d_2").hide();
    $("#drag_d_2").hide();
    $("#active_r_5").removeClass("active_2").addClass("active_1");
    $("#active_r_5_m").removeClass("active_2").addClass("active_1");
    var target = document.getElementById("drop_d_2");
    document.getElementById("drop_drag_next_con_d_2").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_2").style.display = "block";
  },
});

$("#drag_d_3").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_3");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_3").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_3").css("display", "block");
    $("#drop_d_3").hide();
    $("#drag_d_3").hide();
    $("#active_r_3").removeClass("active_2").addClass("active_1");
    $("#active_r_3_m").removeClass("active_2").addClass("active_1");
    var target = document.getElementById("drop_d_3");
    document.getElementById("drop_drag_next_con_d_3").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_3").style.display = "block";
  },
});
