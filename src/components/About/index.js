import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = props => {
  const {history} = props
  return (
    <div className="about-container">
      <Header />
      <h1>About Route</h1>
      <LogoutButton history={history} />
    </div>
  )
}
export default About
