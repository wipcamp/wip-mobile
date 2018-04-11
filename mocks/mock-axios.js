import axios from 'axios'
import mockAxios from 'axios-mock-adapter'

import env from '../config'

const mock = new mockAxios(axios)

export default mock