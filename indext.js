$(document).ready(function () {

 
    consultaAPI("pikachu")
    var pokemones ;


    $("#botonbuscar").click (function() {
        let pokemon = $("#input").val()
        consultaAPI(pokemon)
       
       
    }
    )

    function consultaAPI(nombrepokemon){
   
      $.ajax({
        type:"GET",
        url:`https://pokeapi.co/api/v2/pokemon/${nombrepokemon}`,
    
        success: function(data) {
       
        $('#inicio').html(`<h4>${data.name}</h4> `);
        pokemones = data
        $("#imagenes").html(` <img src="${pokemones.sprites.other["official-artwork"].front_default}" alt="">`)
        
        var chart = new CanvasJS.Chart("graficos", {
          animationEnabled: true,
          title:{
            text: "Status Pokemon",
            horizontalAlign: "center"
          },
          data: [{
            type: "doughnut",
            startAngle: 70,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent",
            toolTipContent: "<b>{label}:</b> {y} (#percent)",
            dataPoints: [
              { y: pokemones.stats[0].base_stat, label: pokemones.stats[0].stat.name },
              { y: pokemones.stats[1].base_stat, label: pokemones.stats[1].stat.name},
              { y: pokemones.stats[2].base_stat, label: pokemones.stats[2].stat.name },
              { y: pokemones.stats[3].base_stat, label: pokemones.stats[3].stat.name},
              { y: pokemones.stats[4].base_stat, label: pokemones.stats[4].stat.name},
              { y: pokemones.stats[5].base_stat, label: pokemones.stats[5].stat.name}
            ]
          }]
        });
        chart.render();
        
        
        },

        dataType: 'json',
    
        
          
      });

 

}

    



 });
   