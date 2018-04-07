/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { notification } from '../../mocks/data'

import ListCardNotification from '../../components/ListCardNotificationComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ListCardNotification
                notification={notification}
                navigation={{}}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})