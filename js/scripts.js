//effectively links super-e2s with their base forms
var char = [
  {base: 'char_002_amiya_1', e2: 'char_002_amiya_2'},
  {base: 'char_010_chen_1', e2: 'char_010_chen_2'},
  {base: 'char_017_huang_1', e2: 'char_017_huang_2'},
  {base: 'char_101_sora_1', e2: 'char_101_sora_2'},
  {base: 'char_102_texas_1', e2: 'char_102_texas_2'},
  {base: 'char_103_angel_1', e2: 'char_103_angel_2'},
  {base: 'char_106_franka_1', e2: 'char_106_franka_2'},
  {base: 'char_107_liskam_1', e2: 'char_107_liskam_2'},
  {base: 'char_108_silent_1', e2: 'char_108_silent_2'},
  {base: 'char_109_fmout_1', e2: 'char_109_fmout_2'},
  {base: 'char_110_deepcl_1', e2: 'char_110_deepcl_2'},
  {base: 'char_112_siege_1', e2: 'char_112_siege_2'},
  {base: 'char_115_headbr_1', e2: 'char_115_headbr_2'},
  {base: 'char_117_myrrh_1', e2: 'char_117_myrrh_2'},
  {base: 'char_118_yuki_1', e2: 'char_118_yuki_2'},
  {base: 'char_126_shotst_1', e2: 'char_126_shotst_2'},
  {base: 'char_127_estell_1', e2: 'char_127_estell_2'},
  {base: 'char_128_plosis_1', e2: 'char_128_plosis_2'},
  {base: 'char_129_bluep_1', e2: 'char_129_bluep_2'},
  {base: 'char_130_doberm_1', e2: 'char_130_doberm_2'},
  {base: 'char_131_flameb_1', e2: 'char_131_flameb_2'},
  {base: 'char_133_mm_1', e2: 'char_133_mm_2'},
  {base: 'char_134_ifrit_1', e2: 'char_134_ifrit_2'},
  {base: 'char_136_hsguma_1', e2: 'char_136_hsguma_2'},
  {base: 'char_137_brownb_1', e2: 'char_137_brownb_2'},
  {base: 'char_140_whitew_1', e2: 'char_140_whitew_2'},
  {base: 'char_141_nights_1', e2: 'char_141_nights_2'},
  {base: 'char_143_ghost_1', e2: 'char_143_ghost_2'},
  {base: 'char_144_red_1', e2: 'char_144_red_2'},
  {base: 'char_145_prove_1', e2: 'char_145_prove_2'},
  {base: 'char_147_shining_1', e2: 'char_147_shining_2'},
  {base: 'char_148_nearl_1', e2: 'char_148_nearl_2'},
  {base: 'char_149_scave_1', e2: 'char_149_scave_2'},
  {base: 'char_150_snakek_1', e2: 'char_150_snakek_2'},
  {base: 'char_151_myrtle_1', e2: 'char_151_myrtle_2'},
  {base: 'char_155_tiger_1', e2: 'char_155_tiger_2'},
  {base: 'char_158_milu_1', e2: 'char_158_milu_2'},
  {base: 'char_163_hpsts_1', e2: 'char_163_hpsts_2'},
  {base: 'char_164_nightm_1', e2: 'char_164_nightm_2'},
  {base: 'char_166_skfire_1', e2: 'char_166_skfire_2'},
  {base: 'char_171_bldsk_1', e2: 'char_171_bldsk_2'},
  {base: 'char_172_svrash_1', e2: 'char_172_svrash_2'},
  {base: 'char_173_slchan_1', e2: 'char_173_slchan_2'},
  {base: 'char_174_slbell_1', e2: 'char_174_slbell_2'},
  {base: 'char_179_cgbird_1', e2: 'char_179_cgbird_2'},
  {base: 'char_180_amgoat_1', e2: 'char_180_amgoat_2'},
  {base: 'char_181_flower_1', e2: 'char_181_flower_2'},
  {base: 'char_183_skgoat_1', e2: 'char_183_skgoat_2'},
  {base: 'char_185_frncat_1', e2: 'char_185_frncat_2'},
  {base: 'char_187_ccheal_1', e2: 'char_187_ccheal_2'},
  {base: 'char_188_helage_1', e2: 'char_188_helage_2'},
  {base: 'char_190_clour_1', e2: 'char_190_clour_2'},
  {base: 'char_193_frostl_1', e2: 'char_193_frostl_2'},
  {base: 'char_195_glassb_1', e2: 'char_195_glassb_2'},
  {base: 'char_196_sunbr_1', e2: 'char_196_sunbr_2'},
  {base: 'char_198_blackd_1', e2: 'char_198_blackd_2'},
  {base: 'char_199_yak_1', e2: 'char_199_yak_2'},
  {base: 'char_2013_cerber_1', e2: 'char_2013_cerber_2'},
  {base: 'char_2014_nian_1', e2: 'char_2014_nian_2'},
  {base: 'char_201_moeshd_1', e2: 'char_201_moeshd_2'},
  {base: 'char_202_demkni_1', e2: 'char_202_demkni_2'},
  {base: 'char_204_platnm_1', e2: 'char_204_platnm_2'},
  {base: 'char_213_mostma_1', e2: 'char_213_mostma_2'},
  {base: 'char_215_mantic_1', e2: 'char_215_mantic_2'},
  {base: 'char_219_meteo_1', e2: 'char_219_meteo_2'},
  {base: 'char_220_grani_1', e2: 'char_220_grani_2'},
  {base: 'char_225_haak_1', e2: 'char_225_haak_2'},
  {base: 'char_226_hmau_1', e2: 'char_226_hmau_2'},
  {base: 'char_230_savage_1', e2: 'char_230_savage_2'},
  {base: 'char_235_jesica_1', e2: 'char_235_jesica_2'},
  {base: 'char_236_rope_1', e2: 'char_236_rope_2'},
  {base: 'char_237_gravel_1', e2: 'char_237_gravel_2'},
  {base: 'char_241_panda_1', e2: 'char_241_panda_2'},
  {base: 'char_242_otter_1', e2: 'char_242_otter_2'},
  {base: 'char_243_waaifu_1', e2: 'char_243_waaifu_2'},
  {base: 'char_248_mgllan_1', e2: 'char_248_mgllan_2'},
  {base: 'char_253_greyy_1', e2: 'char_253_greyy_2'},
  {base: 'char_260_durnar_1', e2: 'char_260_durnar_2'},
  {base: 'char_261_sddrag_1', e2: 'char_261_sddrag_2'},
  {base: 'char_263_skadi_1', e2: 'char_263_skadi_2'},
  {base: 'char_274_astesi_1', e2: 'char_274_astesi_2'},
  {base: 'char_275_breeze_1', e2: 'char_275_breeze_2'},
  {base: 'char_277_sqrrel_1', e2: 'char_277_sqrrel_2'},
  {base: 'char_279_excu_1', e2: 'char_279_excu_2'},
  {base: 'char_289_gyuki_1', e2: 'char_289_gyuki_2'},
  {base: 'char_290_vigna_1', e2: 'char_290_vigna_2'},
  {base: 'char_291_aglina_1', e2: 'char_291_aglina_2'},
  {base: 'char_298_susuro_1', e2: 'char_298_susuro_2'},
  {base: 'char_302_glaze_1', e2: 'char_302_glaze_2'},
  {base: 'char_306_leizi_1', e2: 'char_306_leizi_2'},
  {base: 'char_308_swire_1', e2: 'char_308_swire_2'},
  {base: 'char_325_bison_1', e2: 'char_325_bison_2'},
  {base: 'char_326_glacus_1', e2: 'char_326_glacus_2'},
  {base: 'char_340_shwaz_1', e2: 'char_340_shwaz_2'},
  {base: 'char_348_ceylon_1', e2: 'char_348_ceylon_2'},
  {base: 'char_355_ethan_1', e2: 'char_355_ethan_2'},
  {base: 'char_356_broca_1', e2: 'char_356_broca_2'},
  {base: 'char_367_swllow_1', e2: 'char_367_swllow_2'},
  {base: 'char_383_snsant_1', e2: 'char_383_snsant_2'},
];

