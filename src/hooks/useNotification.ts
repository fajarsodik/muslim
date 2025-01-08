const requestNotificationPermission = async (): Promise<boolean> => {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        const permission === 'granted';
    }
    return false;
}

export default requestNotificationPermission;