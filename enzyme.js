import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { initAll } from './mocks'

configure({ adapter: new Adapter() })
initAll()