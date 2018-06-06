import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { App } from '../App';
import { Header } from './components';

describe('<App />', () => {

    const renderedComponent = shallow(<App/>);

    it('should render the header', () => {
        expect(renderedComponent.find(Header).length).toBe(1)
    });

    it('should render some routes', () => {
        expect(renderedComponent.find(Route).length).not.toBe(0)
    });

});
