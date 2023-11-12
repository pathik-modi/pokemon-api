import { useQuery } from '@tanstack/react-query'
import { fetchPokemonGeneration } from '../apis/pokemon'

export default function PokemonList() {
  const { isPending, error, data } = useQuery({
    queryKey: ['generation'],
    queryFn: () => fetchPokemonGeneration(1),
  })

  if (isPending) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <>
      <h2>Pokémon in {data.region}:</h2>
      <ul>{data && data.pokemon.map((p) => <li key={p.id}>{p.name}</li>)}</ul>
    </>
  )
}
