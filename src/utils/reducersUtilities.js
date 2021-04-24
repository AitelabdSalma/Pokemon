
import * as actionTypes from "../stores/constants/types";



export const updatedObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const ActionStart = action => {
  return {
    type: `${action}_${actionTypes.START}`
  }
}

export const ActionSuccess = (action, data) => {
  return {
    type: `${action}_${actionTypes.SUCCESS}`,
    data
  }
}

export const ActionFail = (action, error) => {
  return {
    type: `${action}_${actionTypes.FAIL}`,
    error
  }
}

