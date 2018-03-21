import { PropTypes } from 'react'
import uuidv1 from 'uuid'

const AddArticle = ({title, addArticle=f=>f}) =>{
	return(
		<form onSubmit={this.hanldeSubmit}>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					className="form-control"
					id="title"
					value={title}
					onChange={this.hanldeChange}
				/>
			</div>
			<button type="submit" className="btn btn-success btn-lg">
				SAVE
			</button>
		</form>
	)
}