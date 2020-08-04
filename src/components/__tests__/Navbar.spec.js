import React from 'react';
import { mount } from 'enzyme';
import Navbar from "../Navbar";

test('hello world', () => {
  const wrapper = mount(<Navbar />);
  expect(wrapper.text()).toMatch('Hello Jest!');
});
