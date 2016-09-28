(function(){
  var dom = {};
  var st = {
    arreglo: [3, 1, 9, 4, 5, 2, 7, 8, 6],
    borderAnimate: ".numeros"
  };

  var catchDom = function() {
    dom.borderAnimate = $(st.borderAnimate);
  };

  var afterCatchDom = function() {
    functions.mostrarNumeros();
    functions.ordenarNumeros(st.arreglo);
  };

  var functions={};

  functions.mostrarNumeros=()=>{
    array = [3, 1, 9, 4, 5, 2, 7, 8, 6];
    array.forEach(function(item, index, array) {
      $(".numeros").append('<div class="numberItem">' + item + '</div>');
    });
  };

  functions.ordenarNumeros=(j)=>{
    for (var i = 0; i < st.arreglo.length ; i++) {
      console.log('st.arreglo desordenado1',st.arreglo);
      for (var j = 0; j < st.arreglo.length - i ; j++) {
        //alert(st.arreglo[j]+'es mayor a'+st.arreglo[j+1]);
        functions.animateNumber(j);
        if (st.arreglo[j] > st.arreglo[j + 1]) {
          var aux = st.arreglo[j];
          st.arreglo[j] = st.arreglo[j + 1];
          st.arreglo[j + 1] = aux;
          continue;
          //console.log("#animando - cambiando posiciones", st.arreglo);
          //return;
          //return false;
        }
        console.log('este es el nuevo arreglo', st.arreglo)
        break;
      }

      //break;
      console.log('aquí se hace la animación', st.arreglo);
    }
    console.log('st.arreglo ordenado',st.arreglo);
  };

  functions.animateNumber=(j)=>{
    if (st.arreglo[j] > st.arreglo[j + 1]) {
      //console.log('st.arreglo[j]', st.arreglo[j], '> st.arreglo[j + 1]', st.arreglo[j + 1]);
      //console.log('es verdad');

      var indexofMenorNumber =  st.arreglo.indexOf(st.arreglo[j]);
      var indexofMayorNumber =  st.arreglo.indexOf(st.arreglo[j+1]);
      var menorNumber = $('.numberItem').eq(indexofMayorNumber);
      var mayorNumber =$('.numberItem').eq(indexofMenorNumber);
      console.log("->>", menorNumber, 'mayorNumber', mayorNumber);

      // var positionMayorNumber = menorNumber.position();;
      var positionMenorNumber = menorNumber.position();
      var positionMayorNumber = mayorNumber.position();
      var left = positionMenorNumber.left;

      var distance = positionMenorNumber.left-positionMayorNumber.left +13;
      //console.log('distance', distance)
      menorNumber.animate({
        "top" : "-80"
      }, 2000, function(){
        mayorNumber.animate({
          "left" : distance
        }, 2000, function(){
          menorNumber.animate({
            "right": distance,
            "top": '+=80'
          }, 2000);
        });
      });
      //
      //console.log('positionMenorNumber', positionMenorNumber.left, 'positionMayorNumber', positionMayorNumber.left)


      menorNumber.css('border', '5px solid red');
      mayorNumber.css('border', '5px solid black');


    }else{
      console.log('es falso');
    }
  };

  functions.accommodateNumber=()=>{
    console.log("#animando - cambiando posiciones===>", st.arreglo);
    $(".numeros").empty()
    st.arreglo.forEach(function(item, index) {
      $(".numeros").append('<div class="numberItem">' + item + '</div>');
    });

  }

  var initialize = function() {
    catchDom();
    afterCatchDom();
  };

  return {
    init: initialize
  };

})().init();
