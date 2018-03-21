import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

const AddArticle = ({title, addArticle=f=>f}) =>{

	let _title

	const hanldeSubmit = e => {
		e.preventDefault()
		addArticle({
			title: _title.value,
			id: uuidv1()
		})
		_title.value=''
	}

	return(
		<form onSubmit={hanldeSubmit}>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					className="form-control"
					id="title"
					ref={input => _title = input}
				/>
			</div>
			<button type="submit" className="btn btn-success btn-lg">
				SAVE
			</button>
		</form>
	)
}

AddArticle.propTypes = {
	title: PropTypes.string,
	addArticle: PropTypes.func
}

export default AddArticle