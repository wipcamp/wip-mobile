/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { newProblem } from '../../mocks/data'

import ConnectAddButton from '../../components/ConnectAddButtonComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectAddButton
                store={
                    mockStore({
                        NewProblemReducer: { newProblem }
                    })
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})