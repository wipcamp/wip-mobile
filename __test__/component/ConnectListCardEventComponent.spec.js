import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { timetable } from '../../mocks/data'

import ConnectListCardEvent from '../../components/ConnectListCardEventComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectListCardEvent
                store={
                    mockStore({
                        TimetableReducer: { timetable }
                    })
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})