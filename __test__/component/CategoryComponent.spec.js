/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { categoryProblem } from '../../mocks/data'
import { setNewProblemType } from '../../ducks/NewProblem'
import { getAll } from '../../ducks/ProblemTypeAPI'
import Category from '../../components/CategoryComponent'
import styles from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                categoryProblem: categoryProblem,
                problemTypeGetAll: getAll()
            }
            wrapper = shallow(<Category {...props} />)
        })
        it('should have View', () => {
            expect(wrapper.find('View')).toHaveLength(1)
        })
        it('should have a container style', () => {
            expect(wrapper.find('View').props('style').style).toEqual(
                styles.bgWhite
            )
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
                problemTypeGetAll: getAll(),
                categoryProblem: categoryProblem,
                setCategory : setNewProblemType
            }
            wrapper = shallow(<Category {...props} />)
        })
        it('should use an action to set new problem type', () => {
            const value = 1
            const onChangeText = (value, index, data) => {
                setNewProblemType(value)
            }
            expect(wrapper.find('Dropdown').props('onChangeText').onChangeText(value, value, value)).toEqual(
                onChangeText(value)
            )
        })
    })
})