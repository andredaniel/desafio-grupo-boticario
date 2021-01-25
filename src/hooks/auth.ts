import GoTrue from 'gotrue-js'
import { FormValues } from '../pages/Register/Register'

const auth = new GoTrue({
  APIUrl: `https://cashback-boti.netlify.app/.netlify/identity`,
  audience: '',
  setCookie: false,
})

const signIn = async (
  { email, password }: Pick<FormValues, 'email' | 'password'>,
  onSigninSuccess: Function = () => null,
  onSigninError: Function = () => null
) => {
  try {
    const logged = await auth.login(email, password, true)
    onSigninSuccess()
    return logged
  } catch (e) {
    onSigninError(e)
  }
}

const signUp = async (
  { email, password, ...data }: FormValues,
  onSignupSuccess: Function,
  onSignupError: Function
) => {
  try {
    await auth.signup(email, password, data)
    const logged = await signIn({ email, password })

    onSignupSuccess(logged)
  } catch (e) {
    onSignupError(e)
  }
}

const getCurrentUser = () => {
  return auth.currentUser()
}

const isAuthenticated = (): boolean => {
  const user = getCurrentUser()
  return !!user
}

const logout = async () => {
  const user: any = getCurrentUser()
  await user.logout()
}

export { signIn, signUp, isAuthenticated, logout, getCurrentUser }
