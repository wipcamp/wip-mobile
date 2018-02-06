/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { categoryProblem, newProblem } from '../../mocks/data'
import ConnectCategory from '../../components/ConnectCategoryCoponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        CategoryReducer: { categoryProblem },
        NewProblemReducer: { newProblem }
    }
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<ConnectCategory {...props} />)
        })
        it('should have Category', () => {
            expect(wrapper.find('Category')).toHaveLength(1)
        })
        it('category problem props should matches with initState', () => {
            expect(wrapper.prop('categoryProblem')).toEqual(
                categoryProblem
            )
        })
        it('problem_type_id props should match with initState', () => {
            expect(wrapper.prop('category')).toEqual(
                newProblem.problem_type_id
            )
        })
    })
})