export interface IDBSettings {
    host: string  
    port: number  
    user: string  
    password: string  
    database: string
  }
  
  export const GetDBSettings = (): IDBSettings => {
    const env = process.env.NODE_ENV
  
    if (env == 'development')
      return {
        host: process.env.MYSQL_DEV_HOST!, //'58.84.143.251',  
        port: parseInt(process.env.MYSQL_DEV_PORT!),  
        user: process.env.MYSQL_DEV_USER!,  
        password: process.env.MYSQL_DEV_PASSWORD!,  
        database: process.env.MYSQL_DEV_DATABASE!,      
    }
    else
      return {
        host: process.env.MYSQL_HOST!, //'58.84.143.251',  
        port: parseInt(process.env.MYSQL_PORT!),  
        user: process.env.MYSQL_USER!,  
        password: process.env.MYSQL_PASSWORD!,  
        database: process.env.MYSQL_DATABASE!,
      }
  }