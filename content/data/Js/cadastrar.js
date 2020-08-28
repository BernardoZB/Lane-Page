if (typeof MauticSDKLoaded == "undefined") {
  console.log("passou");
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

$("btn-contact").click(function () {
  console.log(popup);
  $(".pop-up").addClass("open");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("open");
});
