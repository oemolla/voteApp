import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

configure({ adapter: new Adapter() });

describe('<Home /> unit test', () => {
  test('renders without crashing', () => {
    expect(shallow(<Home />));
  });
});