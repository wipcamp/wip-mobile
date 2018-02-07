/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { problem, categoryProblem } from '../../mocks/data'
import { getAllForCategory } from '../../ducks/ProblemTypeAPI'
import ViewCategory from '../../components/ViewCategoryConponent'
import styles from '../../styles/ViewProblemStyle'
import reportStyle from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                problemTypeGetAllForCategory: getAllForCategory,
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
                categoryProblem: [{
                    value: 1,
                    label: "Test 1"
                }],
                id: 1
            }
            wrapper = shallow(<ViewCategory {...props} />)
        })
        it('should have View', () => {
            expect(wrapper.find('View')).toHaveLength(3)
        })
        it('should have a container style', () => {
            expect(wrapper.find('View').first().props('style').style).toEqual([
                reportStyle.bgWhite,
                reportStyle.inputPadding,
                styles.row,
                styles.border
            ])
        })
    })
})