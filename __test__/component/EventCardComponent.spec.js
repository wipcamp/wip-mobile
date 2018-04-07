/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { timetable } from '../../mocks/data'

import EventCard from '../../components/EventCardComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <EventCard
                navigation={{
                    navigate: jest.fn()
                }}
                data={timetable[0]}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})