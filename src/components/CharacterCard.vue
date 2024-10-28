<template>
  <div class="character-card">
    <div class="character-names">
      <h1 class="character-title -fullname">{{ character.fullName }}</h1>
      <h4 class="character-nickname">{{ character.nickname }}</h4>
    </div>
    <img :src="character.image" alt="imagen personaje" />
    <div class="character-dates">
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

<style></style>
