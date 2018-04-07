/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import MenuIcon from '../../components/MenuIconComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <MenuIcon
                function={jest.fn()}
                icon={{}}
                text="test"
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('rendering two', () => {
    const tree = renderer
        .create(
            <MenuIcon
                function={jest.fn()}
                icon={{}}
                text="test"
                two
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})