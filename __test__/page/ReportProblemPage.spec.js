/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import ReportProblem from '../../pages/ReportProblemPage'
import styles from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {}
            wrapper = shallow(<ReportProblem {...props} />)
        })
        it('should have View', () => {
            expect(wrapper.find('View')).toHaveLength(1)
        })
        it('should have a container style', () => {
            expect(wrapper.find('View').props('style').style).toEqual(
                styles.bg
            )
        })
    })
})