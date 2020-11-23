import React, { Component } from 'react'
import { Button, Modal, Input } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux';

import { editUserProfile } from '../../actions/users/userProfile'

class EditUser extends Component{
    state = {
        user: null
    }
  handleChange = (e) => {
      const { user } = this.state
    this.setState({
        user: {...user, [e.target.name]: e.target.value}
    })
  }

  submitUser = async() => {
    const { user } = this.state
    const { editUserProfile } = this.props
    const userData = _.pick(user, ['firstName', 'lastName', 'username', 'city', 'address'])
    
    await editUserProfile(userData)
    const { userProfile, closeModal } = this.props
    if(userProfile && userProfile.status && userProfile.status === 200) {
        closeModal()
        window.location.reload()
    }
  }

  componentDidMount = () => {
      this.setState({
          user: this.props.user
      })
  }

  render() {
      const { open, openModal, closeModal } = this.props
      const { user } = this.state
      return (
        <Modal
            onClose={openModal}
            onOpen={closeModal}
            open={open}
            size="tiny"
        >
        <Modal.Header>Edit your Profile</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
                <Input
                    size='small'
                    fluid
                    name="firstName"
                    label='First name'
                    onChange={this.handleChange}
                    value={user && user.firstName}
                />
                <br />

                <Input
                    size='small'
                    fluid
                    label='Last name'
                    name='lastName'
                    onChange={this.handleChange}
                    value={user && user.lastName}
                />
                <br />

                <Input
                    size='small'
                    fluid
                    label='username'
                    onChange={this.handleChange}
                    name='username'
                    value={user && user.username}
                />
                <br />
                <Input
                    size='small'
                    fluid
                    label='Address'
                    name='address'
                    onChange={this.handleChange}
                    value={user && user.address}
                />
                <br />
                <Input
                    size='small'
                    fluid
                    label='City'
                    name='city'
                    onChange={this.handleChange}
                    value={user && user.city}
                />
                <br />
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button negative onClick={closeModal}>
                Cancel
            </Button>
            <Button
                content="Edit"
                labelPosition='right'
                icon='checkmark'
                onClick={this.submitUser}
                primary
            />
        </Modal.Actions>
        </Modal>
    )
  }
  
}

const mapStateToProps = state => ({
    userProfile: state.editProfile.userProfile
  })

export default connect(mapStateToProps, { editUserProfile })(EditUser)