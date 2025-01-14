const requestNotificationPermission = async (): Promise<boolean> => {
    if ('Notification' in window) {
      // Meminta izin untuk menampilkan notifikasi
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  };
  
  export default requestNotificationPermission;
  