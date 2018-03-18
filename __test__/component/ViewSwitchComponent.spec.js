/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { updateProblem } from '../../ducks/ReportProblem'
import ViewSwitch from '../../components/ViewSwitchComponent'
import styles from '../../styles/ViewProblemStyle'
import reportStyle from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        describe('all false', () => {
            let props
            let wrapper
            beforeEach(() => {
                props = {
                    problem: [{
                        id: 1,
                        is_solve: false,
                        not_solve: false,
                    }],
                    id: 1
                }
                wrapper = shallow(<ViewSwitch {...props} />)
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
            it('should have Switch', () => {
                expect(wrapper.find('Switch')).toHaveLength(1)
            })
        })
        describe('all true', () => {
            let props
            let wrapper
            beforeEach(() => {
                props = {
                    problem: [{
                        id: 1,
                        is_solve: true,
                        not_solve: true,
                    }],
                    id: 1
                }
                wrapper = shallow(<ViewSwitch {...props} />)
            })
            it('should have a container style', () => {
                wrapper.setProps({ is_solve: true })
                expect(wrapper.find('View').first().props('style').style).toEqual([
                    reportStyle.bgWhite,
                    reportStyle.inputPadding,
                    styles.row,
                    styles.border,
                    styles.disable
                ])
            })
            it('should have a container style', () => {
                wrapper.setProps({ not_solve: true })
                expect(wrapper.find('View').first().props('style').style).toEqual([
                    reportStyle.bgWhite,
                    reportStyle.inputPadding,
                    styles.row,
                    styles.border,
                    styles.disable
                ])
            })
        })
    })
})