/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { priority } from '../../mocks/data'

import ConnectPriority from '../../components/ConnectPriorityComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectPriority
                store={
                    mockStore({
                        PriorityReducer: { priority }
                    })
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})