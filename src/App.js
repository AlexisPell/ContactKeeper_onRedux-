import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <Provider store={store}>
      <div 
        className="wrapper"
        style={wrapper}>
        <div className="App container">
          <Navbar />
          <div className="row">
            <div className="col">
              <ContactForm />
            </div>
            <div className="col">
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

const wrapper = {
  background: 'linear-gradient(to right, #aeddf5, #32a9e6)',
  minHeight: '100vh'
}

export default App
