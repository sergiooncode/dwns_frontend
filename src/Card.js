import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from './Modal'
import externalStyles from './Card.css'
import { Route, Link, withRouter } from 'react-router-dom'

const styles = {
  card: {
    width: 240,
    height: 160,
  },
}

class SimpleCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const {
      company,
      classes,
    } = this.props
    const companyId = company.id
    const { showModal } = this.state

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              { company.name }
            </Typography>
          </CardContent>
          <CardActions className={externalStyles.cardActions}>
            <Button
              component={Link} to={`/companies/${companyId}`}
              size="small"
            >
              Open Details
            </Button>
          </CardActions>
        </Card>
        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            <div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi
                faucibus quam, sollicitudin posuere massa lacus cursus ligula.
                Quisque vel turpis a quam posuere lobortis. Aenean risus nunc,
                pretium eu massa tincidunt, dignissim tincidunt arcu. Integer et
                mauris vestibulum, pharetra eros nec, feugiat orci.
              </p>
            </div>
          </Modal>}
      </div>
    )
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(SimpleCard))
