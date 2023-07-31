const body = document.querySelector("body");
const divNames = document.createElement("div");
const divNameHero = document.createElement("div");
const divNameDemon = document.createElement("div");
const nameHero = document.createElement("h3");
const nameDemon = document.createElement("h3");
const divHeroStats = document.createElement("div");
const divDemonStats = document.createElement("div");
const divBarHero = document.createElement("div");
const divBarDemon = document.createElement("div");
const inputNameHero = document.createElement("input");
const inputHpHero = document.createElement("input");
const inputStrHero = document.createElement("input");
const inputDefHero = document.createElement("input");
const inputNameDemon = document.createElement("input");
const inputHpDemon = document.createElement("input");
const inputStrDemon = document.createElement("input");
const inputDefDemon = document.createElement("input");
const divHeroHistorial = document.createElement("div");
const heroHistorial = document.createElement("h4");
const divDemonHistorial = document.createElement("div");
const demonHistorial = document.createElement("h4");
const divBtnHero = document.createElement("div");
const btnHero = document.createElement("button");
const select = document.createElement("select");
const divBtnDemon = document.createElement("div");
const btnDemon = document.createElement("button");


body.appendChild(divNames);
divNames.appendChild(divNameHero);
divNames.appendChild(divNameDemon);
divNameHero.appendChild(nameHero);
divNameDemon.appendChild(nameDemon);
body.appendChild(divHeroStats);
divHeroStats.appendChild(divBarHero);
divHeroStats.appendChild(inputNameHero);
divHeroStats.appendChild(inputHpHero);
divHeroStats.appendChild(inputStrHero);
divHeroStats.appendChild(inputDefHero);
body.appendChild(divDemonStats);
divDemonStats.appendChild(divBarDemon);
divDemonStats.appendChild(inputNameDemon);
divDemonStats.appendChild(inputHpDemon);
divDemonStats.appendChild(inputStrDemon);
divDemonStats.appendChild(inputDefDemon);
body.appendChild(divHeroHistorial);
divHeroHistorial.appendChild(heroHistorial);
body.appendChild(divDemonHistorial)
divDemonHistorial.appendChild(demonHistorial);
body.appendChild(divBtnHero);
divBtnHero.appendChild(btnHero);
divBtnHero.appendChild(select);
body.appendChild(divBtnDemon);
divBtnDemon.appendChild(btnDemon);




nameHero.innerText = "<h3>Héroe : Javier </h3>"
nameDemon.innertext = "<h3>Rey Demonio : `${enemigo}`</h3>"









// console.log('-----Parte 1-----');

// let habilidades = {
//     health: 3,
//     boost: 2,
//     leech: 50,
//     fireBall: 24,
//     ironBody: 8
// }

// let compañeros = ['Otniel', 'Oscar', 'Morales', 'Santiago', 'Javier'];

// let profesores = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"];

// console.log('-----Parte 2-----');

// function nombreAleatoreo(array) {
//     let compAleatoreos = array[Math.floor(Math.random() * array.length)];
//     let nombre = compAleatoreos;
//     return nombre;
// }

// console.log(nombreAleatoreo(compañeros));

// let personaje = {}
// let enemigo = {}


// function createCharacter() {
//     let nombrePersonaje = nombreAleatoreo(compañeros);
//     let hp = prompt('Introduce el valor de hp que deseas darle a tu personaje:',100)
//     let str = prompt('Introduce la fuerza que le quieres dar a tu personaje:',30)
//     let def = prompt('Introduce el valor de defensa que quieres darle a tu personaje',20)

//     personaje = {
//         namePersonaje: nombrePersonaje,
//         hp: parseInt(hp),
//         str: parseInt(str),
//         def: parseInt(def)
//     }
//     return personaje
// }

// createCharacter();

// let vidaEnemigoMax = 0;

// function createEnemigo() {
//     let nombreEnemigo = nombreAleatoreo(profesores);
//     let hp = prompt('Introduce el valor de hp que deseas darle a tu enemigo:',100)
//     let str = prompt('Introduce la fuerza que le quieres dar a tu enemigo:',20)
//     let def = prompt('Introduce el valor de defensa que quieres darle a tu enemigo',20)
//     vidaEnemigoMax = hp;
//     enemigo = {
//         nameEnemigo: nombreEnemigo,
//         hp: parseInt(hp),
//         str: parseInt(str),
//         def: parseInt(def)
//     }
//     return enemigo
// }

// createEnemigo();

// let segundaFase = 0;
// let derrotado = false // Variable para controlar si se ha mostrado el alert de derrota
// function ataqueEmigo(personaje, enemigo) {

//     let result = personaje.def - enemigo.str
//     personaje.hp += result
//     console.log(personaje, enemigo);
//     if (personaje.hp > 0) {
//         ataquePersonaje(personaje, enemigo)
//     }
//     else {
//         if (segundaFase === 0) {
//             console.log('Game Over');
//         }
//         else {
//             if (derrotado === false) {// Verificar si el alert de derrota aún no se ha mostrado
//                 derrotado = true;//Actualiza la variable a true para que en la proxima llamad de la funcion de ataque no se vuelva a mostrar este alert
//                 alert('Te han derrotado pero aun puedes usar una ultima habilidad')
//             }
//             console.log(personaje, enemigo);
//             let selectHab = prompt('Selecciona la habilidad que desea de la siguientes disponibles: leech, fireBall, ironBody.',"leech")

//             if (habilidades.hasOwnProperty(selectHab)) {
//                 let porcentaje = habilidades[selectHab]
//                 let reducirVida = enemigo.hp * (porcentaje / 100)
//                 enemigo.hp -= reducirVida
//                 personaje.hp += reducirVida
//             }
//             else {
//                 alert('La habilidad introducida no existe')
//             }
//             if (personaje.hp <= 0) {
//                 console.log('Haz usado tu habilidad pero aun asi has muerto GAME OVER');
//             }
//             if (personaje.hp > 0) {
//                 ataquePersonaje(personaje, enemigo)
//             }
//         }
//     }
// }

// ataqueEmigo(personaje, enemigo);
// function ataquePersonaje(personaje, enemigo) {

//     let result = enemigo.def - personaje.str
//     enemigo.hp += result
//     console.log(personaje, enemigo);
//     if (enemigo.hp > 0) {
//         ataqueEmigo(personaje, enemigo);
//     }
//     else if (segundaFase == 0) {
//         segundaFase = 1;
//         for (let i = 0; i < vidaEnemigoMax * 2; i++) {
//             enemigo.hp++
//             console.log(enemigo.hp);
//         }
//         enemigo.str *= 1.75

//         alert('El enemigo a entrado a la segunda fase y a recargado su vida y su ataque ¡Cuidado!. Tienes la opcion de elejir si quieres obtener el triple de Vida o un Boost de fuerza y defensa')

//         let selectUp = prompt('Escriba (health) si  desea subir su vida por 3, o escriba (boost) si desea que se le incremente algun skills ',"health")

//         if (selectUp === 'health') {
//             personaje.hp *= habilidades[selectUp]
//         }
//         else if (selectUp === 'boost') {
//             personaje.str *= habilidades[selectUp]
//             personaje.def *= habilidades[selectUp]
//         }
//         else {
//             alert('La palabra introducida no es correcta por favor introduzca la habilidad que quiere de manera correcta')
//         }

//         ataqueEmigo(personaje, enemigo)

//     }
//     else {
//         alert('Haz derrotado a las fuerzas del mal')
//     }
// }





