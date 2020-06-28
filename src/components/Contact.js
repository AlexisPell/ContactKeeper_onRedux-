import React from 'react'
import { connect } from 'react-redux'
import { deleteContact, setCurrent, clearCurrent } from './../actions/appActions'

const Contact = ({ contact, deleteContact, setCurrent, clearCurrent }) => {
	const { id, name, phone, type } = contact

	const onDelete = () => {
		deleteContact(id)
		clearCurrent()
	}

	const onEdit = () => {
		setCurrent(contact)
	}
 
	return (
		<div className='card mb-2'>
			<div className='card-header d-flex justify-content-between p-2'>
				<button onClick={onEdit} className='btn btn-primary btn-sm'>Edit</button>
				<span>Contact card</span>
				<button onClick={onDelete} className='btn btn-danger btn-sm'>Delete</button>
			</div>
			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>{name}</li>
				<li className='list-group-item'>{phone}</li>
				<li className='list-group-item'>{type}</li>
			</ul>
		</div>
	)
}

export default connect(null, { deleteContact, setCurrent, clearCurrent })(Contact)

