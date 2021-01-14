enum ELocalStorage {
  TOKEN = '@boticario:token',
  USER = '@boticario:user',
}

const isAuthenticated = (): boolean => {
  const token: string | null = localStorage.getItem(ELocalStorage.TOKEN)
  const user = localStorage.getItem(ELocalStorage.USER)

  return !!(token && user)
}

const logout = (): void => {
  localStorage.removeItem(ELocalStorage.TOKEN)
  localStorage.removeItem(ELocalStorage.USER)
}

export { isAuthenticated, logout }
