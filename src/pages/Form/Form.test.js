import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './Form';

configure({ adapter: new Adapter() });

describe('<Form /> unit test', () => {
  test('renders without crashing', () => {
    expect(shallow(<Form />));
  });
});