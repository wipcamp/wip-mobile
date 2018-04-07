/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import BackButton from '../../components/BackButtonComponent'

it('rendering', () => {
    const tree = renderer
        .create(<BackButton />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})