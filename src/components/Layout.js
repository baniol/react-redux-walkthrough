import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Menu from './Menu'

const styles = {
  container: {
    textAlign: 'left',
    padding: 100,
  },
}

export default (props) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={styles.container}>
        <Menu />
        <div className="container">
          { props.children }
        </div>
      </div>
    </MuiThemeProvider>
  )
}
