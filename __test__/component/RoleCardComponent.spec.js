/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import RoleCard from '../../components/RoleCardComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <RoleCard
                key={1}
                ios="test"
                android="test"
                role="test"
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})