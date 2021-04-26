import { fetchData } from "../../utils/utility";

//const URL = `${process.env.REACT_APP_EER_BACKEND_PROXY_URL}`
const URL = `https://pokeapi.co/api/v2`

export const getPokemonByName = name => {
  return fetchData(`${URL}/pokemon/${name}`, "GET");
}

export const getPokemon = url => {
  return fetchData(url, "GET");
}

export const getPokemonByID = id => {
  return fetchData(`${URL}/pokemon/${id}`, "GET");
}

export const getPokemonTypeByID = id => {
  return fetchData(`${URL}/pokemon/${id}`, "GET");
}

export const getPokemonType = url => {
  return fetchData(url, "GET");
}


export const getPokemonAbilityByID = id => {
  return fetchData(`${URL}/pokemon/${id}`, "GET");
}


export const getPokemonList = (limit, offset) => {
  return fetchData(`${URL}/pokemon?limit=${limit}&offset=${offset}`, "GET");
}

