/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { problem } from '../../mocks/data'
import ConnectViewDate from '../../components/ConnectViewDateComponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        ReportReducer: { problem }
    }

    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<ConnectViewDate {...props} />)
        })
        it('should have ViewDate', () => {
            expect(wrapper.find('ViewDate')).toHaveLength(1)
        })
        it('problem props should match with initState', () => {
            expect(wrapper.prop('problem')).toEqual(
                problem
            )
        })
    })
})