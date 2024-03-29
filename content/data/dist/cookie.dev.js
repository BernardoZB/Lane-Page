"use strict";

window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#216942",
        text: "#b2d192"
      },
      button: {
        background: "#afed71"
      }
    },
    content: {
      message: "Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.",
      dismiss: "Compreendo!",
      href: "https://www.seudominioaqui.com/politica-de-cookies/"
    }
  });
});