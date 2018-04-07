/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import TopicInput from '../../components/TopicInputComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <TopicInput
                topic="test"
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})