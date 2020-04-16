import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

const defaultProps = {
  sampleHeading: 'Sample',
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<App {...finalProps} />);
};

describe('Scenario 1: Testing the initial sample code', () => {
  let wrapper = '';

  beforeEach(() => {
    wrapper = getWrapperSetup();
  });

  test('Unit Test 1: Should render component correctly', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Test one', () => {
    expect(2).toBe(2);
  });
});
