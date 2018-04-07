/**
 * @jest-environment node
 */

import React from 'react'
import renderer from 'react-test-renderer'

import { priority } from '../../mocks/data'

import Priority from '../../components/PriorityComponent'

it('rendering', () => {
    const tree = renderer
        .create(
            <Priority
                priorityAll={priority}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})