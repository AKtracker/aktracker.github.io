<!DOCTYPE html>
<html>
<head>

  <title>OPTC Legend Checklist</title>
  <!--tracking-->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136683124-5"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-136683124-5');
  </script>

  <link rel="icon" type="image/x-icon" href="red.ico">

  <!--stylesheets-->
  <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
  <link rel="stylesheet" href="css/flairs.css" type="text/css" media="all" />


  <!--scripts-->
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/flairs.js"></script>
  <script type="text/javascript" src="js/scripts.js"></script>
  <script type="text/javascript" src="js/html2canvas.min.js"></script>

  <!--meta-->
  <meta charset="utf-8">
  <meta name="author" content="antonlabz">
  <meta name="description" content="Legend Checklist for OPTC">
</head>

<body>
  <noscript>JavaScript is required to run this page.</noscript>

  <div class="header"></div>

  <span id="counter"></span>
  <br>
  <span id="counter2"></span>
  <br>
  <span id="rainbow"></span>

  <div class="buttons">
    <button id="select-all">Select All</button>
    <button id="select-none">Reset</button>
    <button id="show-base">Show 6* Forms of Super-Evos</button>
    <button id="hide-base">Hide 6* Forms of Super-Evos</button>
    <button id="show-hidden">Show Removed Legends</button>
    <button id="generate" onclick="generateImage()">Generate Image</button>
  </div>

  <div class="modal">
    <div class="modal-container">
      <div class="modal-header">
        <span class="modal-text">Image Export</span>
        <button id="image-download" onclick="download()">Download Image</button>
        <p><i>(otherwise right-click > save or copy)</i></p>
        <span class="close-btn">&times;</span>
      </div>
      <div class="modal-content"></div>
    </div>
  </div>

  <div class="container2">
    <label class="switch">
      <input id="switch" type="checkbox">
      <span class="slider round"></span>
    </label>
    <span class="tooltip">- toggle rainbow mode</span>

    <label class="switch2">
      <input id="hide-legends" type="checkbox">
      <span class="slider"></span>
    </label>
    <span class="tooltip2">- remove legends from list</span>
      <div id="special"></div>

      <?php
      $dir = "images/icons/";

      // Sort in ascending order - this is default
      $a = scandir($dir);

      print_r($a);


      ?>
  </div>

</body>

<footer>
  <div>
    2020 -
    <script>
    document.write(new Date().getFullYear());
    </script>.
    Created by <a href="https://www.reddit.com/user/antonlabz/">antonlabz</a>.
  </div>
</footer>

</html>
