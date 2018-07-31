import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import RepoDetails from './RepoDetails';
import Details from '../components/Details';
import { stateMock } from '../stateMock';

const mockStore = configureStore();
const store = mockStore(stateMock);

describe('<RepoDetails />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<RepoDetails store={store} />);
      const component = wrapper.dive();

      expect(component.find(Details)).toHaveLength(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});