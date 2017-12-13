import React from 'react'
import { Table } from 'semantic-ui-react'

const SollamOnly = (props) => {
  return (
    <Table celled compact>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell textAlign='center'>
            <h3>{props.details.data.text}</h3>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell textAlign='center'>
            {props.details.data.salary}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default SollamOnly
