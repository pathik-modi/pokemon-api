import { useQuery } from '@tanstack/react-query'
import { fetchPokemonGeneration } from '../apis/pokemon'
import LoadingSpinner from './LoadingSpinner'
import { Link } from 'react-router-dom'

export default function PokemonList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['generation'],
    queryFn: () => fetchPokemonGeneration(1),
  })

  if (isLoading) {
    return LoadingSpinner()
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <>
      <h2>Pokémon in {data && data.region}:</h2>
      <ul>
        {data &&
          data.pokemon.map((p) => (
            <li key={p.id}>
              <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
            </li>
          ))}
      </ul>
    </>
  )
}
