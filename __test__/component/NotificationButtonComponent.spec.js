/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import NotificationButton from '../../components/NotificationButtonComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <NotificationButton />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})