import React from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import Banner from '../../Banner'

const CreateArticleForm = ({ handleInputChange, categories, handleSubmit, errors, editing, article, title, category, content, updateArticle, handleEditorState }) => ((
  <div>
    <Banner
      backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
      title={editing ? `Editing article: ${article.title}` : 'Write an article'}
    />
    
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <ul className="list-group">
              {
                // errors.map((error, index) => <li key={index} className="list-group-item text-danger">{error.message}</li>)
                errors.map((error) => <li key={error.message} className="list-group-item text-danger">{error.message}</li>)
              }
              </ul>
              <form className="p-30 bg-gray rounded" onSubmit={editing ? updateArticle : handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-12 my-5">
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <select
                      name="category"
                      className="form-control form-control-lg"
                      value={category}
                      onChange={handleInputChange}
                    >
                      <option value>Select category</option>
                      {
                        categories.map(category => 
                          <option key={category.id} value={category.id}>{category.name}</option>  
                        )
                      }
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <Editor
                    editorState={content}
                    onEditorStateChange={handleEditorState}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-lg btn-primary" type="submit">
                    { editing ? 'Update article' : 'Create Article' }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  </div>
))

CreateArticleForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired
}

export default CreateArticleForm