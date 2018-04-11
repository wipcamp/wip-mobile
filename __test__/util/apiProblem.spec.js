/**
 * @jest-environment node
 */

import mockAxios from '../../mocks/mock-axios'

import env from '../../config'
import {
    getAll,
    get,
    post,
    put
} from '../../utils/apiProblem'

describe('function', () => {
    const mock = mockAxios
    let url
    
    beforeEach(() => {
        url = null
        mock.reset()
        mock.onPost(`${env.API_URL}/auth/login`).reply(200, "token")
    })

    it('get all', async () => {
        url = `${env.API_URL}/problems/`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await getAll()
        expect(test).toEqual("test")
    })

    it('get', async () => {
        url = `${env.API_URL}/problems/1`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await get(1)
        expect(test).toEqual("test")
    })

    it('post', async () => {
        url = `${env.API_URL}/problems/`
        mock.onPost(url).replyOnce(401)
        mock.onPost(url).reply(200, "test")
        let test = await post(1)
        expect(test).toEqual("test")
    })

    it('put', async () => {
        url = `${env.API_URL}/problems/1`
        mock.onPut(url).replyOnce(401)
        mock.onPut(url).reply(200, "test")
        let test = await put(1, 1)
        expect(test).toEqual("test")
    })
})