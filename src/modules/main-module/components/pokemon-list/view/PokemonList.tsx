import { GetPokemons } from '../api/getPokemons'

export const PokemonList = () => {
  const { data, isLoading, error } = GetPokemons()

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>

  return <div>{data?.results.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}</div>
}
