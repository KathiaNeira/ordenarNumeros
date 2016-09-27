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
    array = [3, 1,9, 4, 5, 2, 7, 8, 6];
    array.forEach(function(item, index, array) {
      $(".numeros").append('<div class="numberItem">' + item + '</div>');
    });
  };

  functions.ordenarNumeros=(j)=>{
    for (var i = 0; i < st.arreglo.length ; i++) {
      //console.log('st.arreglo desordenado',st.arreglo);
      for (var j = 0; j < st.arreglo.length - i ; j++) {
        //alert(st.arreglo[j]+'es mayor a'+st.arreglo[j+1]);
        functions.animateNumber(j);
        if (st.arreglo[j] > st.arreglo[j + 1]) {
          var aux = st.arreglo[j];
          st.arreglo[j] = st.arreglo[j + 1];
          st.arreglo[j + 1] = aux;
          //console.log("#animando - cambiando posiciones", st.arreglo);
          functions.accommodateNumber();
          return false;
        }
      }
      return true;
      //console.log('aquí se hace la animación', st.arreglo);
    }
    console.log('st.arreglo ordenado',st.arreglo);
  };

  functions.animateNumber=(j)=>{
    if (st.arreglo[j] > st.arreglo[j + 1]) {
      console.log('st.arreglo[j]', st.arreglo[j], '> st.arreglo[j + 1]', st.arreglo[j + 1]);
      console.log('es verdad');
      var indexof =  st.arreglo.indexOf(st.arreglo[j]);
      console.log('indexof', indexof)
      var container =$('.numberItem').eq(indexof);
      container.css('border', '5px solid red');
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
