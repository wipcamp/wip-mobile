/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import AddButton from '../../components/AddButtonComponent'

it('rendering', () => {
    const tree = renderer
        .create(<AddButton />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})