import { type IDataBaseConnection } from '../interfaces/idatabase_connection'

export class DataBaseConnection {
  static readonly LOCAL = '127.0.0.1'
  static readonly TYPE_MYSQL = 'MySQL'
  static readonly TYPE_SQLSERVER = 'SQLServer'

  constructor(
    private readonly ip: string,
    private readonly username: string,
    private readonly password: string,
    private readonly baseType: string
  ) {}

  static factory(parameters: IDataBaseConnection): DataBaseConnection {
    if (
      ![
        DataBaseConnection.TYPE_SQLSERVER,
        DataBaseConnection.TYPE_MYSQL,
      ].includes(parameters.baseType)
    ) {
      throw new Error('Wrong DataBase type!')
    }
    return new DataBaseConnection(
      parameters.ip,
      parameters.username,
      parameters.password,
      parameters.baseType
    )
  }
}
