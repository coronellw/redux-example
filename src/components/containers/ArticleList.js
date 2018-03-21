import { connect } from 'react-redux'
import { removeArticle } from '../../store/actions'
import ArticleList from '../ui/ArticleList'

const mapStateToProps = state => {
	return { articles: state.articles }
}

const mapDispatchToProps = dispatch => {
	return {
		onRemoveArticle: article_id => dispatch(removeArticle(article_id))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList)