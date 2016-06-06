$(document).ready(function() {
    var ordenarNumeros = function(){
		var dom = {};
		var st = {
    	fruits : [9,3,1,4,5,2,7,8,6],
      borderAnimate : ".numeros"
    };
		var catchDom = function(){
      dom.fruits = $(st.fruits);
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
        	fruits = [9,3,1,4,5,2,7,8,6];
           fruits.forEach(function (item, index, array) {
            $(".numeros").append('<div class="numerosOrder">'+item+'</div>');
          });
        },
        ordenarNumeros:function(){
        	console.log("ordenar los numeros");
          dom.fruits.sort(function(a, b) {
            return a - b;
          });
          console.log(dom.fruits);
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
