let hundredQ = [
    ["¿Cuál es la ley suprema de la tierra?", "La Constitución"],
    ["¿Qué hace la Constitución?", "Establece el gobierno, define el gobierno, protege los derechos básicos de los estadounidenses"],
    ["La idea de autogobierno está en las tres primeras palabras de la Constitución. ¿Cuáles son estas palabras?", "Nosotros el Pueblo"],
    ["¿Qué es una enmienda?", "un cambio (en la Constitución) o una adición (a la Constitución)"],
    ["¿Cómo llamamos a las primeras diez enmiendas de la Constitución?", "La Declaración de Derechos"],
    ["¿Cuál es un derecho o libertad de la Primera Enmienda? (Elige uno)", "Libertad de expresión, Religión, Reunión, Prensa, Petición al gobierno"],
    ["¿Cuántas enmiendas tiene la Constitución?", "27"],
    ["¿Qué hizo la Declaración de Independencia? (Elige uno)", "anunció nuestra independencia de Gran Bretaña, declaró nuestra independencia de Gran Bretaña"],
    ["¿Cuáles son dos derechos en la Declaración de Independencia?", "vida, libertad, búsqueda de la felicidad"],
    ["¿Qué es la libertad de religión?", "Puedes practicar cualquier religión o no practicar ninguna religión."],
    ["¿Cuál es el sistema económico en los Estados Unidos? (Elige uno)", "economía capitalista, economía de mercado"],
    ["¿Qué es la 'ley del país'? (Elige uno)", "Todos deben seguir la ley. Los líderes deben obedecer la ley. El gobierno debe obedecer la ley. Nadie está por encima de la ley."],
    ["Nombra una rama o parte del gobierno", "Congreso Legislativo, Presidente Ejecutivo, Los Tribunales Judiciales"],
    ["¿Qué impide que una rama del gobierno se vuelva demasiado poderosa?", "controles y equilibrios, separación de poderes"],
    ["¿Quién está a cargo de la rama ejecutiva?", "El Presidente"],
    ["¿Quién hace las leyes federales? (Elige uno)", "Congreso, Senado y Cámara de Representantes, Legislatura de EE. UU. o nacional"],
    ["¿Cuáles son las dos partes del Congreso de EE. UU.?", "El Senado y la Cámara de Representantes"],
    ["¿Cuántos senadores de EE. UU. hay?", "100 senadores"],
    ["¿Elegimos a un senador de EE. UU. por cuántos años?", "6 años"],
    ["¿Cuántos miembros con derecho a voto tiene la Cámara de Representantes?", "La Cámara de Representantes tiene 435 miembros, que representan proporcionalmente la población de los 50 estados."],
    ["¿Elegimos a un Representante de EE. UU. por cuántos años?", "2"],
    ["¿A quién representa un senador de EE. UU.?", "Al pueblo del estado"],
    ["¿Por qué algunos estados tienen más Representantes que otros estados?", "debido a la población del estado, porque tienen más personas o porque algunos estados tienen más personas"],
    ["Elegimos a un Presidente por cuántos años?", "4 años"],
    ["¿En qué mes votamos por el Presidente?", "Noviembre"],
    ["Si el Presidente ya no puede servir, ¿quién se convierte en Presidente?", "Vicepresidente"],
    ["Si tanto el Presidente como el Vicepresidente ya no pueden servir, ¿quién se convierte en Presidente?", "El Presidente de la Cámara"],
    ["¿Quién es el Comandante en Jefe de las fuerzas armadas?", "El Presidente"],
    ["¿Quién firma proyectos de ley para que se conviertan en leyes?", "El Presidente"],
    ["¿Quién veta proyectos de ley?", "El Presidente"],
    ["¿Qué hace el Gabinete del Presidente?", "Asesora al presidente"],
    ["Nombra dos cargos de nivel de Gabinete", "Secretario de Agricultura, Secretario de Comercio, Secretario de Defensa, Secretario de Educación, Secretario de Energía, Secretario de Salud y Servicios Humanos, Secretario de Seguridad Nacional, Secretario de Vivienda y Desarrollo Urbano, Secretario del Interior, Secretario de Trabajo, Secretario de Estado, Secretario de Transporte, Secretario del Tesoro, Secretario de Asuntos de Veteranos, Fiscal General, Vicepresidente"],
    ["¿Qué hace la rama judicial?", "revisa leyes, explica leyes, resuelve disputas (desacuerdos), decide si una ley va en contra de la Constitución"],
    ["¿Cuál es el tribunal más alto en los Estados Unidos?", "La Corte Suprema"],
    ["¿Cuántos jueces hay en la Corte Suprema?", "nueve Jueces (9)"],
    ["Nombra un poder del gobierno federal.", "imprimir dinero, declarar la guerra, crear un ejército o hacer tratados"],
    ["Nombra un poder de los estados", "proporcionar educación, proporcionar protección (policía), proporcionar seguridad (departamentos de bomberos), otorgar una licencia de conducir, aprobar zonificación y uso de la tierra"],
    ["Nombra dos de los principales partidos políticos en los Estados Unidos.", "Demócrata y Republicano"],
    ["Describe una de las cuatro enmiendas a la Constitución sobre quién puede votar.", "Los ciudadanos mayores de 18 años pueden votar. No tienes que pagar un impuesto electoral para votar. Cualquier ciudadano puede votar. Un ciudadano masculino de cualquier raza puede votar."],
    ["Nombra una responsabilidad que es solo para ciudadanos de EE. UU.", "servir en un jurado, votar en una elección federal"],
    ["Nombra un derecho solo para ciudadanos de Estados Unidos", "votar en una elección federal, postularse para un cargo federal"],
    ["Nombra dos derechos de todos los que viven en EE. UU.", "libertad de expresión, libertad de prensa, libertad de reunión, libertad de petición al gobierno, libertad de religión, el derecho de portar armas"],
    ["¿A qué mostramos lealtad cuando decimos el Juramento de Lealtad?", "A los Estados Unidos, a la bandera"],
    ["Nombra una promesa que haces cuando te conviertes en ciudadano de EE. UU.", "renunciar a la lealtad a otros países, defender la Constitución y las leyes de Estados Unidos, obedecer las leyes de Estados Unidos, servir en las Fuerzas Armadas de EE. UU. (si es necesario), servir (realizar un trabajo importante para) la nación (si es necesario), ser leal a Estados Unidos"],
    ["¿A qué edad deben ser los ciudadanos para votar por el presidente?", "18 años o más"],
    ["Nombra dos formas en que los ciudadanos de EE. UU. pueden participar en su democracia.", "votar unirse a un partido político, ayudar en una campaña, unirse a un grupo cívico, unirse a un grupo comunitario, darle a un funcionario electo tu opinión sobre un tema, llamar a Senadores y Representantes, apoyar u oponerse públicamente a un tema o política, postularse para un cargo, escribir a un periódico"],
    ["¿Qué fecha es el último día en que puedes presentar formularios de impuestos federales sobre la renta?", "La fecha suele ser alrededor del 15 de abril"],
    ["¿Cuándo deben registrarse todos los hombres en el Servicio Selectivo?", "A los 18, entre los 18 y los 26"],
    ["Nombra una razón por la que los colonos vinieron a América.", "libertad, libertad política, libertad religiosa, oportunidad económica, practicar su religión, escapar de la persecución"],
    ["¿Quién vivía en América antes de que llegaran los europeos?", "Indios Nativos o Nativos Americanos"],
    ["¿Qué grupo de personas fue llevado a EE. UU. y vendido como esclavos?", "Africanos o personas de África"],
    ["¿Por qué lucharon los colonos contra los británicos?", "por los impuestos elevados (tributación sin representación), porque el ejército británico se quedó en sus casas, porque no tenían autogobierno"],
    ["¿Quién escribió la Declaración de Independencia?", "Thomas Jefferson"],
    ["¿Cuándo se adoptó la Declaración de Independencia?", "4 de julio de 1776"],
    ["Nombra tres de los 13 estados originales.", "Nuevo Hampshire, Massachusetts, Rhode Island, Connecticut, Nueva York, Nueva Jersey, Pensilvania, Delaware, Maryland, Virginia, Carolina del Norte, Carolina del Sur, Georgia"],
    ["¿Qué sucedió en la Convención Constitucional?", "La Constitución fue escrita. Los Padres Fundadores escribieron la Constitución."],
    ["¿Cuándo se escribió la Constitución?", "1787"],
    ["Nombra a uno de los autores de los Papeles Federalistas.", "(James) Madison, (Alexander) Hamilton, (John) Jay, Publius"],
    ["Nombra una cosa por la que es famoso Benjamin Franklin.", "diplomático de EE. UU., miembro más antiguo de la Convención Constitucional, primer Director General de Correos de Estados Unidos, escritor de 'El Almanaque del Pobre Ricardo', fundador de las primeras bibliotecas gratuitas"],
    ["¿Quién es considerado el 'Padre de Nuestra Patria'?", "(George) Washington"],
    ["¿Quién fue el primer presidente?", "(George) Washington"],
    ["¿Qué territorio compró Estados Unidos a Francia en 1803?", "el Territorio de Louisiana, Luisiana"],
    ["Nombra una guerra en la que luchó EE. UU. en el siglo XIX", "Guerra de 1812, Guerra México-Estados Unidos, Guerra Civil, Guerra Hispano-Estadounidense"],
    ["Nombra la guerra de EE. UU. entre el Norte y el Sur", "la Guerra Civil, la Guerra entre los Estados"],
    ["Nombra un problema que llevó a la Guerra Civil", "esclavitud, razones económicas, derechos de los estados"],
    ["Nombra una cosa importante que hizo Abraham Lincoln.", "liberó a los esclavos (Proclamación de la Emancipación), salvó (o preservó) la Unión, dirigió a EE. UU. durante la Guerra Civil"],
    ["¿Qué hizo la Proclamación de Emancipación?", "liberó a los esclavos liberó a los esclavos en la Confederación, liberó a los esclavos en los estados confederados, liberó a los esclavos en la mayoría de los estados del Sur"],
    ["¿Qué hizo Susan B. Anthony?", "luchó por los derechos de las mujeres, luchó por los derechos civiles"],
    ["Nombra una guerra en la que luchó Estados Unidos en el siglo XX", "Primera Guerra Mundial, Segunda Guerra Mundial, Guerra de Corea, Guerra de Vietnam, Guerra del Golfo (Pérsico)"],
    ["¿Quién fue el presidente durante la Primera Guerra Mundial?", "(Woodrow) Wilson"],
    ["¿Quién fue el presidente durante la Gran Depresión y la Segunda Guerra Mundial?", "(Franklin) Roosevelt"],
    ["¿Contra quién luchó Estados Unidos en la Segunda Guerra Mundial?", "Japón, Alemania e Italia"],
    ["Antes de ser presidente, Eisenhower fue general. ¿En qué guerra estuvo?", "Segunda Guerra Mundial"],
    ["Durante la Guerra Fría, ¿cuál fue la principal preocupación de Estados Unidos?", "El comunismo"],
    ["¿Qué movimiento intentó poner fin a la discriminación racial?", "El movimiento por los derechos civiles"],
    ["¿Qué hizo Martin Luther King, Jr.?", "luchó por los derechos civiles, trabajó por la igualdad para todos los estadounidenses"],
    ["¿Qué evento importante ocurrió el 11 de septiembre de 2001 en EE. UU.?", "Los terroristas atacaron a Estados Unidos."],
    ["Nombra una tribu nativa americana en los Estados Unidos", "Cherokee, Sioux, Navajo, Chippewa, Choctaw, Pueblo, Apache, Iroquois, Creek, Blackfeet, Seminole, Cheyenne, Arawak, Shawnee, Mohegan, Huron, Oneida, Lakota, Crow, Teton, Hopi, Inuit"],
    ["Nombra uno de los dos ríos más largos de los Estados Unidos.", "Río Missouri, Río Misisipi"],
    ["¿Qué océano está en la costa oeste de EE. UU.?", "Océano Pacífico"],
    ["¿Qué océano está en la costa este de los Estados Unidos?", "Océano Atlántico"],
    ["Nombra un territorio de los EE. UU.", "Puerto Rico, Islas Vírgenes de los Estados Unidos, Samoa Americana, Islas Marianas del Norte, Guam"],
    ["Nombra un estado que limita con Canadá", "Maine, Nuevo Hampshire, Vermont, Nueva York, Pensilvania, Ohio, Michigan, Minnesota, Dakota del Norte, Montana, Idaho, Washington, Alaska"],
    ["Nombra un estado que limita con México", "California, Arizona, Nuevo México, Texas"],
    ["¿Cuál es la capital de los Estados Unidos?", "Washington, D.C."],
    ["¿Dónde está la Estatua de la Libertad?", "En el puerto de Nueva York, en la isla de la Libertad de Nueva Jersey, cerca de la ciudad de Nueva York, en el río Hudson"],
    ["¿Por qué tiene la bandera 13 franjas?", "porque había 13 colonias originales, porque las franjas representan las colonias originales"],
    ["¿Por qué tiene la bandera 50 estrellas?", "porque hay una estrella por cada estado, porque cada estrella representa un estado, porque hay 50 estados"],
    ["¿Cuál es el nombre del himno nacional?", "La Bandera de Estrellas"],
    ["¿Cuándo celebramos el Día de la Independencia?", "4 de julio"],
    ["Nombra dos feriados nacionales en los Estados Unidos", "Día de Año Nuevo, Día de Martin Luther King, Jr., Día de los Presidentes, Día de los Caídos en Guerras, Día de la Independencia, Día del Trabajo, Día de Colón, Día de los Veteranos, Día de Acción de Gracias, Navidad"],
];



