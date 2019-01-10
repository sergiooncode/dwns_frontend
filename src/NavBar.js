import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import externalStyles from './CompaniesGridPage.css'
import { NavLink } from 'react-router-dom'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
      flexGrow: 1,
    },
    navLink: {
        textDecoration: 'none',
        color: '#FFFFFF',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
}

const NavBar = props => {
    const {
        classes,
    } = props

    return (
        <div className={classes.root}>
            <div className={externalStyles.companiesPageRibbon}>BETA</div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Button color="inherit">
                        <NavLink
                            className={classes.navLink}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </Button>
                    <Button color="inherit">
                        <NavLink
                            className={classes.navLink}
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </Button>
                    {/* <Button color="inherit">
                        <NavLink
                            className={classes.navLink}
                            to="/companies"
                        >
                            Companies
                        </NavLink>
                    </Button>
                    <Button color="inherit">
                        <NavLink
                            className={classes.navLink}
                            to="/form"
                        >
                            Share your experience
                        </NavLink>
                    </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(NavBar)
