import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import * as PageCard from './styles'
// import { Header, CardHeader } from '../../theme/style/typeface'
// import { Logo } from '../Picture'
// import { Main } from '../Input'
// import { UserDetails, JobCompleted, SkillList } from './cardParts'
// import Button, { DuoButton } from '../button'
// import { ConnectDropDown } from '../DropDown'

const CardBox = ({ children, ...props }) => {
  return (
    <PageCard.Container {...props}>
      {children}
    </PageCard.Container>
  )
}

export const FilterCard = props =>(
  <Card border="light" className='mb-5 mr-5 ml-2 filter-card' style={{ width: '18rem', cursor: 'pointer' }} {...props}>
    <Card.Header>Filter Card</Card.Header>
    <Card.Body>
      <Card.Title>Condition One</Card.Title>
      <Card.Text>
        Dates
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted"> <strong>{props.start_year}</strong>  to <strong> {props.end_year}</strong> </Card.Subtitle>
      <Card.Text>
        Gender
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted"> <strong>{props.gender || 'None'}</strong></Card.Subtitle>
      <Card.Text>
        Countries
      </Card.Text>
     {props.countries && props.countries.length > 0 ? props.countries.map(country =>(
      <Badge key={Math.random()} variant="secondary"  style={{backgroundColor:'#a40caf'}} className="mb-2 country px-2 mr-2">{country}</Badge> 
     )) 
     :  <Badge variant="primary" className="mb-2 country px-2 mr-2" style={{backgroundColor:'#a40caf'}}> No Country </Badge> }

      <Card.Text>
        Colours
      </Card.Text>
      {props.colors && props.colors.length > 0 ? props.colors.map(color =>(
      <Badge key={Math.random()} variant="secondary" pill style={{backgroundColor:color}} className="mb-2 country px-2 py-2 mr-2">{color}</Badge> 
     )) 
     :  <Badge pill variant="primary" className="mb-2 country px-2 py-2 mr-2"> No Colours </Badge> }
    </Card.Body>
  </Card>
)


export default CardBox
