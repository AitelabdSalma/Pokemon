import * as actionTypes from "../constants/types";
import {
  getPokemonType,
  getPokemonTypeByID,
} from "../constants/api";

import { ActionStart, ActionSuccess, ActionFail } from "../../utils/utility";

export const getPokemonTypeByIDAction = name => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE));
    return getPokemonTypeByID(name)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE, error)))
  }
}

export const getPokemonTypeAction = url => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.TYPE));
    return getPokemonType(url)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.TYPE, data)))
      .catch(error => dispatch(ActionFail(actionTypes.TYPE, error)))
  }
}


