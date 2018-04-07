/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import mockStore from '../../mocks/redux-mock-store'
import { categoryProblem } from '../../mocks/data'

import ConnectCategory from '../../components/ConnectCategoryComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <ConnectCategory
                store={
                    mockStore({
                        CategoryReducer: { categoryProblem }
                    })
                }
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})