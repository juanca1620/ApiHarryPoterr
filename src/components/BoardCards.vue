<template>
  <div class="board">
    <div class="board-loading" v-if="store.isLoading">
      <h1>Esperando el poder...</h1>
    </div>
    <div class="board-error" v-else-if="store.errorState">
      <h1>Error al cargar los componentes 🧙🏻‍♂️, la magia oscura gano esta vez</h1>
      <img src="../assets/imagen error.gif" alt="Imagen error" />
    </div>
    <div v-else class="character-board">
      <CharacterCard
        v-for="character in store.Characters"
        :key="character.index"
        :character="character"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useCharacteresStore } from '@/stores/CharacteresStore'
import { defineComponent, onMounted } from 'vue'
import CharacterCard from './CharacterCard.vue'

export default defineComponent({
  name: 'characterList',
  setup() {
    const store = useCharacteresStore()
    onMounted(() => {
      console.log('si')
      store.indexMenor = 0
      store.indexMayor = 4
    })
    return {
      store,
    }
  },
  components: {
    CharacterCard,
  },
})
</script>
