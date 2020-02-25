import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render Card componentd', () => {
    const mockRobots = [
        {
        id:1,
        name:'John Snow',
        username:'JohnJohn',
        email:'john@email.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
;