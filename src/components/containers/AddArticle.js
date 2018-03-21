import {connect} from 'react-redux'
import { addArticle } from '../../store/actions'
import AddArticle from '../ui/AddArticle'

const mapDispatchToProps = dispatch => {
	return {
		addArticle: article => dispatch(addArticle(article))
	}
}

export default connect(null,mapDispatchToProps)(AddArticle)
