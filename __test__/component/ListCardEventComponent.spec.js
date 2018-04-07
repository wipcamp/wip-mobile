/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { timetable } from '../../mocks/data'

import ListCardEvent from '../../components/ListCardEventComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ListCardEvent
                timetable={timetable}
                navigation={{}}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})