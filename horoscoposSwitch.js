let signoZodiacal = prompt("Ingrese su signo Zodiacal (todo en minusculas)");

switch (signoZodiacal) {
    //Aries
    case "aries":

        console.log("No esperes nada de nadie y no permitas que tu felicidad se vea afectada por gente que no cumple con sus promesas. Eso no depende de ti ni cuan valioso seas, depende de ellos y los valores que tengan. Tú enfócate en ti.");

        break;
    //Tauro
    case "tauro":

        console.log("Si tu pareja comenzó a fijarse en otras personas o te traicionó con alguien más, no tienes por qué seguir a su lado. No esperes que el amor vuelva a nacer o que su mentalidad cambie y ahora sí decida respetarte porque no sucederá.");

        break;
    //Geminis
        case "geminis":

        console.log("Una de tus amistades te pedirá un consejo, si tienes la posibilidad ayúdala y bríndale el apoyo emocional que necesita. Eres una de las pocas personas con las que puede recargarse, así que será de mucha ayuda tu compañía.");

        break;
    //Cancer
    
        case "cancer":
    
        console.log("Los astros te dicen que no te atrevas a poner piedras en el camino de los demás porque el karma negativo podría llegarte con creces. Lo que tú le hagas a la gente es como si te lo hicieras a ti, así que mesúrate y no hagas el mal.");

        break;

        //Leo
    case "leo":

        console.log("Cuídate de las infecciones estomacales porque estarán a la orden del día. Prioriza cuidar tu alimentación, es uno de los objetivos que deberías tener todos los días. Recuerda que tu cuerpo es la mayor posesión que tienes.");

        break;

        //Virgo
    case "virgo":

        console.log("Se exaltarán tus ganas de tener una relación bonita, pero a veces te da miedo hacerlo. Los planetas te instan a dejarte llevar si es que ya conociste a alguien o a seguir intentándolo si todavía no tienes un ser amado");

        break;

        //Libra
    case "libra":

        console.log("Lo más importante que tienes que aprender esta semana es que la felicidad no es absoluta. No todo el tiempo estarás bien y eso no significa que haya algo mal en tu vida. Hay cosas que simplemente no dependen de ti.");

        break;

        //Escorpion
    case "escorpion":

        console.log("No tomes en cuenta las críticas de personas que tú sabes que te las hacen para dañarte. Siempre está bien recibir consejos constructivos de los demás, pero solo si provienen de alguien que los dice de buena manera.");

        break;

        //Sagitario
    case "sagitario":

        console.log("La recomendación para este lunes es que no malgastes tu tiempo al hacer cosas sin sentido. Enfócate en tus verdaderos objetivos y así verás los resultados. Por otro lado, si no tienes pareja, el amor está a punto de llegar a tu vida.");

        break;

        //Capricornio
    case "capricornio":

        console.log("Comenzarás a planear un viaje para los próximos meses y una noticia referente a eso te alegrará el día. Respecto a tus relaciones personales, es preciso que te alejes de quien no demuestra el mismo interés por ti.");

        break;

        //Acuario
    case "acuario":

        console.log("Si quieres evitar tener problemas con tu pareja, lo mejor es que te alejes de las personas que suelen involucrarte en chismes. No esperes a que suceda algo para retirarte de ese entorno porque podría ser demasiado tarde.");

        break;

        //Piscis
    case "piscis":

        console.log("Ten cuidado con las pérdidas materiales porque estarán a la orden del día. En cuanto a tus seres queridos, trata de no dañarlos con situaciones que tú sabes que les lastiman. Recuerda que en esta vida todo vuelve.");

        break;

    default:
        console.log("Usted escribio mal su Signo Zodiacal, vuelva a intentarlo.")
        break;
}