import reducers from './reducers';

describe('reducers', () => {
  describe('initialState', () => {
    test('is correct', () => {
      const action = {
        type: 'DUMMY_ACTION'
      };
      expect(reducers(undefined, action)).toMatchSnapshot();
    });
  });

  describe('change query', () => {
    test('returns correct query', () => {
      const action = {
        type: "CHANGE_QUERY",
        query: "q"
      };
      expect(reducers(undefined, action)).toMatchSnapshot();
    });
  });
  
  describe('fetch repos success', () => {
    test('updates results after successfully fetch repos', () => {
      const action = {
        type: "FETCH_REPOS_SUCCESS",
        results: [
          "dummy_items"
        ]
      };
      expect(reducers(undefined, action)).toMatchSnapshot();
    });
  });

  describe('clear autocomplete', () => {
    test('empties results array in the store', () => {
      const action = {
        type: "CLEAR_AUTOCOMPLETE",
      };
      expect(reducers(undefined, action)).toMatchSnapshot();
    });
  });

  describe('select item', () => {
    test('select an item', () => {
      const action = {
        type: "SELECT_ITEM",
        selectedItem: {
          "item": "dummyItem"
        }
      };
      expect(reducers(undefined, action)).toMatchSnapshot();
    });
  });
});