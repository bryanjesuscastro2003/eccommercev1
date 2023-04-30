

export interface IAuthServiceRepository{
      ecryptPassoword: (plainPassword : string) => Promise<string>
      validatePassword: (plainPassword: string, hashedPassword: string) => Promise<boolean>
      
      validateUsernameAndEmal: (username: string, email: string) => Promise<{
              username: {
                   state: boolean
              },
              email: {
                  state: boolean
              }
      }>

      generateJwt: (body: string) => string
      validateJwt: (token: string) => Promise<string | null>
}
