$(document).ready(function() {
    var ordenarNumeros = function(){
		var dom = {};
		var st = {
    	array : [9,3,1,4,5,2,7,8,6],
      borderAnimate : ".numeros"
    };
		var catchDom = function(){
      dom.array = $(st.array);
      dom.borderAnimate = $(st.borderAnimate);
    };
		var afterCatchDom = function(){
      functions.mostrarNumeros();
      functions.ordenarNumeros();
      functions.animateOrden();
    };
    window.setInterval(function() {
      $(".numeros").toggleClass('active');
    }, 1000);
    var functions = {
        mostrarNumeros:function(){
        	array = [9,3,1,4,5,2,7,8,6];
           array.forEach(function (item, index, array) {
            $(".numeros").append('<div class="numerosOrder">'+item+'</div>');
          });
        },
        ordenarNumeros:function(){
        	console.log("ordenar los numeros");
          dom.array.sort(function(a, b) {
            return a - b;
          });
          console.log(dom.array);
        },
        animateOrden:function(){
          console.log("animacion de orden");
        }
    };

		var initialize = function(){
			catchDom();
			afterCatchDom();
		};
		return{
			init: initialize
		};
	};
	ordenarNumeros().init();
});
