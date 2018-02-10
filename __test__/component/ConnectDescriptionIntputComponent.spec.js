/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { newProblem, problem } from '../../mocks/data'
import ConnectDescriptionInput from '../../components/ConnectDescriptionInputComponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        NewProblemReducer: { newProblem },
        ReportReducer: { problem }
    }

    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<ConnectDescriptionInput {...props} />)
        })
        it('should have Description Input', () => {
            expect(wrapper.find('DescriptionInput')).toHaveLength(1)
        })
        it('description props should match with initState', () => {
            expect(wrapper.prop('description')).toEqual(
                newProblem.description
            )
        })
        it('problem props should matches with initState', () => {
            expect(wrapper.prop('problem')).toEqual(
                problem
            )
        })
    })
})