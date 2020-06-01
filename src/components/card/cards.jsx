import React from './node_modules/react'
import * as Card from './styles'
// import { Header, CardHeader } from '../../theme/style/typeface'
// import { Logo } from '../Picture'
// import { Main } from '../Input'
// import { UserDetails, JobCompleted, SkillList } from './cardParts'
// import Button, { DuoButton } from '../button'
// import { ConnectDropDown } from '../DropDown'

const CardBox = ({ children, ...props }) => {
  return (
    <Card.Container {...props}>
      {children}
    </Card.Container>
  )
}



export default CardBox
