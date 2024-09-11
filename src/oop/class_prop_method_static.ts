interface IDataBase {
  ip: string
  username: string
  password: string
  baseType: string
}

class DataBase {
  static LOCAL = '127.0.0.1'
  static TYPE_MYSQL = 'MySQL'
  static TYPE_SQLSERVER = 'SQLServer'

  constructor(
    private readonly ip: string,
    private readonly username: string,
    private readonly password: string,
    private readonly baseType: string
  ) {}

  static factory(parameters: IDataBase): DataBase {
    if (
      ![DataBase.TYPE_SQLSERVER, DataBase.TYPE_MYSQL].includes(
        parameters.baseType
      )
    ) {
      throw new Error('Wrong DataBase type!')
    }
    return new DataBase(
      parameters.ip,
      parameters.username,
      parameters.password,
      parameters.baseType
    )
  }
}

const connection = DataBase.factory({
  baseType: DataBase.TYPE_MYSQL,
  username: 'Admin',
  password: 'admin123',
  ip: DataBase.LOCAL,
})

console.log(connection)
