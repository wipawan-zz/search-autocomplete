// action types
export const CHANGE_QUERY = "CHANGE_QUERY";
export const FETCH_REPOS = "FETCH_REPOS";
export const CLEAR_AUTOCOMPLETE = 'CLEAR_AUTOCOMPLETE';
export const SELECT_ITEM = 'SELECT_ITEM';

export function changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    query: query
  };
}

export function fetchRepos() {
  return {
    type: FETCH_REPOS
  };
}

export function clearSearch() {
  return {
    type: CLEAR_AUTOCOMPLETE
  }
}

export function selectItem(item) {
  return {
    type: SELECT_ITEM,
    selectedItem: item
  }
}