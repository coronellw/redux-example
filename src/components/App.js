import React from 'react';
import List from './List'
import AddArticle from './containers/AddArticle'

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <AddArticle />
        </div>
    </div>
)

export default App;