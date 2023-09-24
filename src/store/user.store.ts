import type { User } from '#/types/models/user'

export default class UserStore {
  private _user: User | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get user() {
    return this._user
  }

  setUser(user: User | null) {
    this._user = user
  }

  me = async () => {
    // TODO
    // const { data: user } = await graphql.query.user.me()
    const user = null
    this.setUser(user)
    return user ?? null
  }

  saveCredential = (data: { accessToken: string; refreshToken: string }) => {
    localStorage.setItem(AUTH_KEY, data.accessToken)
    localStorage.setItem(AUTH_REFRESH_KEY, data.refreshToken)
  }

  logout = () => {
    this.setUser(null)
    localStorage.removeItem(AUTH_KEY)
  }

  get isAuth() {
    return !!this.user?.login
  }
}
