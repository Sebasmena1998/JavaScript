// Ejercicio de Evolución de Eevee

let eeveelution = prompt("Seleccione la forma con la que quiere evolucionar a su Eevee\n 1.- piedraTrueno\n 2.- piedraAgua\n 3.- piedraFuego\n 4.- amistadDía\n 5.- amistadNoche\n 6.- rocaMusgo\n 7.- rocaHielo\n 8.- afecto ");


switch (eeveelution) {
    case "piedraTrueno":
        alert("Felicidades tu Eevee evoluciono a un hermoso Jolteon. Cuidalo mucho ");
        break;

    case "piedraAgua":
        alert("Felicidades tu Eevee evoluciono a un hermoso Vaporeon. Cuidalo mucho");
        break;

    case "piedraFuego":
        alert("Felicidades tu Eevee evoluciono a un hermoso Flareon. Cuidalo mucho");
        break;

    case "amistadDía":
        alert("Felicidades tu Eevee evoluciono a un hermoso Espeon. Cuidalo mucho");
        break;

    case "amistadNoche":
        alert("Felicidades tu Eevee evoluciono a un hermoso Umbreon. Cuidalo mucho ");
        break;

    case "rocaMusgo":
        alert("Felicidades tu Eevee evoluciono a un hermoso Leafeon. Cuidalo mucho");
        break;

    case "rocaHielo":
        alert("Felicidades tu Eevee evoluciono a un hermoso Glaceon. Cuidalo mucho");
        break;

    case "afecto":
        alert("Felicidades tu Eevee evoluciono a un hermoso Sylveon. Cuidalo mucho");
        break;


    default:
        alert("Lo siento no ocupaste el metodo de evolución correcto, tienes que poner más atención si quieres ser un Maestro Pokemón.");
        break;
}