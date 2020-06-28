import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { addContact, updateContact ,clearCurrent } from './../actions/appActions'

const ContactForm = ({ app, addContact, updateContact, clearCurrent }) => {
	const [contact, setContact] = useState({
		name: '',
		phone: '',
		type: 'personal'
	})
	const [alert, setAlert] = useState(false)

	const { name, phone, type } = contact
	const { current } = app

	useEffect(() => {
	if (current !== null) {
		setContact(current)
	}	else {
		setContact({
			name: '',
			phone: '',
			type: 'personal'
		})
	}
	}, [app, current])

	const onChange = e => {
		setContact({
			...contact,
			[e.target.name]: e.target.value
		})
	}

	// Submit contact
	const onSubmit = e => {
		e.preventDefault()
		if (name.length < 2 || phone < 6) {
			setAlert(true)
			setTimeout(() => {
				setAlert(false)
			}, 2500)
		} 	
		else {
			if (current === null) {
				// Add contact
				const newContact = {
					name: contact.name,
					phone: contact.phone,
					type: contact.type
				}
				addContact(newContact)
			} else {
				// Update contact
				updateContact(contact)
			}
			setContact({
				name: '',
				phone: '',
				type: 'personal'
			})
			clearCurrent()
		}
	}

  return (
		<form onSubmit={onSubmit} style={{backgroundColor: '#ccc', padding: '10px', borderRadius: '5px'}}>
			<h4>
				<strong>
					{current === null
						? <span>Add contact</span>
						:	<span>Edit contact</span>
					}
				</strong>
			</h4>

			{alert === true ? (
				<div className='alert alert-warning' role='alert'>
					Incorrect name or phone length
				</div>
			) : null}

			{/* Contact name */}
			<div className='form-group row'>
				<label htmlFor='name' className='col-sm-2 col-form-label'>
					<strong>Name:</strong>
				</label>
				<div className='col-sm-10'>
					<input
						type='text'
						className='form-control'
						id='name'
						name='name'
						value={name}
						onChange={onChange}
					/>
				</div>
			</div>

			{/* Contact phone */}
			<div className='form-group row'>
				<label htmlFor='phone' className='col-sm-2 col-form-label'>
					<strong>Phone:</strong>
				</label>
				<div className='col-sm-10'>
					<input
						type='text'
						className='form-control'
						id='phone'
						name='phone'
						value={phone}
						onChange={onChange}
					/>
				</div>
			</div>

			{/* CheckBox */}
			<fieldset className='form-group'>
				<div className='row'>
					<legend className='col-form-label col-sm-2 pt-0'>
						<strong>Contact Type:</strong>
					</legend>
					<div className='col-sm-10'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='type'
								id='type1'
								value='personal'
								checked={type === 'personal'}
								onChange={onChange}
							/>
							<label className='form-check-label' htmlFor='type1'>
								Personal
							</label>
						</div>

						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='type'
								id='type2'
								value='professional'
								checked={type === 'professional'}
								onChange={onChange}
							/>
							<label className='form-check-label' htmlFor='type2'>
								Professional
							</label>
						</div>
					</div>
				</div>
			</fieldset>

			{/* Button */}
			<div className='form-group row'>
				<div className='col-sm-10'>
					<button type='submit' className='btn btn-primary' value='Add contact'>
						{current === null
							? <span>Add contact</span>
							:	<span>Edit contact</span>
						}
					</button>
				</div>
			</div>
		</form>
	)
}

const mapStateToProps = state => ({
	app: state.app
})

export default connect(mapStateToProps, { addContact, updateContact, clearCurrent })(ContactForm)