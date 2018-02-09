/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { problem, filter } from '../../mocks/data'
import ConnectListCardProblem from '../../components/ConnectListCardProblemComponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        ReportReducer: { problem },
        FilterReducer: { filter }
    }
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<ConnectListCardProblem {...props} />)
        })
        it('should have ListCardProblem', () => {
            expect(wrapper.find('ListCardProblem')).toHaveLength(1)
        })
        it('problem props should match with initState', () => {
            expect(wrapper.prop('problem')).toEqual(
                problem
            )
        })
        it('filter props should matches with initState', () => {
            expect(wrapper.prop('filter')).toEqual(
                filter
            )
        })
    })
})