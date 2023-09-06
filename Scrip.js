function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function Girar(){
    Giro.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";


    let BP = shuffle ([1890, 2250, 2610]);
    let JM = shuffle ([1850, 2210, 2570]);
    let SG = shuffle ([1770, 2130, 2490]);
    let BC = shuffle ([1810, 2170, 2530]);
    let PC = shuffle ([1750, 2110, 2470]);
    let SIG = shuffle ([1630, 1990, 2350]);
    let JV = shuffle ([1570, 1930, 2290]);

    let results = shuffle ([
        BP[0],
        JM [0],
        SG [0],
        BC [0],
        PC [0],
        SIG [0],
        JV [0],
    ]);

        
    if(BP.includes(results[0]))SelectedItem="Balde plastico";
    if(JM.includes(results[0]))SelectedItem = "Jarra medidora";''
    if(SG.includes(results[0])) SelectedItem = "Siga intentando";
    if(BC.includes(results[0])) SelectedItem = "Botas de caucho";
    if(PC.includes(results[0])) SelectedItem = "Porta comida";
    if(SIG.includes(results[0])) SelectedItem = "Siga intentado";
    if(JV.includes(results[0])) SelectedItem = "Juego de vajilla";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        Aplausos.play();
        Swal.fire({
            title: '!En hora Buena¡',
            html: 'Obtuvo ' + SelectedItem,
            imageUrl: './assets/img/SIN FONDO.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
    }, 5500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);

}