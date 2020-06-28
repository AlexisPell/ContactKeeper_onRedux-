import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { clearFilter, filterContacts, getContacts } from './../actions/appActions'

const Navbar = ({ clearFilter, filterContacts }) => {
	let [text, setText] = useState('')

	useEffect(() => {
		if (text === '') {
			clearFilter()
		}
	}, [])

	const onChange = e => {
		setText({ ...text, [e.target.name]: e.target.value })
		if (e.target.value !== '') {
			filterContacts(e.target.value)
		} else  {
			clearFilter()
		}
	}

  return (
		<nav 
			className='navbar navbar-light justify-content-between mb-3'
			style={{backgroundColor: '#ccc', borderRadius: '5px'}}> 
			<a href="#!" className='navbar-brand'><h2>Contact Keeper on Redux</h2></a>
			<form className='form-inline'>
					<input
						className='form-control mr-sm-2'
						type='text'
						name='text'
						placeholder='Search by name or phone'
						aria-label='Search'
						onChange={onChange}
					/>
			</form>
		</nav>
	)
}

export default connect(null, { clearFilter, filterContacts, getContacts })(Navbar)
