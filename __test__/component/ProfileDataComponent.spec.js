/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import ProfileData from '../../components/ProfileDataComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ProfileData
                title="Test"
                detail="Test"
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})