function updatePage() {
  //check local storage
  const store = readAllStorage();
  //restore the selected class
  $.each(store, function(index, elem) {
    if(elem['value'] == 'shown') {
      $('.cn').toggleClass('hidden');
      $('#show-cn').html('Hide CN units');
      $('#show-cn').attr('id', 'hide-cn');
    }
    else if (elem['value'] == 'true'){
      $('#toggle-e2').prop('checked', true);
      E2toggle();
    }
    else
    $("#" + elem.key).addClass("selected");
  });
}

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

function selectPage() {
  //adds selected class to every icon
  $(".icon:not(.disabled)").addClass("selected");

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

//total legend tracker
function countUnits() {
  var amount = $(".selected").length;
  var total = $(".icon").length;
  var disabled = $('.disabled').length;

  $('#counter').html("<span class='cl'>Total Owned - </span>" + amount + "/" + (total-disabled));
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

//toggle for E2 artwork
function E2toggle(){

  $('#box img').attr('src', function () {
    var img = $(this);
    var src = $(this).prop('src');
    var rep = src.replace(/_1\./, '_2.');
    var search = src.replace(/.*images\/icons\/char_\d{3,4}_/i, '');
    var search2 = search.replace(/.png/i, '');

    //if toggled
    if($('#toggle-e2').is(':checked')) {
      for (var x in char) {
        var base = char[x]['base'];
        var search3 = base.replace(/.*char_\d{3,4}_/i, '');

        //checks if icon is in 'base unit' array
        if(search2 == search3) {
          img.attr('src', img.attr('src').replace(/_1\./i, '_2.'));
        }
        updateStorage("e2", 'true', true);
      }
    }
    //not toggled
    else {
      img.attr('src', img.attr('src').replace(/_2\./i, '_1.'));
      updateStorage("e2", null, false);
    }

  });
}


jQuery(document).ready(function($) {

  //adds HTML to show-cn button on page load
  if (localStorage.getItem("cn") === null){
    $('#show-cn').html('Show CN units');
  }

  //SPECIAL FLAIRS
  loadSpecial = function() {
    var enter = document.getElementById('box');

    var name = [
      'char_002_amiya_1',
      //'char_002_amiya_1a',
      'char_009_12fce_1',
      'char_010_chen_1',
      'char_017_huang_1',
      'char_101_sora_1',
      'char_102_texas_1',
      'char_103_angel_1',
      //'char_103_angel_wild1',
      'char_106_franka_1',
      'char_107_liskam_1',
      'char_108_silent_1',
      'char_109_fmout_1',
      'char_110_deepcl_1',
      'char_112_siege_1',
      'char_115_headbr_1',
      'char_117_myrrh_1',
      'char_118_yuki_1',
      'char_120_hibisc_1',
      'char_121_lava_1',
      'char_122_beagle_1',
      'char_123_fang_1',
      'char_124_kroos_1',
      'char_126_shotst_1',
      'char_127_estell_1',
      'char_128_plosis_1',
      'char_129_bluep_1',
      'char_130_doberm_1',
      'char_131_flameb_1',
      'char_133_mm_1',
      'char_134_ifrit_1',
      'char_136_hsguma_1',
      'char_137_brownb_1',
      'char_140_whitew_1',
      'char_141_nights_1',
      'char_143_ghost_1',
      'char_144_red_1',
      'char_145_prove_1',
      'char_147_shining_1',
      'char_148_nearl_1',
      'char_149_scave_1',
      'char_150_snakek_1',
      'char_151_myrtle_1',
      'char_155_tiger_1',
      'char_158_milu_1',
      'char_163_hpsts_1',
      'char_164_nightm_1',
      'char_166_skfire_1',
      'char_171_bldsk_1',
      'char_172_svrash_1',
      'char_173_slchan_1',
      //'char_173_slchan_wild1',
      'char_174_slbell_1',
      'char_179_cgbird_1',
      'char_180_amgoat_1',
      'char_181_flower_1',
      //'char_181_flower_daily1',
      'char_183_skgoat_1',
      'char_185_frncat_1',
      'char_187_ccheal_1',
      'char_188_helage_1',
      'char_190_clour_1',
      'char_192_falco_1',
      'char_193_frostl_1',
      'char_195_glassb_1',
      'char_196_sunbr_1',
      'char_198_blackd_1',
      'char_199_yak_1',
      'char_2013_cerber_1',
      'char_2014_nian_1',
      'char_201_moeshd_1',
      'char_202_demkni_1',
      'char_204_platnm_1',
      'char_208_melan_1',
      //'char_208_melan_epoque1',
      'char_209_ardign_1',
      'char_210_stward_1',
      'char_211_adnach_1',
      'char_212_ansel_1',
      'char_213_mostma_1',
      'char_215_mantic_1',
      'char_219_meteo_1',
      'char_220_grani_1',
      'char_225_haak_1',
      'char_226_hmau_1',
      'char_230_savage_1',
      'char_235_jesica_1',
      'char_236_rope_1',
      'char_237_gravel_1',
      'char_240_wyvern_1',
      'char_241_panda_1',
      'char_242_otter_1',
      'char_243_waaifu_1',
      'char_248_mgllan_1',
      'char_253_greyy_1',
      'char_260_durnar_1',
      'char_261_sddrag_1',
      'char_263_skadi_1',
      'char_274_astesi_1',
      'char_275_breeze_1',
      'char_277_sqrrel_1',
      'char_278_orchid_1',
      'char_279_excu_1',
      'char_281_popka_1',
      'char_282_catap_1',
      'char_283_midn_1',
      'char_284_spot_1',
      //'char_284_spot_otaku1',
      'char_285_medic2_1',
      'char_286_cast3_1',
      'char_289_gyuki_1',
      'char_290_vigna_1',
      'char_291_aglina_1',
      'char_298_susuro_1',
      'char_302_glaze_1',
      'char_306_leizi_1',
      'char_308_swire_1',
      'char_325_bison_1',
      'char_326_glacus_1',
      'char_340_shwaz_1',
      'char_348_ceylon_1',
      'char_355_ethan_1',
      'char_356_broca_1',
      'char_367_swllow_1',
      'char_383_snsant_1',
      'char_500_noirc_1',
      'char_501_durin_1',
      'char_502_nblade_1',
      'char_503_rang_1',
    ]

    var e2 = [
      'char_002_amiya_2',
      'char_010_chen_2',
      'char_017_huang_2',
      'char_101_sora_2',
      'char_102_texas_2',
      'char_103_angel_2',
      'char_106_franka_2',
      'char_107_liskam_2',
      'char_108_silent_2',
      'char_109_fmout_2',
      'char_110_deepcl_2',
      'char_112_siege_2',
      'char_115_headbr_2',
      'char_117_myrrh_2',
      'char_118_yuki_2',
      'char_126_shotst_2',
      'char_127_estell_2',
      'char_128_plosis_2',
      'char_129_bluep_2',
      'char_130_doberm_2',
      'char_131_flameb_2',
      'char_133_mm_2',
      'char_134_ifrit_2',
      'char_136_hsguma_2',
      'char_137_brownb_2',
      'char_140_whitew_2',
      'char_141_nights_2',
      'char_143_ghost_2',
      'char_144_red_2',
      'char_145_prove_2',
      'char_147_shining_2',
      'char_148_nearl_2',
      'char_149_scave_2',
      'char_150_snakek_2',
      'char_151_myrtle_2',
      'char_155_tiger_2',
      'char_158_milu_2',
      'char_163_hpsts_2',
      'char_164_nightm_2',
      'char_166_skfire_2',
      'char_171_bldsk_2',
      'char_172_svrash_2',
      'char_173_slchan_2',
      'char_174_slbell_2',
      'char_179_cgbird_2',
      'char_180_amgoat_2',
      'char_181_flower_2',
      'char_183_skgoat_2',
      'char_185_frncat_2',
      'char_187_ccheal_2',
      'char_188_helage_2',
      'char_190_clour_2',
      'char_193_frostl_2',
      'char_195_glassb_2',
      'char_196_sunbr_2',
      'char_198_blackd_2',
      'char_199_yak_2',
      'char_2013_cerber_2',
      'char_2014_nian_2',
      'char_201_moeshd_2',
      'char_202_demkni_2',
      'char_204_platnm_2',
      'char_213_mostma_2',
      'char_215_mantic_2',
      'char_219_meteo_2',
      'char_220_grani_2',
      'char_225_haak_2',
      'char_226_hmau_2',
      'char_230_savage_2',
      'char_235_jesica_2',
      'char_236_rope_2',
      'char_237_gravel_2',
      'char_241_panda_2',
      'char_242_otter_2',
      'char_243_waaifu_2',
      'char_248_mgllan_2',
      'char_253_greyy_2',
      'char_260_durnar_2',
      'char_261_sddrag_2',
      'char_263_skadi_2',
      'char_274_astesi_2',
      'char_275_breeze_2',
      'char_277_sqrrel_2',
      'char_279_excu_2',
      'char_289_gyuki_2',
      'char_290_vigna_2',
      'char_291_aglina_2',
      'char_298_susuro_2',
      'char_302_glaze_2',
      'char_306_leizi_2',
      'char_308_swire_2',
      'char_325_bison_2',
      'char_326_glacus_2',
      'char_340_shwaz_2',
      'char_348_ceylon_2',
      'char_355_ethan_2',
      'char_356_broca_2',
      'char_367_swllow_2',
      'char_383_snsant_2',
    ]

    //creates HTML for special flairs
    for (var v in name) {
      var icon = document.createElement('img');
      icon.setAttribute('class', 'icon');

      var tempregex = name[v];

      var temp2 = tempregex.replace(/char_\d{3,4}_/i, '');
      var temp3 = temp2.replace(/_\d/, '');
      icon.setAttribute('id', temp3);
      icon.setAttribute('src', 'images/icons/'+name[v]+'.png');

      enter.appendChild(icon);
    }
  }
  loadSpecial();

  //init values for image export modal
  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");

  //restore previous state
  updatePage();

  //legend counter
  countUnits();

  //main function for selecting icons
  $("#box img").mousedown(function(e) {
    //var isChecked = document.getElementById('switch').checked;

    const $obj = $(this);

    //toggles selected classes
    $obj.toggleClass("selected");

    //creates object if selected class is present
    const save = $obj.hasClass("selected");

    //update the key
    updateStorage($obj.attr("id"), null, save);

    countUnits();
  });

  //select all button
  $("#select-all").on("click", function() {
    selectPage();
    countUnits();
  });

  //clear button
  $("#select-none").on("click", function() {
    resetPage();
    countUnits();
  });

  //show CN units
  $(document).on("click", "#show-cn", function() {
    $('.cn').toggleClass('hidden');
    $('#show-cn').html('Hide CN units');
    $('#show-cn').attr('id', 'hide-cn');
    updateStorage("cn", 'shown', true);
  });

  //hide CN units
  $(document).on("click", "#hide-cn", function() {
    $('.cn').toggleClass('hidden');
    $('#hide-cn').html('Show CN units');
    $('#hide-cn').attr('id', 'show-cn');
    updateStorage("cn", null, false);
  });
});
