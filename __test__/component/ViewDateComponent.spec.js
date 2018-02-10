/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import ViewDate from '../../components/ViewDateComponent'
import styles from '../../styles/ViewProblemStyle'
import reportStyle from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                problem: [{
                    id: 1,
                    topic: "Test Problem 1",
                    description: "Test Description 1",
                    problem_type_id: 1,
                    report_id: 1,
                    is_solve: false,
                    not_solve: false,
                    created_at: "2018-02-02 17:50:01",
                    updated_at: "2018-02-02 17:50:01"
                }],
                id: 1
            }
            wrapper = shallow(<ViewDate {...props} />)
        })
        it('should have View', () => {
            expect(wrapper.find('View')).toHaveLength(3)
        })
        it('should have a container style', () => {
            expect(wrapper.find('View').first().props('style').style).toEqual([
                reportStyle.bgWhite,
                reportStyle.inputPadding,
                reportStyle.spacesTop,
                styles.row,
                styles.border
            ])
        })
    })
})