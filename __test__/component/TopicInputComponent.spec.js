/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { problem } from '../../mocks/data'
import TopicInput from '../../components/TopicInputComponent'
import styles from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        describe('input', () => {
            let props
            let wrapper
            beforeEach(() => {
                props = {
                    view: false
                }
                wrapper = shallow(<TopicInput {...props} />)
            })
            it('should have View', () => {
                expect(wrapper.find('View')).toHaveLength(1)
            })
            it('should have a container style', () => {
                expect(wrapper.find('View').props('style').style).toEqual([
                    styles.bgWhite, styles.spacesTop
                ])
            })
            it('should have disabled false', () => {
                expect(wrapper.find('TextField').props('disabled').disabled).toBeFalsy()
            })
            it('should have multiline false', () => {
                expect(wrapper.find('TextField').props('multiline').multiline).toBeFalsy()
            })
        })

        describe('view', () => {
            let props
            let wrapper
            beforeEach(() => {
                props = {
                    problem: problem,
                    view: true,
                    id: 1
                }
                wrapper = shallow(<TopicInput {...props} />)
            })
            it('should have value', () => {
                expect(wrapper.find('TextField').props('value').value).toEqual(
                    problem[0].topic
                )
            })
            it('should have disabled true', () => {
                expect(wrapper.find('TextField').props('disabled').disabled).toBeTruthy()
            })
            it('should have multiline true', () => {
                expect(wrapper.find('TextField').props('multiline').multiline).toBeTruthy()
            })
        })
    })
})