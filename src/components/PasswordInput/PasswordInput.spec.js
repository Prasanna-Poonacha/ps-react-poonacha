import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={() => { }}
        value="Uissdfhjh" />).toJSON();
    expect(tree).toMatchSnapshot();
})
