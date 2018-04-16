/**
 * @jest-environment node
 */

import mockAxios from '../../mocks/mock-axios'

import env from '../../config'
import api from '../../utils/api'

describe('function', () => {
    const mock = mockAxios
    let url = `${env.API_URL}/`

    afterEach(() => {
        mock.reset()
    })

    it('get', async () => {
        mock.onGet(url).reply(200, {
            test: "test"
        })
        let test = await api.get('/')
        expect(test.data).toEqual({
            test: "test"
        })
    })

    it('post', async () => {
        mock.onPost(url).reply(200, {
            test: "true"
        })
        let test = await api.post('/')
        expect(test.data).toEqual({
            test: "true"
        })
    })

    it('put', async () => {
        mock.onPut(url).reply(200, {
            test: "true"
        })
        let test = await api.put('/')
        expect(test.data).toEqual({
            test: "true"
        })
    })
})