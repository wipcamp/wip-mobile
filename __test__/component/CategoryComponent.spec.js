/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { categoryProblem } from '../../mocks/data'

import Category from '../../components/CategoryComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <Category
                categoryProblem={categoryProblem}
                problemTypeGetAllForCategory={jest.fn()}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})