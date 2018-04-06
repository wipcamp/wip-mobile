/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import DescriptionInput from '../../components/DescriptionInputComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <DescriptionInput
                description="test"
                setDescription={jest.fn()}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})