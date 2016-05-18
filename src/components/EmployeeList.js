import { browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

class EmployeeList extends Component {

  // @TODO necessary ?
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchEmployees()
  }

  rightIconMenu(id) {
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={this.editEmployee.bind(null, id)}>Edit</MenuItem>
        <MenuItem onClick={this.props.removeEmployee.bind(null, id)}>Delete</MenuItem>
      </IconMenu>
    )
  }

  // @TODO - to component ?
  editEmployee(id) {
    browserHistory.push(`employee/${id}`)
  }

  render () {
    let loader = this.props.loader ? <div className="loader">Loading ...</div> : ''
    let errorMsg = this.props.errors ? <div className="error-msg">{this.props.errors}</div> : ''
    return (
      <div>
        {loader}
        {errorMsg}
        <List>
          {this.props.employees.map(person =>
            <ListItem
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIconButton={this.rightIconMenu(person.id)}
              key={person.id}
              primaryText={person.name}
              secondaryText={<p>{person.position}</p>}
            />
          )}
        </List>
      </div>
    )
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired).isRequired,
  loader: PropTypes.bool,
  errors: PropTypes.string,
  fetchEmployees: PropTypes.func.isRequired
}

export default EmployeeList
