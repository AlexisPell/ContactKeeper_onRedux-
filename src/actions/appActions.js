import {
  SET_LOADING,
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from './types'


// Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

// Get contacts
export const getContacts = () => async dispatch => {
    setLoading()

    const res = await fetch('/contacts')
    const data = await res.json()

    dispatch({
      type: GET_CONTACTS,
      payload: data
    })
}

// Add contact
export const addContact = newContact => async dispatch => {
  const res = await fetch('/contacts', {
    'method': 'POST',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()

  dispatch({
    type: ADD_CONTACT,
    payload: data
  })
}

// Delete contact
export const deleteContact = id => async dispatch => {
  await fetch(`/contacts/${id}`, {
    method: 'DELETE',
  })

  dispatch({
    type: DELETE_CONTACT,
    payload: id
  })
}

// Set current contact
export const setCurrent = contact => dispatch => {
  dispatch({ type: SET_CURRENT, payload: contact })
}

// Clear current contact
export const clearCurrent = () => dispatch => {
  dispatch({ type: CLEAR_CURRENT })
} 

// Update contact
export const updateContact = contact => dispatch => {
  dispatch({ type: UPDATE_CONTACT, payload: contact })
}

// Filter contacts
export const filterContacts = text => dispatch => {
  dispatch({ type: FILTER_CONTACTS, payload: text })
}

// Clear filter
export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER })
} 
