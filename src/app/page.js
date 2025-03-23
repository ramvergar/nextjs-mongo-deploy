import { connectDB } from "@/libs/mongodb"
import Pokemon from '@/models/pokemon';

async function loadPokemons() {
  await connectDB()
  const pokemons = await Pokemon.find()
  return pokemons
}

async function Homepage() {
  const pokemons = await loadPokemons()
  console.log(pokemons)
 

  return (
    <div>
      <h1> Pokemons </h1>
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>
    </div>
  )
}
export default Homepage;  