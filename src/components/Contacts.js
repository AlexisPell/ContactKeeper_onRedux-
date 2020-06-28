import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'
import Loader from './Loader'

import { connect } from 'react-redux'
import { getContacts } from './../actions/appActions'

const Contacts = ({ app, getContacts }) => {
  const { contacts, filtered } = app

  useEffect(() => {
    getContacts()
    //eslint-disable-next-line
  }, [])

  return (
		<div style={{backgroundColor: '#ccc', padding: '5px', borderRadius: '5px'}}>
      {contacts.length === 0
        ? <div><h4><strong>No contacts yet</strong></h4><Loader /></div>
        : <h3><strong>Contacts list:</strong></h3>
      }
      {filtered === null || filtered === []
        ? contacts.map((contact) => <Contact contact={contact} key={contact.id} />)
        : filtered.map(contact => <Contact contact={contact} key={contact.id} />)
      }
		</div>
	)
}

Contacts.propTypes = {
  app: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps, { getContacts })(Contacts)
