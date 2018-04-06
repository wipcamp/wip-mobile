/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import { newProblem } from '../../mocks/data'

import ConnectDescriptionInput from '../../components/ConnectDescriptionInputComponent'

it('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        NewProblemReducer: { newProblem }
    }
    const tree = renderer
        .create(
            <ConnectDescriptionInput
                store={
                    mockStore(storeStateMock)
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})