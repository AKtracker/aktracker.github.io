function updateStorage(key, value, save) {
  if (save) {
    localStorage.setItem(key, value);
  }
  else {
    localStorage.removeItem(key);
  }
}

function readStorageValue(key) {
  return localStorage.getItem(key);
}

function readAllStorage() {
  const nbItem = localStorage.length;
  const store = [];
  let i;
  let storeKey;
  for (i = 0; i < nbItem; i += 1) {
    storeKey = localStorage.key(i);
    store.push({
      "key" : storeKey,
      "value" : readStorageValue(storeKey)
    });
  }
  return store;
}

function updatePage() {
  //check local storage
  const store = readAllStorage();
  //restore the selected class
  $.each(store, function(index, elem) {
    if(elem['value'] == 'rainbow')
      $("#" + elem.key).addClass("rainbow selected");
    else if(elem['value'] == 'hidden')
      $("#" + elem.key).addClass("disabled");
    else if (elem['value'] == 'true'){
      $('.base').toggleClass('hidden');
      $('#hide-base').css('display', 'none');
      $('#show-base').css('display', 'inline-block');
    }
    else
      $("#" + elem.key).addClass("selected");
  });
}

function selectPage() {
  //adds selected class to every icon
  $(".flair:not(.disabled)").addClass("selected");

  var className = document.getElementsByClassName('selected');
  var idStore = new Array();

  //loops every ID and stores key into array
  for(var i = 0; i < className.length; i++) {
    idStore.push({"key" : className[i].id, "value" : className[i].className});
  }

  //add IDs from array to local storage
  for(var j=0; j<idStore.length; j++) {
    if(idStore[j]['value'].includes('rainbow')) {
      updateStorage(idStore[j]['key'], "rainbow", true);
    }
    else {
      updateStorage(idStore[j]['key'], null, true);
    }
  }
}

function resetPage() {
  //check local storage
  const store = readAllStorage();
  //delete the selected class
  $.each(store, function(index, elem) {
    $("#" + elem.key).removeClass("selected");
  });
  //clears local storage
  localStorage.clear();
}

//unique legend tracker
function countLegends() {
  var disabled = $('.disabled');
  var unique = $('.flair:not(.base)');

  var selected = $('.selected');
  var pairs = [];
  var baseArray = [];
  var disabledArray = [];

  //pushes IDs to new array
  for(var i = 0; i < selected.length; i++) {
    pairs.push(selected[i].id);
  }

  countLegends2();
}

//total legend tracker
function countLegends2() {
  var amount = $(".selected").length;
  var total = $(".flair").length;
  var disabled = $('.disabled').length;

  $('#counter2').html("<span class='cl'>Total Legends - </span>" + amount + "/" + (total-disabled));
  countRainbows();
}

//rainbow tracker
function countRainbows() {
  var amount = $(".rainbow").length;
  var total = $(".flair").length;
  var disabled = $('.disabled').length;

  $('#rainbow').html("<span class='cl'>Rainbowed - </span>" + amount + "/" + (total-disabled));
}

//un-hides all hidden legends
function showHidden() {
  var disabled = $(".disabled");

  for(var i = 0; i < disabled.length; i++) {
    localStorage.removeItem(disabled[i].id);
  }
  $(".disabled").toggleClass("disabled");
  $('#show-hidden').html('Show Removed Legends (' + $('.disabled').length + ')');
}

//toggles popup window
function toggleModal() {

  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close-btn")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

function windowOnClick(event) {
  var modal = document.querySelector(".modal");
   if (event.target === modal) {
       toggleModal();
   }
}

//export image function
function generateImage() {
  toggleModal();

  $('canvas').remove();

  html2canvas($('.container2')[0]).then(function(canvas) {
    $(".modal-content").append(canvas);
  });
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

//download feature
function download() {
  html2canvas($('.container2')[0]).then(function(canvas) {
    var fileName = 'checklist.png';

    if ('msToBlob' in canvas) { // IE10+
      var blob = canvas.msToBlob();
      navigator.msSaveBlob(blob, fileName);
    } else {
      var a = document.createElement('a');
      var imgData = canvas.toDataURL({    format: 'png',
        multiplier: 4});
      var blob = dataURLtoBlob(imgData);
      var objurl = URL.createObjectURL(blob);

      a.download = "checklist.png";

      a.href = objurl;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  });
}


jQuery(document).ready(function($) {

  var dir = "../images/icons";
  var fileextension = ".png";
  $.ajax({
      //This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: dir,
      success: function (data) {
          //List all .png file names in the page
          $(data).find("a:contains(" + fileextension + ")").each(function () {
              var filename = this.href.replace(window.location.host, "").replace("http://", "");
              $("body").append("<img src='" + dir + filename + "'>");
          });
      }
  });

  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");

  //restore previous state
  updatePage();

  //legend counter
  countLegends();

  //restores hidden legend counter upon page load - must be placed under updatePage()
  $('#show-hidden').html('Show Removed Legends (' + $('.disabled').length + ')');

  //makes sure only one toggle can be flipped at a time
  $("#switch").on("change", function(){
    $("#hide-legends").prop("checked", false);
  });

  $("#hide-legends").on("change", function(){
    $("#switch").prop("checked", false);
  });

  //main function for selecting icons
  $("#special img").mousedown(function(e) {
    var isChecked = document.getElementById('switch').checked;
    var isChecked2 = document.getElementById('hide-legends').checked;

    const $obj = $(this);

    //rainbow toggle must be checked
    if(isChecked) {
      if($obj.hasClass("selected")) {
        $obj.toggleClass('rainbow');
      }
      else {
        $obj.toggleClass('rainbow selected');
      }

      //creates object if selected class is present
      const save = $obj.hasClass("selected");
      var rainbow = $obj.hasClass("rainbow");

      //updates the storage value accordingly
      if(rainbow) {
        updateStorage($obj.attr("id"), "rainbow", save);
      }
      else {
        updateStorage($obj.attr("id"), null, save);
      }
      countLegends();
    }
    //hide legends toggle
    else if(isChecked2){
      $obj.toggleClass("disabled");
      $obj.removeClass("rainbow");
      $obj.removeClass("selected");

      const save = $obj.hasClass("disabled");

      updateStorage($obj.attr("id"), "hidden", save);
      countLegends();

      //shows counter of hidden legends
      $('#show-hidden').html('Show Removed Legends (' + $('.disabled').length + ')');
    }
    //if not checked
    else {
      //toggles selected classes
      $obj.toggleClass("selected");
      $obj.removeClass("rainbow");

      //creates object if selected class is present
      const save = $obj.hasClass("selected");

      //update the key
      updateStorage($obj.attr("id"), null, save);

      countLegends();
    }
  });

  //select all button
  $("#select-all").on("click", function() {
    selectPage();
    countLegends();
  });

  //clear button
  $("#select-none").on("click", function() {
    resetPage();
    countLegends();
  });

  //unhide legends
  $("#show-hidden").on("click", function() {
    showHidden();
    countLegends();
  });

  //hides base forms of legends with super-evos
  $("#show-base").on("click", function() {
    $('.base').toggleClass('hidden');
    $('#show-base').css('display', 'none');
    $('#hide-base').css('display', 'inline-block');
    updateStorage("evohidden", null, false);
  });

  //shows base forms of legends with super-evos
  $("#hide-base").on("click", function() {
    $('.base').toggleClass('hidden');
    $('#hide-base').css('display', 'none');
    $('#show-base').css('display', 'inline-block');
    updateStorage("evohidden", 'true', true);
  });
});
