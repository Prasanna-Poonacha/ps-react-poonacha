import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={() => { }}
        value="Uissdfhjh" />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('toggles the input type when show/hide clicked', () => {
    const wrapper = shallow(<PasswordInput
        htmlId="test"
        name="test"
        value=""
        onChange={() => { }}
        showVisibilityToggle />
    );

    //password inout should have a type of password initially
    expect(wrapper.find({ type: 'password' })).toHaveLength(1);
    expect(wrapper.find({ type: 'text' })).toHaveLength(0);

    //simiulate a click on the toggle button
    wrapper.find('a').simulate('click');

    //Password input should have type of text after clicking toggle
    expect(wrapper.find({ type: 'password' })).toHaveLength(0);
    expect(wrapper.find({ type: 'text' })).toHaveLength(1);
})