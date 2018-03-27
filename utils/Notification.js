import { Permissions, Notifications } from 'expo'

import { post as expoTokenPost } from './apiExpoToken'

const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send'

export const registerPushNotiAsync = async (userId) => {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    )
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status
    }

    let token = await Notifications.getExpoPushTokenAsync()

    await expoTokenPost({
        user_id: userId,
        expo: token
    })

    return fetch(PUSH_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: {
                value: token,
            },
            user: {
                username: `WIPX${userId}Dev`,
            },
        }),
    })
}