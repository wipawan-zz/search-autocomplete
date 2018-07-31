import React from 'react';
import { shallow } from 'enzyme';

import Details from './Details';

import { stateMock } from '../stateMock';

describe('<Details />', () => {
  test('renders the component', () => {
    const details = shallow(<Details selectedItem={stateMock.selectedItem} />);

    expect(details).toMatchSnapshot();
  });

  describe('onClick', () => {
    test('shows correct repository title', () => {
      const details = shallow(<Details selectedItem={stateMock.selectedItem} />);
  
      expect(details.find('.details-repo-title').getElement().props.children).toMatchSnapshot();
    });

    test('correctly calls click handler', () => {
      const details = shallow(<Details selectedItem={stateMock.selectedItem} />);
      global.open = jest.fn();

      details.find('.details-repo-title').simulate('click');
  
      expect(global.open).toBeCalled();;
    });
  });
});