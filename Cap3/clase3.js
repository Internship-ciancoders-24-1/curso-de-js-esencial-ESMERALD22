/*var contador = 0
const llueve = () => Math.random() < 0.25
do {
    contador += 1
} while( !llueve)

console.log(`FUi a ver si llovia ${contador} veces`)

*/

var signo = prompt('Cuál es tu signo ')
console.log(signo)
switch (signo) {
    case 'acuario':
        console.log("Prepárese, ya que se acerca el momento propicio para demostrarle al mundo de lo que usted es capaz de brindarle. Intente ser más solidario, no espere nada a cambio.        ")
        break
    case 'cancer':
        console.log("Prepárese, ya que obtendrá una excelente jornada para cualquier proyecto que quiera poner en practica, en especial si se trata de su vida personal.")
        break
    case 'leo':
        console.log("Deje de querer controlar todo lo que sucede a su alrededor. Entienda que esa actitud no le es beneficiosa, ya que su entorno podría oponerse.        ")
        break
    case 'virgo':
        console.log("Atravesará un período donde deberá avanzar sin miedo y enfocarse en planificar un nuevo proyecto de vida que lo haga sentir aun más gratificado.        ")
        break
    case 'aries':
        console.log("No dude en agasajar a los que aprecia cuando lo sienta. Recuerde que su hospitalidad lo convierte siempre en un gran anfitrión en su entorno.");
        break
    case 'tauro':
        console.log(" No le tema al esfuerzo y sea más persistente cuando quiere algo. Tenga presente que los logros suelen tardar y requieren de constancia en el tiempo.")
        break
    case 'geminis':
        console.log("Entienda que la carencia de confianza propia podría llegar a ser un obstáculo en su vida. Es el momento para que trate de combatir ese estado")
        break
    case 'libra':
        console.log("Aprenda a como vivir cada momento con intensidad, ya que le sobrará fuerzas para sortear los obstáculos que se le presenten durante esta jornada.        ")
        break
    case 'escorpio':
        console.log("Entienda que con su vitalidad y pasión logrará llevar a buen termino los proyectos que muchos de su entorno creían irrealizables. Avance sin miedo.        ")
        break
    case 'sagitario':
        console.log("Transitará una etapa donde podrá ubicarse en una mejor posición social y así obtendrá un crecimiento en su vida que lo hará sentir que esta en la cima.        ")
        break
    case 'capricornio':
        console.log("Sepa que será el momento justo para que apueste al crecimiento con total libertad. No dude en hacer planes para su futuro, ya que tendrá todo a su favor.        ")
        break
    case 'psicis':
        console.log("Despreocúpese, ya que será un día donde tendrá la mente relajada y con deseos de conocer nuevos rumbos para su vida. Anímese a lo desconocido.        ")
        break
    default: console.log("NO coincide"); break

}