import * as actionTypes from "../constants/types";
import { ActionStart, ActionSuccess, ActionFail } from "../../utils/utility";
import { getPokemonAbilityByID } from "../constants/api";


export const getPokemonAbilityByIDAction = id => {
  return dispatch => {
    dispatch(ActionStart(actionTypes.ABILITY));
    return getPokemonAbilityByID(id)
      .then(res => res.json())
      .then(data => dispatch(ActionSuccess(actionTypes.ABILITY, data)))
      .catch(error => dispatch(ActionFail(actionTypes.ABILITY, error)))
  }
}
