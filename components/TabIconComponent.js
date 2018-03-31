import React, { Component } from 'react'
import { Icon } from 'native-base'

import ColorStyles from '../styles/ColorStyle'

class TabIcon extends Component {
    render() {
        return (
            <Icon
                ios={ this.props.focus ? this.props.fios : this.props.ios }
                android={ this.props.focus ? this.props.fandroid : this.props.android }
                style={ this.props.focus
                    ? ColorStyles.textOrange
                    : ColorStyles.textBlack
                }
            />
        )
    }
}

export default TabIcon