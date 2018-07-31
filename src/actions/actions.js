// action types
const CHANGE_QUERY = "CHANGE_QUERY";
const FETCH_REPOS = "FETCH_REPOS";
const CLEAR_AUTOCOMPLETE = 'CLEAR_AUTOCOMPLETE';
const SELECT_ITEM = 'SELECT_ITEM';

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