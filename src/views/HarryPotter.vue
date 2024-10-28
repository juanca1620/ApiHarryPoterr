<template>
  <BoardCards />
  <div v-if="!store.isLoading" class="ranges-modificator">
    <h3 class="modificator-text">
      ¿Quieres mas personajes? pues colola el rango que desees 🕵️(Secreto: si
      colocas un numero menor que 0 o mayor que 24 saldra un error)
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

<style></style>
