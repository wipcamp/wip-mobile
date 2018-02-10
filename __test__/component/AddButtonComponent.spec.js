/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'
import mockAxios from 'jest-mock-axios'

import { newProblem } from '../../mocks/data'
import AddButton from '../../components/AddButtonComponent'
import styles from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                newproblem: newProblem,
                problemPost: () => {
                    mockAxios.mockResponse({ data: 'true' })
                }
            }
            wrapper = shallow(<AddButton {...props} />)
        })
        it('should have Text', () => {
            expect(wrapper.find('Text')).toHaveLength(1)
        })
        it('should have a container style', () => {
            expect(wrapper.find('Text').props('style').style).toEqual(
                styles.addButton
            )
        })
    })

    describe('function', () => {
        describe('true', () => {
            let props
            let wrapper
            beforeEach(() => {
                props = {
                    newproblem: {
                        topic: "Test new problem",
                        problem_type_id: 1,
                        description: "Test new problem",
                        report_id: 1
                    },
                    problemPost: () => {
                        return { data: 'true' }
                    },
                    navigation: {
                        navigate: jest.fn()
                    }
                }
                wrapper = shallow(<AddButton {...props} />)
            })
            it('should navigate', () => {
            })
        })
        describe('false', () => {
            let props
            let wrapper
            beforeEach(() => {
                props = {
                    newproblem: { ...newProblem, topic: null},
                    
                }
                wrapper = shallow(<AddButton {...props} />)
            })
            it('should alert', () => {
            })
        })
    })
})