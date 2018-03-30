import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, AsyncStorage } from 'react-native'

import { getByProblemId as assignGetByProblemId } from '../utils/apiAssign'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'

import Itim from '../src/images/food.png'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ProblemCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            assign: false,
            image: {
                true: {},
                false: Itim
            }
        }
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({
            image: {...this.state.image, true: {uri: user.pic}}
        })
        let roleteams = user.roleteams
        
        let datas = await assignGetByProblemId(this.props.data.id)

        let result = datas.findIndex(data => data.assigned_id == user.user_id)
        if (result != -1) {
            this.setState({
                assign: true
            })
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={[
                    LayoutStyles.row,
                    LayoutStyles.padTB10,
                    LayoutStyles.padLR10,
                    ColorStyles.bgWhite,
                    ColorStyles.borderBotBlack04
                ]}
                onPress={() => this.props.navigation.navigate('AProblem', {id: this.props.data.id})}
            >
                <View
                    style={[
                      LayoutStyles.flex02,
                      LayoutStyles.alignCenter  
                    ]}
                >
                    {
                        this.state.assign
                        ? <Image
                            source={this.state.image.true}
                            style={ImageStyles.problemIcon}
                        />
                        : <Image
                            source={this.state.image.false}
                            style={ImageStyles.problemIcon}
                        />

                    }
                </View>
                <View
                    style={[
                      LayoutStyles.flex08,
                      LayoutStyles.column,
                      LayoutStyles.alignStart,
                      LayoutStyles.justifyCenter,
                      LayoutStyles.padL10 
                    ]}
                >
                    <Text
                        style={TextStyles.size18}
                        ellipsizeMode='tail' numberOfLines={1}
                    >
                        {this.props.data.topic}
                    </Text>
                    <Text
                        style={[
                            TextStyles.size16,
                            ColorStyles.textGray
                        ]}
                        ellipsizeMode='tail' numberOfLines={2}
                    >
                        {this.props.data.description}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProblemCard