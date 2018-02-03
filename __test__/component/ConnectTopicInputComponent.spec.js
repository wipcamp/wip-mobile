/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { newProblem, problem } from '../../mocks/data'
import ConnectTopicInput from '../../components/ConnectTopicInputComponent'

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
                store: mockStore(storeStateMock),
                view: false
            }
            wrapper = shallow(<ConnectTopicInput {...props} />)
        })
        it('should have TopicInput', () => {
            expect(wrapper.find('TopicInput')).toHaveLength(1)
        })
        it('topic props should matches with initState', () => {
            expect(wrapper.prop('topic')).toEqual(
                newProblem.topic
            )
        })
        it('problem props should match with initState', () => {
            expect(wrapper.prop('problem')).toEqual(
                problem
            )
        })
    })
})