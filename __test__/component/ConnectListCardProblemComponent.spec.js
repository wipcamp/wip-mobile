/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { problem } from '../../mocks/data'

import ConnectListCardProblem from '../../components/ConnectListCardProblemComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectListCardProblem
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