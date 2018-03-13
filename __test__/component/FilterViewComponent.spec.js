/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { filter, filterView } from '../../mocks/data'
import { setFilter } from '../../ducks/Filter'
import { getAllForFilter } from '../../ducks/ProblemTypeAPI'
import FilterView from '../../components/FilterViewComponent'
import styles from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                filterView: filterView,
                filter: filter,
                problemTypeGetAllForFilter: getAllForFilter()
            }
            wrapper = shallow(<FilterView {...props} />)
        })
        it('should have View', () => {
            expect(wrapper.find('View')).toHaveLength(1)
        })
        it('should have a container style', () => {
            expect(wrapper.find('View').props('style').style).toEqual([
                styles.bgWhite, styles.spacesTop, styles.spacesBottom
            ])
        })
        it('should have Dropdown', () => {
            expect(wrapper.find('Dropdown')).toHaveLength(1)
        })
    })

    describe('function', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                problemTypeGetAllForFilter: getAllForFilter(),
                filterView: filterView,
                setFilter: setFilter
            }
            wrapper = shallow(<FilterView {...props} />)
        })
        it('should use an action to set filter', () => {
            const value = 1
            const onChangeText = (value, index, data) => {
                setFilter(value)
            }
            expect(wrapper.find('Dropdown').props('onChangeText').onChangeText(value, value, value)).toEqual(
                onChangeText(value)
            )
        })
    })
})