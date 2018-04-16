/**
 * @jest-environment node
 */

import mockAxios from '../../mocks/mock-axios'

import env from '../../config'
import { getAll } from '../../utils/apiPriority'

describe('function', () => {
    const mock = mockAxios
    let url
    
    beforeEach(() => {
        url = null
        mock.reset()
        mock.onPost(`${env.API_URL}/auth/login`).reply(200, "token")
    })

    it('get all', async () => {
        url = `${env.API_URL}/prioritys/`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await getAll(1)
        expect(test).toEqual("test")
    })
})