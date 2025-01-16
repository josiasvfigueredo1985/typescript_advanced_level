import type INotificationUser from '../interfaces/interface_notification_user'
import type EnumSmartphones from '../enumerators/enum_smartphones'

export default class NotificationUser implements INotificationUser {
  name: string
  email: string
  phone: string
  smartphone: EnumSmartphones

  constructor(
    name: string,
    email: string,
    phone: string,
    smartphone: EnumSmartphones
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.smartphone = smartphone
  }
}
