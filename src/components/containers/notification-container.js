import React from 'react';
import { Notification } from 'react-notification';
import { connect } from 'react-redux'
import { hideNotification } from '../../actions/notification-actions'

const success = '#5cb85c'
const info = '#31b0d5'
const danger = '#c9302c'

const NotificationContainer = (props) => {
    let { message, notification_type } = props.notification;
    let { onHide } = props;
    let isActive = message?true:false;
    let color;

    switch(notification_type) {
        case 'SUCCESS':
            color = success
            break;
        case 'ERROR':
            color = danger
            break;
        default:
            color = info
            break;
    }

    return <Notification
        isActive={isActive}
        message={message?message:''}
        dismissAfter={5000}
        onDismiss={ ()=>onHide() }
        action='X'
        onClick={ ()=>onHide() }
        barStyle={ {
                background: color,
                color: 'black',
            }
        }
    />
}


let mapStateToProps = state => ({
	notification: state.notification
})

let mapDispatchToProps = dispatch => ({
	onHide: () => {
		dispatch(hideNotification())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);