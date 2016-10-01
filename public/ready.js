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
    st.time = setInterval(functions.ordenarNumeros, 500);
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
      //functions.accommodateNumber();
      if (st.j < st.arreglo.length - st.i) {
        functions.compareNumPrevToNext()
        functions.animateNumberColor();
        st.j++;
      } else{
        st.j = 0;
        st.i++;
      }
    }else{
      clearInterval(st.time);
    }
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

    console.log('medida menorNumber', menorNumber.width())
    console.log("menorNumber", menorNumber);
    console.log("mayorNumber", mayorNumber);
    //var positionMayorNumber = menorNumber.position();;
    var positionMenorNumber = menorNumber.position();
    var positionMayorNumber = mayorNumber.position();
    var left = positionMenorNumber.left;

  //  console.log('letfMenorNum', letfMenorNum)
    //console.log('positionMayorNumber', positionMayorNumber, 'positionMenorNumber', positionMenorNumber)

    var ditanceRight = positionMenorNumber+positionMenorNumber

    var distance = positionMenorNumber.left-positionMayorNumber.left;
    var total=0;
    total+=distance;
    console.log('total', total);

    console.log('distance', distance);
    // menorNumber.animate({
    //   "top" : "-80"
    // }, 200, function(){
    //   mayorNumber.animate({
    //     "left" : distance
    //   }, 200, function(){
    //     menorNumber.animate({
    //       "right": letfMenorNum,
    //       "top": '+=80'
    //     }, 200);
    //   });
    // });
    menorNumber.css('border', '5px solid red');
    mayorNumber.css('border', '5px solid black');
  };


  //Reutilizando la función para hacerla una y otra vez
  functions.accommodateNumber=()=>{
    //$(".numeros").empty();
    console.log('st.arreglo[st.j]', st.arreglo[st.j], 'st.arreglo[st.j+1]', st.arreglo[st.j+1]);
    console.log('hacemos la animacion');
    functions.animateNumberColor();
    return false;
  };

  var initialize = function() {
    catchDom();
    afterCatchDom();
  };

  return {
    init: initialize
  };

})().init();
