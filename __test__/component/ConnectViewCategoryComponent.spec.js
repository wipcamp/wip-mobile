/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { categoryProblem, problem } from '../../mocks/data'
import CannectViewCategory from '../../components/ConnectViewCategoryComponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        CategoryReducer: { categoryProblem },
        ReportReducer: { problem }
    }

    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<CannectViewCategory {...props} />)
        })
        it('should have view category', () => {
            expect(wrapper.find('ViewCategory')).toHaveLength(1)
        })
        it('category problem props should match with initState', () => {
            expect(wrapper.prop('categoryProblem')).toEqual(
                categoryProblem
            )
        })
        it('problem props should matches with initState', () => {
            expect(wrapper.prop('problem')).toEqual(
                problem
            )
        })
    })
})

