/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { problem } from '../../mocks/data'

import ProblemButton from '../../components/ProblemButtonComponent'

describe('rendering', () => {
    it('solve', () => {
        const tree = renderer
            .create(
                <ProblemButton
                    is_solve
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('reject', () => {
        const tree = renderer
            .create(
                <ProblemButton
                    not_solve
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})