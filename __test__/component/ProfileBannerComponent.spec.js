/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import ProfileBanner from '../../components/ProfileBannerComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ProfileBanner />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})