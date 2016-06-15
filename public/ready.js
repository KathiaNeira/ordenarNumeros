$(document).ready(function() {
  var ordenarNumeros = function() {
    var dom = {};
    var st = {
      arreglo: [9, 3, 1, 4, 5, 2, 7, 8, 6],
      borderAnimate: ".numeros"
    };
    var catchDom = function() {
      dom.borderAnimate = $(st.borderAnimate);
    };
    var afterCatchDom = function() {
      functions.mostrarNumeros();
      functions.ordenarNumeros(st.arreglo);
    };
    window.setInterval(function() {
      $(".numeros").toggleClass('active');
    }, 1000);
    var functions = {
      mostrarNumeros: function() {
        array = [9, 3, 1, 4, 5, 2, 7, 8, 6];
        array.forEach(function(item, index, array) {
          $(".numeros").append('<div>' + item + '</div>');
        });
      },
      ordenarNumeros: function(arreglo) {
        console.log("animacion de orden");
        for (var i = 0; i < arreglo.length ; i++) {
          for (var j = 0; j < arreglo.length - i ; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
              var aux = arreglo[j];
              arreglo[j] = arreglo[j + 1];
              arreglo[j + 1] = aux;
            }
          }
        }
        console.log(arreglo);
      }
    };

    var initialize = function() {
      catchDom();
      afterCatchDom();
    };
    return {
      init: initialize
    };
  };
  ordenarNumeros().init();
});
