import React from 'react';
import ArticleList from './containers/ArticleList'
import AddArticle from './containers/AddArticle'

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <ArticleList />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <AddArticle />
        </div>
    </div>
)

export default App;