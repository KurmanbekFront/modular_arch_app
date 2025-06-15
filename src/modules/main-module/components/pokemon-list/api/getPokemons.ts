import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { PokemonResponse } from '../types/types.ts'

export const GetPokemons = () => {
  return useQuery<PokemonResponse>({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const { data } = await axios.get<PokemonResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      )
      return data
    },
  })
}
