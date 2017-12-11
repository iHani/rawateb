import React from 'react'
import { Container, Dropdown, Header, Segment } from 'semantic-ui-react'
import Salalem from '../data/Salalem'
import SollamOnly from './SollamOnly'
import TitleOnly from './TitleOnly'
import TitleDegree from './TitleDegree'
import TitleLevelDegree from './TitleLevelDegree'

export default class RawatebApp extends React.Component {

  state = {
    template: undefined
  }

  handleOnChangeSollam = (e, data) => {
    const details = Salalem[data.value]

    switch (Salalem[data.value].template) {
      case 'SollamOnly':
      this.setState(() => ({ template: <SollamOnly details={details} /> }))
      break;

      case 'TitleOnly':
      this.setState(() => ({ template: <TitleOnly details={details} /> }))
      break;

      case 'TitleDegree':
      this.setState(() => ({ template: <TitleDegree details={details} /> }))
      break;

      case 'TitleLevelDegree':
      this.setState(() => ({ template: <TitleLevelDegree details={details} /> }))

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
