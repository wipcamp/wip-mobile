/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import DetailTopic from '../../components/DetailTopicComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <DetailTopic
                topic="test"
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})