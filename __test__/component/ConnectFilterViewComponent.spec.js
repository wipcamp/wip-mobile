/**
 * @jest-environment node
 */

import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { filter, filterView } from '../../mocks/data'
import ConnectFilterView from '../../components/ConnectFilterViewComponent'

describe('rendering', () => {
    const mockStore = configureStore()
    const storeStateMock = {
        FilterReducer: { 
            filter,
            filterView
        }
    }
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                store: mockStore(storeStateMock)
            }
            wrapper = shallow(<ConnectFilterView {...props} />)
        })
        it('should have FilterView', () => {
            expect(wrapper.find('FilterView')).toHaveLength(1)
        })
        it('filter view props should match with initState', () => {
            expect(wrapper.prop('filterView')).toEqual(
                filterView
            )
        })
        it('filter props should matches with initState', () => {
            expect(wrapper.prop('filter')).toEqual(
                filter
            )
        })
    })
})