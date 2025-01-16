import type EnumSmartphones from '../enumerators/enum_smartphones'

export default interface INotificationUser {
  name: string
  email: string
  phone: string
  smartphone: EnumSmartphones
}
