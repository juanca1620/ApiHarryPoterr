import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Character from '@/interfaces/Character'
import { watch } from 'vue'

export const useCharacteresStore = defineStore('Characters', () => {
  const indexMenor = ref(0)
  const indexMayor = ref(0)
  const Characters = ref<Character[]>([])
  const isLoading = ref(true)
  const errorState = ref<Error | null>(null)
  const fetchCharacters = async () => {
    console.log('a')
    const charactersFuntion: Character[] = []

    for (let index = indexMenor.value; index <= indexMayor.value; index++) {
      isLoading.value = true
      const response = await fetch(
        `https://potterapi-fedeperin.vercel.app/es/characters?index=${index}`,
      )

      if (!response.ok || index >= 25) {
        errorState.value = new Error()
        isLoading.value = false
        return
      }

      const character: Character = await response.json()
      charactersFuntion.push(character)
    }
    Characters.value = charactersFuntion
    isLoading.value = false
    errorState.value = null
    console.log(isLoading.value, Characters.value)
  }
  watch([indexMenor, indexMayor], fetchCharacters)
  return { indexMenor, indexMayor, Characters, errorState, isLoading }
})
