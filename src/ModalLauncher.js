import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Modal from './Modal'

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    const { children, onCloseHandler } = this.props;
    const { showModal } = this.state;

    {/*return (
      <div>
        <Button size="large"
          onClick={() => this.handleToggleModal()}
        >
          Expand
        </Button>
        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </Modal>}
      </div>
    )*/}
    return (
      <div>
        <Modal onCloseRequest={ onCloseHandler }>
          {children}
        </Modal>}
      </div>
    )
  }
}

export default SimpleModalLauncher;