import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import SearchBar from './SearchBar';
import { stateMock } from '../stateMock';
import * as Actions from '../actions/actions';

const mockStore = configureStore();
const store = mockStore(stateMock);

describe('<SearchBar />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<SearchBar store={store} />);
      const component = wrapper.dive();

      expect(component).toHaveLength(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    test('hides autocomplete box by default', () => {
      const wrapper = shallow(<SearchBar store={store} />);
      const component = wrapper.dive();

      expect(component.find('ul').getElement().props.style.visibility).toEqual('hidden');
    });
  });

  describe('onFocus', () => {
    test('shows autocomplete box when search bar is in focus', () => {
      const wrapper = shallow(<SearchBar store={store} />);
      const component = wrapper.dive();

      // by default
      expect(component.find('ul').getElement().props.style.visibility).toEqual('hidden');

      component.find('input').simulate('focus');

      expect(component.find('ul').getElement().props.style.visibility).toEqual('visible');
    });
  });

  describe('onBlur', () => {
    test('hides autocomplete box when search bar is not in focus', () => {
      const wrapper = shallow(<SearchBar store={store} />);
      const component = wrapper.dive();

      // by default
      expect(component.find('ul').getElement().props.style.visibility).toEqual('hidden');

      component.find('input').simulate('blur');

      expect(component.find('ul').getElement().props.style.visibility).toEqual('hidden');
    });

    test('hides autocomplete box when search bar is empty', () => {
      const wrapper = shallow(<SearchBar store={store} />);
      const component = wrapper.dive();

      // by default
      expect(component.find('ul').getElement().props.style.visibility).toEqual('hidden');

      component.find('input').simulate('focus');

      expect(component.find('ul').getElement().props.style.visibility).toEqual('visible');

      store.dispatch(Actions.clearSearch());

      expect(wrapper.dive().find('ul').getElement().props.style.visibility).toEqual('hidden');
    });
  });
});