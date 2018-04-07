/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { problem } from '../../mocks/data'

import ListCardProblem from '../../components/ListCardProblemComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ListCardProblem
                problem={problem}
                navigation={{}}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})