/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import Nickname from '../../components/NicknameComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <Nickname>Test</Nickname>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})