/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { problem } from '../../mocks/data'
import ConnectViewSwitch from '../../components/ConnectViewSwitchComponent'

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
            wrapper = shallow(<ConnectViewSwitch {...props} />)
        })
        it('should have ViewSwitch', () => {
            expect(wrapper.find('ViewSwitch')).toHaveLength(1)
        })
        it('problem props should match with initState', () => {
            expect(wrapper.prop('problem')).toEqual(
                problem
            )
        })
    })
})