/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import TabIcon from '../../components/TabIconComponent'

describe('render', () => {
    it('not focus', () => {
        const tree = renderer
            .create(
                <TabIcon
                    ios="test"
                    android="test"
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('focus', () => {
        const tree = renderer
            .create(
                <TabIcon
                    fios="test"
                    fandroid="test"
                    focus
                />
            )
        expect(tree).toMatchSnapshot()
    })
})