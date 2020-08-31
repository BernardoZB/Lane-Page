if (typeof MauticSDKLoaded == "undefined") {
  var MauticSDKLoaded = true;
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://mail.deltatrader.com.br/media/js/mautic-form.js";
  script.onload = function () {
    MauticSDK.onLoad();
  };
  head.appendChild(script);
  var MauticDomain = "https://mail.deltatrader.com.br";
  var MauticLang = {
    submittingMessage: "Por favor, aguarde...",
  };
}
function popup() {
  var input = document.getElementById(
    "mauticform_input_cursorobosinvestimentosleads_email"
  ).value;
  var button = document.getElementById(
    "mauticform_input_cursorobosinvestimentosleads_submit"
  );
  if (input.length > 0) {
    $(".pop-up-sign-up").addClass("open");
  }
}

$("body").click(function () {
  $(".pop-up").removeClass("open");
  $("#Wrapper").removeClass("desfoque");
});
