/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { notification } from '../../mocks/data'

import NotificationCard from '../../components/NotificationCardComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <NotificationCard
                data={notification[0]}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})