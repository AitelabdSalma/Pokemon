import * as actionTypes from "../constants/types";
import {
  getPokemonByName,
  getPokemonByID,
  getPokemonList,
  getPokemon
} from "../constants/api";

import { ActionStart, ActionSuccess, ActionFail } from "../../utils/utility";

export const getPokemonByNameAction = name => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.POKEMOM));
    return getPokemonByName(name)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.POKEMOM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.POKEMOM, error)))
  }
}

export const getPokemonAction = url => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.POKEMOM));
    return getPokemon(url)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.POKEMOM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.POKEMOM, error)))
  }
}


export const getPokemonByIDAction = id => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.POKEMOM));
    return getPokemonByID(id)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.POKEMOM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.POKEMOM, error)))
  }
}

export const getPokemonListAction = (limit, offset) => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.POKEMOM));
    return getPokemonList(limit, offset)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.POKEMOM, data)))
      .catch(error => dispatch(ActionFail(actionTypes.POKEMOM, error)))
  }
}
