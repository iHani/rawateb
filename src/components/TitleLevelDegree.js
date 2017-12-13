import React from 'react'
import { Button, Header, Segment, Table } from 'semantic-ui-react'

export default class TitleLevelDegree extends React.Component {

  state = { // other states are initiated from functions below-- fix me
    current_degree_index: 1,
    first_salary: 0,
    annual_increase: 0,
    titles: this.props.details.data.map((title, index) => (
      <Button key={index} compact size='medium' index={index+1} data={this.props.details.data} onClick={this.handleClickTitle.bind(this)}>{title.text}</Button>
    )),
    levels: undefined
  }

  handleClickTitle(e, data) {
    const current_title_text = data.data[data.index-1].text
    const levels = data.data[data.index-1].levels.map((level, index) => (
      <Button key={index} compact
        size='small'
        index={index+1}
        degrees={level.degrees}
        first_salary={level.first_salary}
        annual_increase={level.annual_increase}
        onClick={this.handleClickLevel.bind(this)}
        >{level.text}</Button>
      ))
      this.setState({
        current_title_text, levels,
        degrees: undefined,
        current_degree_text: undefined,
        current_level_text: undefined,
        first_salary: 0,
        current_degree_index: 1
      })
    }

    handleClickLevel(e, data) {
      const first_salary = data.first_salary
      const annual_increase = data.annual_increase
      const current_level_text = data.children
      const degreesLength = data.degrees
      const degrees = []
      for (var i = 0; i < degreesLength; i++) {
        degrees.push(<Button circular compact key={i} size='mini' index={i+1} onClick={this.handleClickDegree.bind(this)}>{i+1}</Button>)
      }
      this.setState({
        current_level_text,
        degrees,
        first_salary,
        annual_increase,
        current_degree_index : 1,
        current_degree_text: 'الدرجة' // fix me
      })
    }

    handleClickDegree(e, data) {
      this.setState({ current_degree_index: data.index })
    }

    componentWillReceiveProps(props, newprops) {
      const titles = props.details.data.map((title, index) => (
        <Button key={index} compact size='small' index={index+1} data={props.details.data} onClick={this.handleClickTitle.bind(this)}>{title.text}</Button>
      ))
      this.setState({
        titles,
        levels: undefined,
        degrees: undefined,
        current_level_text: undefined,
        current_degree_index: 1
      })
    }

    render() {
      const {
        titles,
        levels,
        degrees,
        first_salary,
        annual_increase,
        current_title_text,
        current_level_text,
        current_degree_text,
        current_degree_index
      } = this.state

      return (
        <div>
          <div className="centered">
            <Header as='h3' attached='top'>
              سلم رواتب {this.props.details.text}
            </Header>

            <Segment textAlign='right' attached='bottom'>
              <p>
                {this.props.details.title_text}
                {titles}
              </p>
              {
                levels &&
                <p>
                  {this.props.details.level_text}
                  {levels}
                </p>
              }
              {
                degrees &&
                <p>
                  {this.props.details.degree_text}
                  {degrees}
                </p>
              }
            </Segment>

            {current_level_text &&
              <Table celled compact>

                <Table.Header fullWidth>
                  <Table.Row>
                    <Table.HeaderCell textAlign='center'>
                      {current_title_text && `${this.props.details.title_text} ${current_title_text} `}
                      {current_level_text && `${this.props.details.level_text} ${current_level_text} `}
                      {current_degree_text && `${this.props.details.degree_text} ${current_degree_index}`}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign='center'>
                      أساسي: {first_salary}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'>
                      العلاوة السنوية: {annual_increase}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell textAlign='center'>
                      <h3>{((current_degree_index - 1) * annual_increase) + first_salary}</h3>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>

              </Table>
            }
          </div>
        </div>
      )
    }
  }
