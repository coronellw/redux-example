import React from 'react'
import PropTypes from 'prop-types'

const ArticleList = ({articles, onRemoveArticle=f=>f}) => {
	return(
		<ul className="list-group list-group-flush">
			{articles.map(el => (
					<li className="list-group-item" key={el.id}>
						{el.title}
						<span className="close" onClick={()=>onRemoveArticle(el.id)}>x</span>
					</li>
				)
			)}
		</ul>
	)
}

ArticleList.proptypes = {
	articles: PropTypes.object,
	onRemoveArticle: PropTypes.func
}

export default ArticleList