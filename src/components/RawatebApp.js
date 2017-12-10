import React from 'react'
import { Container, Dropdown, Header, Segment } from 'semantic-ui-react'
import Salalem from '../data/Salalem'
import TitleDegree from './TitleDegree'
import SollamOnly from './SollamOnly'

export default class RawatebApp extends React.Component {

  state = {
    template: undefined
  }

  handleOnChangeSollam = (e, data) => {
    const details = Salalem[data.value]
    const template = Salalem[data.value].template

    switch (template) {
      case 'TitleDegree':
      this.setState(() => ({ template: <TitleDegree details={details} /> }))
      break;

      case 'SollamOnly':
      this.setState(() => ({ template: <SollamOnly details={details} /> }))
      break;

      case 'expression1':

      break;

      case 'expression2':

      break;
      default:
      this.setState(() => ({ template: undefined }))

    }
  }

  render() {
    return (
      <Container text>
        <Header as='h3' attached='top' block>برنامج سلم رواتب موظفي الخدمة المدنية</Header>
        <Segment attached>
          <Dropdown placeholder='اختر السلم'
            fluid search selection
            options={Salalem}
            onChange={this.handleOnChangeSollam}
          />
          {this.state.template && <p />}
          {this.state.template}
        </Segment>
      </Container>
    )
  }
}
