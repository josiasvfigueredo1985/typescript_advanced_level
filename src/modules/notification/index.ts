import {
  callService,
  NotificationServices,
} from './classes/notification_services'
import NotificationUser from './classes/notification_user'
import EEnumSmartphones from './enumerators/enum_smartphones'

const john = new NotificationUser(
  'John Doe',
  'john_dee1988@gmail.com',
  '+555-9863354',
  EEnumSmartphones.iphone
)

const notify = new NotificationServices()

notify.serviceEmail(john)

callService(john)
