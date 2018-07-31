const initialState = {
  query: "",
  results: [],
  selectedItem: null,
  error: null
};

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_QUERY':
      return {
        ...state,
        query: action.query
      };
    case 'FETCH_REPOS_SUCCESS':
      return {
        ...state,
        results: action.results
      };
    case 'CLEAR_AUTOCOMPLETE':
      return {
        ...state,
        results: []
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        selectedItem: action.selectedItem
      };
    case 'API_CALL_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}