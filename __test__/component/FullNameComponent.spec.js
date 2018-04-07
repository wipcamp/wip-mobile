/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import FullName from '../../components/FullNameComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <FullName>Test</FullName>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})