const isAuthenticated = (): boolean => {
  const token: string | null = localStorage.getItem('@boticario:token')
  const user = localStorage.getItem('@boticario:user')

  return !!(token && user)
}

export { isAuthenticated }
