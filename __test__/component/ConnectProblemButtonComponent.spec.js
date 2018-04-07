/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { problem } from '../../mocks/data'

import ConnectProblemButton from '../../components/ConnectProblemButtonComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectProblemButton
                store={
                    mockStore({
                        ReportReducer: { problem }
                    })
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})