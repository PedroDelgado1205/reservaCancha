import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { subDays, startOfDay, addDays } from 'date-fns';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}
  canchas = [
    { titulo:`Cancha Fut11 "Epicentro Dorado"`, imagen: 'https://donpotrero.com/img/posts/2/medidas_lg.jpg', descripcion: `Haz de tu próxima reunión de amigos una experiencia olímpica en la Cancha Fut11 "Epicentro Dorado". Con dimensiones reglamentarias y una atmósfera grandiosa, este espacio es ideal para torneos épicos entre amigos. Las opciones de alquiler son flexibles, permitiéndote disfrutar de un ambiente profesional sin comprometer la diversión. ¿Estás listo para elevar tu juego y reservar el Epicentro Dorado para tu próximo encuentro futbolero?`, comentarios:[
      `Marcelo P: Una cancha de primera clase. Alquilamos para un torneo entre equipos locales y la Cancha Olímpica "Epicentro Dorado" realmente elevó el nivel. Las gradas añaden un toque profesional, ¡definitivamente regresaremos!`,`Isabel R: ¡Increíblemente impresionante! Reservamos para una fiesta de cumpleaños y la atmósfera olímpica hizo que todos se sintieran como verdaderos atletas. Las tarifas son razonables considerando la calidad del lugar.`,`Javier M: Ideal para eventos importantes. La Cancha Olímpica "Epicentro Dorado" es el lugar perfecto para torneos de alto nivel. El personal es profesional y el proceso de reserva es sencillo. ¡Recomendado para cualquier amante del fútbol!`,`Camila G: ¡Una experiencia única! La amplitud de la Cancha Olímpica "Epicentro Dorado" crea un ambiente épico. Jugamos un torneo entre amigos y todos quedamos impresionados. ¡Simplemente grandioso!`,`Fernando S: Reservamos para un evento de caridad y fue un rotundo éxito. El espacio olímpico eleva cualquier ocasión. ¡La Cancha Olímpica "Epicentro Dorado" es ahora nuestro lugar predilecto para eventos especiales!`
    ], },
    { titulo:`Cancha de Fut5 "Velocidad Rápida"`, imagen: 'https://elonce-media.elonce.com/fotos-nuevo/2020/07/19/o_1595159082.jpg', descripcion: `¡Sumérgete en la emoción del fútbol acelerado en la Cancha de Fut5 "Velocidad Rápida"! Perfecta para una partida rápida con amigos, esta cancha te ofrece un terreno de juego de última generación que hará que cada movimiento cuente. Con alquileres flexibles y tarifas asequibles, organizar un emocionante torneo entre amigos nunca fue tan fácil. ¿Listo para desafiar la velocidad?`, comentarios:[
      `Juan Carlos: ¡Increíble experiencia de juego rápido! La cancha de Fut5 "Velocidad Rápida" realmente cumple su nombre. Las paredes de cristal añaden un toque emocionante, ¡y el alquiler por horas hace que sea fácil organizar partidas con amigos después del trabajo!`,`Laura G: Perfecta para partidos rápidos y llenos de acción. ¡El suelo de última generación permite giros y movimientos sorprendentes! Reservamos para el fin de semana, y fue genial. Definitivamente, volveremos.`,`Eduardo R: Una cancha moderna y emocionante. Alquilamos para un torneo entre colegas y todos quedamos impresionados. El personal es amable y el proceso de reserva es muy sencillo. ¡Altamente recomendada!`,`Carolina M: Ideal para partidos con amigos después del trabajo. Las dimensiones justas y el ambiente dinámico hacen que cada juego sea emocionante. ¡La nueva favorita de nuestro grupo!`,`David S: Rápida, emocionante y fácil de reservar. La Cancha de Fut5 "Velocidad Rápida" es perfecta para quienes buscan diversión rápida y competitiva. ¡Las horas vuelan cuando estás aquí!`
    ] },
    { titulo:`Campo de Fut7 "Naturaleza Táctica"`, imagen: 'https://marcopark.mx/wp-content/uploads/2021/09/1.jpeg', descripcion: `Descubre la fusión perfecta entre la estrategia táctica y la belleza natural en nuestro Campo de Fut7 "Naturaleza Táctica". ¿Buscas un ambiente relajado pero competitivo para disfrutar con tus amigos? Con tarifas por hora y paquetes especiales para grupos, esta cancha ofrece un oasis futbolístico rodeado de naturaleza. ¡Reserva ahora para una experiencia única de fútbol y conexión con la naturaleza!`, comentarios:[
      `Sofía C: ¡Una experiencia única! Jugar en medio de la naturaleza le da un toque especial al juego. Las tarifas por hora son razonables, y el campo está en excelente estado. ¡Altamente recomendado para quienes buscan algo diferente!`,`Alejandro H: ¡Increíble! Alquilamos para celebrar un cumpleaños, y todos disfrutaron de la combinación de juego táctico y entorno natural. ¡Definitivamente, una opción diferente y refrescante!`,`Valentina D: Ideal para grupos grandes. El Campo de Fut7 "Naturaleza Táctica" ofrece un ambiente relajado y hermoso. Las tarifas por grupo son asequibles, ¡así que vale la pena para una tarde divertida con amigos!`,`Roberto L: Reservamos para un evento corporativo y fue un éxito total. La combinación de naturaleza y fútbol crea un ambiente único para la camaradería. ¡Recomiendo ampliamente este campo!`,`Ana María G: Perfecto para escapar del bullicio de la ciudad. La paz y tranquilidad del entorno natural hacen que jugar en este campo sea una experiencia única. ¡Ya estamos planeando nuestra próxima visita!`
    ] }

  ];

  reservarCancha() {
    // Lógica para reservar la cancha
  }

}
