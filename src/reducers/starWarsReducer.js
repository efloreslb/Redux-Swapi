import { PEOPLE_FETCH, PEOPLE_SUCCESS, PEOPLE_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case PEOPLE_FETCH:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case PEOPLE_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: null
      }
    case PEOPLE_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
