/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import Error from '../../pages/ErrorPage'
import styles from '../../styles/ErrorPageStyle'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {}
            wrapper = shallow(<Error {...props} />)
        })
        it('should have View', () => {
            expect(wrapper.find('View')).toHaveLength(1)
        })
        it('should have a container style', () => {
            expect(wrapper.find('View').props('style').style).toEqual(
                styles.container
            )
        })
    })
})