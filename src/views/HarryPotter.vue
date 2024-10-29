<template>
  <header class="header">
    <h1 class="header-title">Harry Potter y Los Misterios del Mundo Mágico</h1>
    <div class="team-names">
      <h2>Equipo de Trabajo:</h2>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/valeria_valencia217?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            >Laura Valeria Valencia Gonzales</a
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com/juanca162072?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            >Juan Camilo Soto Soto</a
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com/san_tiago7257/?hl=es-la"
            target="_blank"
            >Kevin Santiago Aguirre Giraldo</a
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com/luismiguelsepulveda5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            >Luis Miguel Sepulveda Quintero</a
          >
        </li>
      </ul>
    </div>
  </header>

  <BoardCards />
  <div v-if="!store.isLoading" class="ranges-modificator">
    <h3 class="modificator-text">
      ¿Quieres más personajes? Pues coloca el rango que desees 🕵️ (Secreto: si
      colocas un número menor que 0 o mayor que 24 saldrá un error)
    </h3>
    <input type="number" v-model="rangoMin" class="modificator-input" />
    <input type="number" v-model="rangoMax" class="modificator-input" />
    <button
      @click="
        () => {
          store.indexMenor = rangoMin
          store.indexMayor = rangoMax
        }
      "
    >
      🧙🏻‍♂️
    </button>
  </div>
</template>

<script lang="ts">
import { useCharacteresStore } from '@/stores/CharacteresStore'
import BoardCards from '@/components/BoardCards.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    BoardCards,
  },
  setup() {
    const store = useCharacteresStore()
    const rangoMin = ref(0)
    const rangoMax = ref(5)
    return { store, rangoMin, rangoMax }
  },
})
</script>

<style>
/* Estilo para los nombres del equipo */
.team-names ul {
  list-style: none;
  padding: 0;
}

.team-names li {
  font-size: 1.1em; /* Tamaño de fuente para los nombres */
  margin: 5px 0;
  transition: transform 0.3s; /* Efecto de transformación al pasar el ratón */
}

.team-names li a {
  color: white; /* Color blanco para el texto */
  text-decoration: none; /* Quita la línea de subrayado */
  transition:
    color 0.3s,
    transform 0.3s;
}

.team-names li a:hover {
  color: #d3a625; /* Cambia el color al pasar el ratón */
  transform: scale(1.05); /* Agranda el texto */
}

/* Estilos generales para el fondo */
body {
  font-family: 'Arial', sans-serif;
  background-image: url('https://th.bing.com/th/id/R.25b6316388776ecd19c1aa7ceea7b32a?rik=HkGBkiW9qJ3%2fEg&pid=ImgRaw&r=0');
  color: #333;
  margin: 0;
  padding: 20px;
}

/* Estilo del encabezado */
/* Estilo del encabezado */
.header {
  text-align: center;
  background-image: url('https://th.bing.com/th/id/R.942117d0c5263051e524bd5293a47cc4?rik=Eqra%2bzOzCDcPjg&pid=ImgRaw&r=0');
  background-size: cover;
  padding: 10px 7px; /* Reduce el padding para hacer el header más pequeño */
  color: #fff;
  border-radius: 10px;
  margin-bottom: 10px; /* Reduce el margen inferior */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Estilo del título del encabezado */
.header-title {
  font-family: 'Harry Potter', sans-serif;
  font-size: 3em; /* Tamaño de fuente más grande */
  margin: 0;
  letter-spacing: 2px; /* Espaciado entre letras */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra de texto para resaltar */
}

/* Estilo para los nombres del equipo */
.team-names {
  margin-top: 20px;
  font-size: 1.2em; /* Aumenta el tamaño de fuente de los nombres */
  line-height: 1.5; /* Espaciado entre líneas para mejor legibilidad */
}

/* Estilo para los nombres del equipo */
.team-names h2 {
  font-size: 1.5em;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Sombra de texto */
}

/* Estilo para la lista de nombres */
.team-names ul {
  list-style: none;
  padding: 0;
}

.team-names li {
  font-size: 1.1em; /* Tamaño de fuente para los nombres */
  margin: 5px 0;
  transition: transform 0.3s; /* Efecto de transformación al pasar el ratón */
}

.team-names li:hover {
  transform: scale(1.05); /* Efecto hover para agrandar el texto */
  color: #d3a625; /* Cambia el color al pasar el ratón */
}

/* Estilo del contenedor principal */
.ranges-modificator {
  margin: 20px;
  padding: 20px;
  border: 2px solid #d3a625;
  border-radius: 8px;
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Fondo ligeramente transparente */
  text-align: center;
}

/* Resto de los estilos (sin cambios) */
.board {
  margin: 20px auto;
}

.board-loading,
.board-error {
  text-align: center;
  margin: 20px;
}

/* Contenedor para las tarjetas de personajes */
.character-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

/* Estilos para las tarjetas de personajes */
.character-card {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los elementos */
  margin: 15px; /* Espaciado entre las tarjetas */
}

/* Estilo para las imágenes de personajes */
.character-image {
  display: block;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

/* Efecto hover en las imágenes */
.character-image:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Estilo para los nombres de personajes */
.character-name {
  font-family: 'Georgia', serif; /* Tipografía más elegante */
  font-size: 2em; /* Tamaño de fuente más grande */
  color: #3c3c9b; /* Color para resaltar */
  text-align: center; /* Centrado */
  margin-top: 10px; /* Espacio entre la imagen y el nombre */
}

.ranges-modificator {
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #d3a625;
  border-radius: 8px;
  background-image: url('https://th.bing.com/th/id/R.942117d0c5263051e524bd5293a47cc4?rik=Eqra%2bzOzCDcPjg&pid=ImgRaw&r=0');
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro con transparencia */
}

.modificator-text {
  font-size: 1.4em;
  color: #3c3c9b;
  font-family: 'Georgia', serif;
  margin-bottom: 15px;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.modificator-input {
  padding: 10px 15px;
  font-size: 1.2em;
  width: 80px;
  border: 2px solid #3c3c9b;
  border-radius: 8px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.selection-button {
  padding: 12px 25px;
  font-size: 1.3em;
  color: #fff;
  background-color: #3c3c9b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.selection-button:hover {
  background-color: #2c2c6b;
}

/* Estilo general */
h3 {
  font-size: 2.2em;
  color: #3c3c9b;
  text-align: center;
}

/* Estilo de mensaje secreto */
.secret-message {
  font-size: 0.9em;
  color: #888;
  text-align: center;
  margin-top: 5px;
}

/* Estilo para el formulario de rango */
.range-form {
  margin-top: 20px;
  text-align: center;
}

.range-form input[type='number'] {
  padding: 8px;
  width: 50px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 0 5px;
}

.range-form button {
  padding: 8px 16px;
  background-color: #3c3c9b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.range-form button:hover {
  background-color: #8989af;
}

/* Ajustes para móviles */
@media (max-width: 600px) {
  .container {
    padding: 10px;
  }

  h1 {
    font-size: 1.8em;
  }

  .data-section h3 {
    font-size: 1.5em;
  }

  .range-form input[type='number'] {
    width: 40px;
  }

  .range-form button {
    padding: 6px 12px;
  }
}
.ranges-modificator,
.ranges-modificator h3,
.ranges-modificator .modificator-text,
.ranges-modificator button {
  color: white; /* Aplica color blanco solo a los elementos dentro de .ranges-modificator */
}
</style>

pero quiero que la letra de ese duv en especidico sea blanca
