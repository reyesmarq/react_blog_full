import Noty from 'noty'

class NotificationsService {
  success(message) {
    (new Noty({
      text: message,
      type: 'success'
    })).show()
  }

  error(message) {
    (new Noty({
      text: message,
      type: 'error'
    })).show()
  }
}

export default NotificationsService