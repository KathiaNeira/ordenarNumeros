(function(){
  var dom = {};
  var st = {
    arreglo: [3, 1, 9, 4, 5, 2, 7, 8, 6],
    borderAnimate: ".numeros",
    i : 0,
    j : 0,
    time : ''
  };

  var catchDom = function() {
    dom.borderAnimate = $(st.borderAnimate);
  };

  var afterCatchDom = function() {
    functions.mostrarNumeros();
    st.time = setInterval(functions.ordenarNumeros, 2000);
  };
  var functions={};

  //Mostrando el array inicial
  functions.mostrarNumeros=()=>{
    array = [3, 1, 9, 4, 5, 2, 7, 8, 6];
    array.forEach(function(item, index, array) {
      $(".numeros").append('<div class="numberItem">' + item + '</div>');
    });
  };

  //Método burbuja para el recorrido del array
  functions.ordenarNumeros=()=>{
    if (st.i < st.arreglo.length) {
      if (st.j < st.arreglo.length - st.i) {
        functions.compareNumPrevToNext()
        st.j++;
      } else{
        st.j = 0;
        st.i++;
      }
    }else{
      clearInterval(st.time);
    }
    functions.accommodateNumber();
  };

  //Comparando número con número para utilizarlo en el método burbuja
  functions.compareNumPrevToNext=()=>{
    if (st.arreglo[st.j] > st.arreglo[st.j + 1]) {
      var aux = st.arreglo[st.j];
      st.arreglo[st.j] = st.arreglo[st.j + 1];
      st.arreglo[st.j + 1] = aux;
    }
  };

  //Animación para pintar el borde de rojo o de negro
  functions.animateNumberColor=()=>{
    var indexofMenorNumber =  st.arreglo.indexOf(st.arreglo[st.j]);
    var indexofMayorNumber =  st.arreglo.indexOf(st.arreglo[st.j+1]);
    var menorNumber = $('.numberItem').eq(indexofMayorNumber);
    var mayorNumber =$('.numberItem').eq(indexofMenorNumber);

    // var positionMayorNumber = menorNumber.position();;
    var positionMenorNumber = menorNumber.position();
    var positionMayorNumber = mayorNumber.position();
    var left = positionMenorNumber.left;

    var distance = positionMenorNumber.left-positionMayorNumber.left +13;
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
    menorNumber.css('border', '5px solid red');
    mayorNumber.css('border', '5px solid black');
  };


  //Reutilizando la función para hacerla una y otra vez
  functions.accommodateNumber=()=>{
    $(".numeros").empty();
    for (var x = 0; x < st.arreglo.length; x++) {
        functions.animateNumberColor();
        //$(".numeros").append('<div class="numberItem">' + st.arreglo[x] + '</div>');
    }

  };

  var initialize = function() {
    catchDom();
    afterCatchDom();
  };

  return {
    init: initialize
  };

})().init();
