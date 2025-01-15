import EnumSmartphones from './enumerators/enum_smartphones'
import NotificationUser from './classes/notification_user'
import {
  callService,
  NotificationServices,
} from './classes/notification_services'

const john = new NotificationUser(
  'John Doe',
  'john_dee1988@gmail.com',
  '+555-9863354',
  EnumSmartphones.iphone
)

const notify = new NotificationServices()

notify.serviceEmail(john)

callService(john)
