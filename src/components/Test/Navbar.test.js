import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

test('Navbar renders correctly', () => {
  const component = renderer.create(
    <Router>
      <Navbar />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
