import * as types from './action-types';

export function showSuccessNotification(message) {
    return {
        type: types.SHOW_NOTIFICATION,
        notification_type: 'SUCCESS',
        message
    }
}

export function showErrorNotification(message) {
    return {
        type: types.SHOW_NOTIFICATION,
        notification_type: 'ERROR',
        message
    }
}

export function hideNotification() {
    return {
        type: types.CLEAR_NOTIFICATION
    }
}
