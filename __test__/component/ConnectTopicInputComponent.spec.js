/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { newProblem } from '../../mocks/data'

import ConnectTopicInput from '../../components/ConnectTopicInputComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectTopicInput
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