import { Permissions } from 'expo'

const askPermission = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    )
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status
    }
}

export default askPermission