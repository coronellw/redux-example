import { ADD_ARTICLE, REMOVE_ARTICLE} from '../constants'

export const addArticle = article => ({type: ADD_ARTICLE, payload: article})
export const removeArticle = article_id => ({type: REMOVE_ARTICLE, payload: article_id})