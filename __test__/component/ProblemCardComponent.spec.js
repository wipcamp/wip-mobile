/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { problem } from '../../mocks/data'
import ProblemCard from '../../components/ProblemCardComponent'
// import styles from '../../styles/ViewProblemStyle'
// import reportStyle from '../../styles/reportProblemStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                data: problem[0],
                navigation: jest.fn()
            }
            wrapper = shallow(<ProblemCard {...props} />)
        })
        it('should have TouchableOpacity', () => {
            expect(wrapper.find('TouchableOpacity')).toHaveLength(1)
            // console.log(wrapper)
            // expect(wrapper.length).toBe(1)
        })
    })
})