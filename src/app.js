
function jugar (){
const opciones = ["piedra", "papel", "tijera","lagarto","spock"]
const opcionespc = opciones[Math.floor(Math.random() * opciones.length)]
let elecop = "piedra";
const reglas = {
    piedra : ["tijera", "lagarto"],
    papel : ["piedra", " spock"],
    tijera : [ "papel", " lagarto"],
    lagarto : ["papel", "spock"],
    spock : ["piedra", "tijera"],
}
console.log(`El jugador eligió ${elecop}`);
console.log(`La maquina eligió ${opcionespc}`);
console.log(`El resultado es .....`);   
if (elecop === opcionespc){
    console.log("Ha habido un empate!");
}
else if ( reglas[elecop].includes(opcionespc)){
    console.log("Tu Ganas");
}
else 
{console.log("Eres un perdedor!!!");
}
}
jugar();