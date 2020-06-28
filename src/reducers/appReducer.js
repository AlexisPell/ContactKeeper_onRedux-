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
} from '../actions/types'

const initialState = {
  contacts: [],
  current: null,
  loading: false,
  filtered: null
}

export default(state = initialState, action) => {
  switch(action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload],
        loading: false
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => 
          contact.id === action.payload.id ? action.payload : contact
        )
      }
    case SET_CURRENT: 
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return contact.name.match(regex) || contact.phone.match(regex)
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}