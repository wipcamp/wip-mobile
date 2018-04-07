/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import DetailDescription from '../../components/DetailDescriptionComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <DetailDescription>Test</DetailDescription>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})