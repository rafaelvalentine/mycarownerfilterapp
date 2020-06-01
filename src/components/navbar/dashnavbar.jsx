import React from 'react'
import { useHistory } from 'react-router-dom'
import { DashNav as Nav } from './styles'
import Messages from '../../utils/messagebell'
import Notifications from '../../utils/notificationbell'
import { Logo } from '../picture'
import Profile from './profile'
export default props => {
  let history = useHistory()
  const handleLogoutUser = () => {
    // props.handleLogoutUser()
    //   .then(res => {
    //     localStorage.clear()
    history.push('/')
    // })
  }
  return (
    <Nav className='row justify-content-end align-items-center'>
      <Messages margin='0 50px 0 0'/>
      <Notifications margin='0 30px 0 0'/>
      <Profile admin={{}} flexDirection='row-reverse'/>
      <Logo src={require('../../themes/images/logout.svg')} width='20px' height='20px' margin='0 0 0 50px' showCursor clicked={handleLogoutUser} />
    </Nav>
  )
}
