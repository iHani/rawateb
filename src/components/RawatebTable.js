import React from 'react'
import { Container, Grid, Header, Menu } from 'semantic-ui-react'

const RawatebTable = () => (
  <Container style={{ paddingBottom: '5em' }} text>
    <Header as='h2'>Attached Content</Header>
    <Grid columns={1}>

      <Grid.Column>
        <Header as='h4' attached='top' block>Top Block Header</Header>

        <Menu attached compact widths={5}>
          <Menu.Item as='a'>Itessm</Menu.Item>
          <Menu.Item as='a'>Itddem</Menu.Item>
          <Menu.Item as='a'>Itfffem</Menu.Item>
          <Menu.Item as='a'>Itfffem</Menu.Item>
          <Menu.Item as='a'>Itfffem</Menu.Item>
        </Menu>
        <Menu attached compact widths={5}>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
        </Menu>
        <Menu attached compact widths={5}>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
        </Menu>
        <Menu attached compact widths={5}>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
        </Menu>
        <Menu attached='bottom' compact widths={5}>
          <Menu.Item as='a'>Issstem</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
          <Menu.Item as='a'>Item</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  </Container>
)

export default RawatebTable
