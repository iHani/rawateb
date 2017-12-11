import React from 'react'
import { Button, Segment, Table } from 'semantic-ui-react'

export default class TitleDegree extends React.Component {

  state = {
    current_title_index: undefined,
    current_title_text: undefined,
    current_degree_index: undefined,
    current_degree_text: undefined,
    titles: this.props.details.data.map((title, index) => (
      <Button key={index} size='mini' index={index+1} data={this.props.details.data} onClick={this.handleClickTitle.bind(this)}>{title.text}</Button>
    )),
    degrees: undefined,
  }


  handleClickTitle(e, data) {
    const current_title_index = data.index
    const current_title_text = data.data[current_title_index-1].text
    const degreesLength = data.data[current_title_index-1].degrees
    let degrees = []
    for (var i = 0; i < degreesLength; i++) {
      degrees.push(<Button circular compact key={i} size='mini' index={i+1} onClick={this.handleClickDegree.bind(this)}>{i+1}</Button>)
    }
    this.setState({ current_title_text, current_title_index, degrees })
  }

  handleClickDegree(e, data) {
    this.setState({ current_degree_index: data.index })
  }

  componentWillReceiveProps(props, newprops) {
    const titles = props.details.data.map((title, index) => (
      <Button key={index} size='mini' index={index+1} data={props.details.data} onClick={this.handleClickTitle.bind(this)}>{title.text}</Button>
    ))
    this.setState({
      titles,
      degrees: undefined,
      current_title_index: undefined,
      current_degree_index:undefined
    })
  }

  render() {
    return (
      <div>
        <div className="centered">
          <h3>سلم رواتب {this.props.details.text}</h3>

          <Segment textAlign='right'>
            <p>
              {this.props.details.title_text}
              {this.state.titles}
            </p>
            {
              this.state.degrees &&
              <p>
                {this.props.details.degree_text}
                {this.state.degrees}
              </p>
            }
          </Segment>

          {this.state.current_title_index &&
            <Table celled compact>
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell textAlign='center'>
                    {this.state.current_title_text && `المرتبة ${this.state.current_title_text}`}
                    {this.state.current_title_text && ` الدرجة ${this.state.current_degree_index || 1}`}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign='center'>
                    أساسي: {this.props.details.data[this.state.current_title_index-1].first_salary}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell textAlign='center'>
                    العلاوة السنوية: {this.props.details.data[this.state.current_title_index-1].annual_increase}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>

              {this.state.current_degree_index &&
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell textAlign='center'>
                      <h3>{((this.state.current_degree_index - 1) * this.props.details.data[this.state.current_title_index-1].annual_increase) + this.props.details.data[this.state.current_title_index-1].first_salary}</h3>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              }
            </Table>
          }
        </div>
      </div>
    )
  }
}
