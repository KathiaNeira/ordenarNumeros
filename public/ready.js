(function(){
  var dom = {};
  var st = {
    arreglo: [6, 1, 9, 4,8],
    borderAnimate: ".numeros",
    i : 0,
    j : 0,
    time : '',
    positions:[]
  };

  var catchDom = function() {
    dom.borderAnimate = $(st.borderAnimate);
  };

  var afterCatchDom = function() {
    console.log("afterCatchDom");
    functions.mostrarNumeros();
    $(".numberItem").each(function(e,b){
        //console.log(e, $(b).position());
        st.positions.push($(b).position());
      }
    );
    console.log("array de posiciones", st.positions);
    st.time = setInterval(functions.ordenarNumeros, 1000);
  };
  var functions={};

  //Mostrando el array inicial
  functions.mostrarNumeros=()=>{
    st.arreglo.forEach(function(item, index, array) {
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
  };

  //Comparando número con número para utilizarlo en el método burbuja
  functions.compareNumPrevToNext=()=>{
    // actualizar nuevas posiciones
    if (st.arreglo[st.j] > st.arreglo[st.j + 1]) {
      //
      console.log('se hace la animación antinguo array', st.arreglo);
      var prevMayor = st.arreglo[st.j];
      var prevMenor = st.arreglo[st.j + 1];
      console.log("numeros", prevMayor, prevMenor)
      var indices = functions.getIndices(prevMayor, prevMenor);
      console.log("indices", indices);
      // animacion
      functions.animation(indices);
      //
      var aux = st.arreglo[st.j];
      st.arreglo[st.j] = st.arreglo[st.j + 1];
      st.arreglo[st.j + 1] = aux;
      console.log('se hace la animación actualizando array', st.arreglo);
    }else{
      console.log('no se hace la animacion');
    }
  };
  functions.getIndices = (mayor, menor)=>{
      //console.log("getIndices", mayor, menor)
      var IndiceMayor =  st.arreglo.indexOf(mayor);
      var IndiceMenor =  st.arreglo.indexOf(menor);
      //console.log("getIndices==>", mayor, menor)
      return {
          mayor:IndiceMayor,
          menor:IndiceMenor
      };
  };
  functions.animation = (indices) => {
    var mayor = $('.numberItem').eq(indices.mayor);
    var menor = $('.numberItem').eq(indices.menor);
    console.log('elementos que se van a animar', mayor, menor);

    mayor.css({
      right: -60
    });
    menor.css({
      left: -60
    })
    return false;


  };
  //Animación para acomodar el nuevo array
  // functions.animateNumberColor=()=>{
  //   console.log('comparamos los números', st.arreglo[st.j], 'y', st.arreglo[st.j+1]);
  //
  //   var indexofPrevNumber =  st.arreglo.indexOf(st.arreglo[st.j]);
  //   var indexofNextNumber =  st.arreglo.indexOf(st.arreglo[st.j+1]);
  //   var nextNumber = $('.numberItem').eq(indexofNextNumber);
  //   var prevNumber = $('.numberItem').eq(indexofPrevNumber);
  //   console.log('indexofPrevNumber', indexofPrevNumber, 'indexofNextNumber', indexofNextNumber)
  //   //console.log('hacemos la animacion');
  //
  //   console.log('nextNumber', nextNumber.position().left, 'prevNumber', prevNumber.position().left, 'resultado', nextNumber.position().left-prevNumber.position().left);
  //
  //
  //   nextNumber.animate({
  //     'top': '-80px'
  //   }, 1000, function(){
  //     prevNumber.animate({
  //       "left" : '60px'
  //     }, 1000, function(){
  //       nextNumber.animate({
  //          "right": '60px',
  //          "top": '+=80'
  //        }, 1000);
  //     });
  //   });
  //
  //   // nextNumber.css('background', 'yellow');
  //   // prevNumber.css('background', 'pink');
  //
  //   nextNumber.css('border', '5px solid red');
  //   //prevNumber.css('border', '5px solid black');
  // //   nextNumber.removeAttr('style');
  // //   prevNumber.removeAttr('style');
  //  };

  var initialize = function() {
    catchDom();
    afterCatchDom();
  };

  return {
    init: initialize
  };

})().init();