// Function to display a random question and answer
let questionsAnswer = [...hundredQ];

// Function to display a random question and answer
function displayRandomQuestion() {
  // Generate a random index within the range of the questionsAnswer array length
  const randomIndex = Math.floor(Math.random() * questionsAnswer.length);

  const [question, answer] = questionsAnswer[randomIndex];

  // Create HTML elements for the question and answer
  const questionElement = document.createElement("h2");
  questionElement.textContent = question;

  const answerElement = document.createElement("p");
  answerElement.textContent = answer;
  answerElement.style.display = "none"; // Initially hide the answer
  
  const buttonClick = document.querySelector("#answer");

  // Toggle the display of the answer when the question element is clicked
  questionElement.addEventListener("click", () => {
      speak(question); // Speak the question
  });

  // Toggle the display of the answer when the "Answer" button is clicked
  buttonClick.addEventListener("click", () => {
      if (answerElement.style.display === "none") {
          answerElement.style.display = "block";
         
      } else {
          answerElement.style.display = "none";
      }
  });

  answerElement.addEventListener("click", () => {
    speak(answer); // Speak the question
});

  const refreshPage = document.querySelector("#refresh");

  refreshPage.addEventListener("click", () => {
      window.location.reload();
  });

  // Get the container element from the DOM
  const container = document.getElementById("qaContainer");

  // Clear the container before appending new elements
  container.innerHTML = "";

  // Append the question and answer elements to the container
  container.appendChild(questionElement);
  container.appendChild(answerElement);

  const synth = window.speechSynthesis; // Initialize the speech synthesis API

  // Function to speak the provided text
  function speak(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
  }
}

// Call the function to display a random question and answer initially
displayRandomQuestion();