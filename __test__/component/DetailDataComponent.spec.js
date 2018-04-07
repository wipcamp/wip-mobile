/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import DetailData from '../../components/DetailDataComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <DetailData>Test</DetailData>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})