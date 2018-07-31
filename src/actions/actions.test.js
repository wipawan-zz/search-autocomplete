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
    store.dispatch(Actions.changeQuery('test'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches correct action.type to fetch repositories', () => {
    store.dispatch(Actions.fetchRepos());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches correct action.type to clear search input', () => {
    store.dispatch(Actions.clearSearch());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches correct item when item is selected', () => {
    store.dispatch(Actions.selectItem({
      "name": "test"
    }));
    expect(store.getActions()).toMatchSnapshot();
  });
});