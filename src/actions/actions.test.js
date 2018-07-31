import configureStore from 'redux-mock-store';

// Actions to be tested
import * as Actions from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches correct query when input changes', () => {
    const expectedAction = [
      {
        type: Actions.CHANGE_QUERY,
        query: 'test'
      }
    ];

    store.dispatch(Actions.changeQuery('test'));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches correct action.type to fetch repositories', () => {
    const expectedAction = [
      {
        type: Actions.FETCH_REPOS
      }
    ];

    store.dispatch(Actions.fetchRepos());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches correct action.type to clear search input', () => {
    const expectedAction = [
      {
        type: Actions.CLEAR_AUTOCOMPLETE
      }
    ];

    store.dispatch(Actions.clearSearch());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches correct item when item is selected', () => {
    const expectedAction = [
      {
        type: Actions.SELECT_ITEM,
        selectedItem: {
          "name": "test"
        }
      }
    ];

    store.dispatch(Actions.selectItem({
      "name": "test"
    }));
    expect(store.getActions()).toEqual(expectedAction);
  });
});