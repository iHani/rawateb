import React from 'react'
import { Grid, Table } from 'semantic-ui-react'

export default class TitleOnly extends React.Component {

  state = {
    titles_salaries: this.props.details.data.map((row, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column textAlign='left'>
                  {row.text}
                </Grid.Column>
                <Grid.Column textAlign='right'>
                  {row.salary}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  componentWillReceiveProps(props, newprops) {
    const titles_salaries = props.details.data.map((row, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column textAlign='left'>
                  {row.text}
                </Grid.Column>
                <Grid.Column textAlign='right'>
                  {row.salary}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Table.Cell>
        </Table.Row>
      )
    })
    this.setState({ titles_salaries })
  }

  render() {
    return (
      <div>
        <div className="centered">
          <h3>سلم رواتب {this.props.details.text}</h3>
          <Table celled compact striped>
            <Table.Body>
              {this.state.titles_salaries}
            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}
