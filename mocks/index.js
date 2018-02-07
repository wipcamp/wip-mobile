const mockComponent = require.requireActual('react-native/jest/mockComponent')

module.exports = {
    initAll: () => {
      jest.mock('ScrollView', () => {
        const RealScrollView = require.requireActual('ScrollView')
        const ScrollView = mockComponent('ScrollView')
        ScrollView.prototype.render = RealScrollView.prototype.render
        return ScrollView
      })

      jest.mock('Dimensions', () => {
        const Dimensions = {
          get: jest.fn().mockReturnValue({width: 100, height:100})
        }
        return Dimensions
      })
    }
  }