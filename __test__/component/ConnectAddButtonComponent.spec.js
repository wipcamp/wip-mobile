/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { newProblem } from '../../mocks/data'
import ConnectAddButton from '../../components/ConnectAddButtonComponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        NewProblemReducer: { newProblem }
    }
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<ConnectAddButton {...props} />)
        })
        it('should have add button', () => {
            expect(wrapper.find('AddButton')).toHaveLength(1)
        })
        it('new problem props should matches with initState', () => {
            expect(wrapper.prop('newproblem')).toEqual(
                newProblem
            )
        })
    })
})