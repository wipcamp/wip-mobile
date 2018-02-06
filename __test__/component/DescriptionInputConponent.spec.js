/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { problem } from '../../mocks/data'
import { setNewProblemDescription } from '../../ducks/NewProblem'
import DescriptionInput from '../../components/DescriptionInputComponent'
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
                wrapper = shallow(<DescriptionInput {...props} />)
            })
            it('should have View', () => {
                expect(wrapper.find('View')).toHaveLength(1)
            })
            it('should have a container style', () => {
                expect(wrapper.find('View').props('style').style).toEqual([
                    styles.bgWhite, styles.spacesTop
                ])
            })
            it('should have TextField', () => {
                expect(wrapper.find('TextField')).toHaveLength(1)
            })
            it('should have disabled false', () => {
                expect(wrapper.find('TextField').props('disabled').disabled).toBeFalsy()
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
                wrapper = shallow(<DescriptionInput {...props} />)
            })
            it('should have value', () => {
                expect(wrapper.find('TextField').props('value').value).toEqual(
                    problem[0].description
                )
            })
            it('should have disabled true', () => {
                expect(wrapper.find('TextField').props('disabled').disabled).toBeTruthy()
            })
        })
    })

    describe('function', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                view: false,
                setDescription: setNewProblemDescription
            }
            wrapper = shallow(<DescriptionInput {...props} />)
        })
        it('should use an action to set description', () => {
            const test = 'Test'
            const onChangeText = (text) => {
                setNewProblemDescription(text)
            }
            expect(wrapper.find('TextField').props('onChangeText').onChangeText(test)).toEqual(
                onChangeText(test)
            )
        })
    })
})