/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { notification } from '../../mocks/data'

import ConnectListCardNotification from '../../components/ConnectListCardNotificationComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectListCardNotification
                store={
                    mockStore({
                        NotificationReducer: { notification }
                    })
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})