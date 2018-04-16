/**
 * @jest-environment node
 */

import mockAxios from '../../mocks/mock-axios'

import env from '../../config'
import {
    get,
    getByProblemId,
    getByRoleTeamId,
    getByAssignedId
} from '../../utils/apiAssign'

describe('function', () => {
    const mock = mockAxios
    let url
    
    beforeEach(() => {
        url = null
        mock.reset()
        mock.onPost(`${env.API_URL}/auth/login`).reply(200, "token")
    })

    it('get', async () => {
        url = `${env.API_URL}/assigns/1`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await get(1)
        expect(test).toEqual("test")
    })

    it('getByProblemId', async () => {
        url = `${env.API_URL}/assigns/problem_id/1`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await getByProblemId(1)
        expect(test).toEqual("test")
    })

    it('getByRoleTeamId', async () => {
        url = `${env.API_URL}/assigns/role_team_id/1`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await getByRoleTeamId(1)
        expect(test).toEqual("test")
    })

    it('getByAssignedId', async () => {
        url = `${env.API_URL}/assigns/assigned_id/1`
        mock.onGet(url).replyOnce(401)
        mock.onGet(url).reply(200, "test")
        let test = await getByAssignedId(1)
        expect(test).toEqual("test")
    })
})