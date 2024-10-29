<template>
  <div class="character-card">
    <div class="character-names">
      <h1 class="character-title -fullname">{{ character.fullName }}</h1>
      <h4 class="character-nickname">{{ character.nickname }}</h4>
    </div>
    <img
      :src="character.image"
      alt="imagen personaje"
      class="character-image"
    />
    <!-- Nuevo cuadro de información -->
    <div class="character-info">
      <h1 class="character-title -dates">Datos</h1>
      <ol v-if="character.children.length > 0" class="character-list-childs">
        <h5 class="character-title -childs-title">hijos</h5>
        <li
          class="children"
          v-for="(child, index) in character.children"
          :key="index"
        >
          {{ child }}
        </li>
      </ol>
      <h5 v-else class="character-childs">No tiene hijos</h5>
      <h5 class="character-birthdate">Cumpleaños: {{ character.birthdate }}</h5>
      <h5 class="character-actor">Actor: {{ character.interpretedBy }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import type Character from '@/interfaces/Character'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    character: {
      type: Object as () => Character,
      required: true,
    },
  },
})
</script>

<style>
.character-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  width: 455px;
  height: 1075px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.7);
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.character-title.-fullname {
  font-family: 'Harry Potter', sans-serif;
  font-size: 2.5em;
  color: #3c3c9b;
  text-align: center;
  margin: 10px 0;
}

.character-nickname {
  font-family: 'Georgia', serif;
  font-size: 1.5em;
  color: #6c757d;
  text-align: center;
}

.character-image {
  display: block;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.character-image:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.7);
}

/* Nuevo cuadro de información */
.character-info {
  margin-top: 15px;
  padding: 20px;
  background-color: lightgray;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  margin-top: 7%;
  width: 70%;
  height: 35%;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.7);
}

.character-info:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.character-title.-dates {
  font-family: 'Harry Potter', sans-serif;
  font-size: 2em;
  color: #3c3c9b;
  text-align: center; /* Centra el título "Datos" */
  margin: 10px 0;
}

.character-title.-childs-title {
  font-family: 'Harry Potter', sans-serif;
  font-size: 1.5em; /* Tamaño de fuente más pequeño para "hijos" */
  color: #3c3c9b;
  margin: 10px 0;
  text-align: center;
}

.character-birthdate,
.character-actor,
.character-childs,
.children {
  font-family: 'Arial', sans-serif;
  font-size: 1.2em;
  color: #000; /* Cambia el color de la información a negro */
  margin: 5px 0;
}

.character-list-childs {
  list-style-type: none;
  padding-left: 0;
}

.children {
  font-family: 'Georgia', serif;
}

.character-childs {
  font-style: italic;
  color: #000; /* Color negro */
}
</style>
