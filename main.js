let number = [];
let init_number = [];
putValue();

let active = 15;
init(active);

function init(idN) {
  idN = parseInt(idN)
  $('.clickable').removeClass('clickable');
  if (idN != 3 && idN != 7 && idN != 11) {
    click1 = idN + 1;
    click1 = '#id_' + click1;
    $(click1).addClass('clickable');
  }
  if (idN != 4 && idN != 8 && idN != 12) {
    click2 = idN - 1;
    click2 = '#id_' + click2;
    $(click2).addClass('clickable');
  }
  click3 = idN + 4;
  click3 = '#id_' + click3;
  $(click3).addClass('clickable');
  click4 = idN - 4;
  click4 = '#id_' + click4;
  $(click4).addClass('clickable');
  //alert(idN);
}
$(".mainBox").delegate(".clickable", "click", function () {
  var idNo = $(this).attr('id');
  idNo = idNo.split("_");
  active = toggle(idNo[1], active, number);
  init(idNo[1]);
  result(number);
});



$('body').keyup(function (e) {
  if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {

    // left
    if (e.keyCode == 37) {

      if (active != 15 && active != 11 && active != 7 && active != 3) {
        active = active + 1;
        active = toggle(active, active - 1, number);
        init(active);
      }
    }

    // right
    if (e.keyCode == 39) {

      if (active != 12 && active != 8 && active != 4 && active != 0) {
        active = active - 1;
        active = toggle(active, active + 1, number);
        init(active);
      }
    }

    // up
    if (e.keyCode == 38) {
      if (active != 12 && active != 13 && active != 14 && active != 15) {
        active = active + 4;
        active = toggle(active, active - 4, number);
        init(active);
      }
    }

    // down
    if (e.keyCode == 40) {
      if (active != 0 && active != 1 && active != 2 && active != 3) {
        active = active - 4;
        active = toggle(active, active + 4, number);
        init(active);
      }
    }

    result(number);
  }
});


function result(number) {
  let number_init = [15];
  let x = 0, y = 0;
  for (i = 0; i <= 14; i++) {
    number_init[i] = x + "," + y;
    if (i != 3 && i != 7 && i != 11) {
      x = x - 125;
    } else {
      x = 0;
      y = y - 125;
    }
  }

  number_init[15] = number[15];

  console.log("result-number: ", number)

  number1 = number.toString();
  number_init1 = number_init.toString();
  if (number1 === number_init1) {
    alert("You won.");

    putValue();
    let active = 15;
    init(active);
  }

}
function toggle(ID, active, number) {
  $('#id_' + ID + '').removeClass('box');
  $('.activeBox').addClass('box');
  var pos = number[ID].split(",");
  //$('.activeBox').css("background-image", "url(imgs/cats.jpg)");
  $('.activeBox').css("background-position", pos[0] + "px " + pos[1] + "px");
  $('.activeBox').removeClass('activeBox');
  $('#id_' + ID + '').addClass('activeBox');
  number[active] = number[ID];

  return ID;


}

function putValue() {
  //var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  function shuffle(o) {
    for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  let x = 0;
  let y = 0;


  for (i = 0; i <= 14; i++) {

    //document.getElementById("id_"+i).innerHTML  = numbers[i];
    //$("#id_"+i).css("background-position", x+"px "+y+"px");
    init_number[i] = x + "," + y;

    if (i != 3 && i != 7 && i != 11) {
      x = x - 125;
    } else {
      x = 0;
      y = y - 125;
    }
  }
  number = shuffle(init_number);
  //num_y = shuffle(num_y);

  for (i = 0; i <= 14; i++) {
    let pos = number[i].split(",");
    //alert("Hi");
    //if(number[i]!="1,1")
    $("#id_" + i).css("background-position", pos[0] + "px " + pos[1] + "px");
  }
}
