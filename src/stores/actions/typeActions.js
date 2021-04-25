import * as actionTypes from "../constants/types";
import {
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

