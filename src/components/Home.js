import React from 'react'
import { Container } from 'semantic-ui-react'
import RawatebApp from './RawatebApp'
// import RawatebTable from './RawatebTable'

export default class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      total_salary: 150
    }
  }


  render() {
    return (
      <Container style={{ padding: '5em 0em' }}>
        <RawatebApp />
      </Container>
    )
  }
}
