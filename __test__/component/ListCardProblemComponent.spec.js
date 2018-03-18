/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'

import { problem, filter } from '../../mocks/data'
import ListCardProblem from '../../components/ListCardProblemComponent'

describe('rendering', () => {
    describe('container', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                problem: problem,
                filter: filter
            }
            wrapper = shallow(<ListCardProblem {...props} />)
        })
        it('should have FlatList', () => {
            expect(wrapper.find('FlatList')).toHaveLength(1)
        })
    })

    describe('function', () => {
        let props
        let wrapper
        beforeEach(() => {
            props = {
                problem: problem,
                filter: filter,
            }
            wrapper = shallow(<ListCardProblem {...props} />)
        })
        it('keyExtractor generate key', () => {
            const test = {
                id: 1
            }
            const mockKeyExtractor = (data) => (
                data.id
            )
            expect(wrapper.find('FlatList').props('keyExtractor').keyExtractor(test)).toEqual(
                mockKeyExtractor(test)
            )
        })
    })
})