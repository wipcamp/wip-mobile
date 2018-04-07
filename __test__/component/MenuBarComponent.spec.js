/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import MenuBar from '../../components/MenuBarComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <MenuBar>Test</MenuBar>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('rendering top', () => {
    const tree = renderer
        .create(
            <MenuBar top>Test</MenuBar>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})