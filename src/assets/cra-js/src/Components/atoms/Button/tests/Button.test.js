import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

const defaultProps = {
  sampleText: 'Sample',
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<Button {...finalProps} />);
};

describe('Scenario 1: Testing the initial sample code', () => {
  let wrapper = '';

  beforeEach(() => {
    wrapper = getWrapperSetup();
  });

  test('Unit Test 1: Should render component correctly', () => {
    wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Unit Test 2: Simulate Click Event', () => {
    wrapper = shallow(<Button />);
    wrapper.simulate('click');
    expect(wrapper.text()).toBe('');
  });
});
