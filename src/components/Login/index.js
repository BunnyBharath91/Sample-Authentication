import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onLoginSuccessful = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onLoginWithSampleCredits = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    onLoginSuccessful(data.jwt_token)
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onLoginWithSampleCredits}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
