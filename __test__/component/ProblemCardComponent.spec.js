/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { problem } from '../../mocks/data'

import ProblemCard from '../../components/ProblemCardComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ProblemCard
                data={problem[0]}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})