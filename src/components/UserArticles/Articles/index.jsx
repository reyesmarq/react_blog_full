import React from 'react'
import Banner from '../../Banner'
import Article from '../../Article'
import { Link } from 'react-router-dom'

const Articles = ({ articles, handlePagination, nextUrl, prevUrl }) => ((
  <div>

    <Banner
      backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
      title="My articles"
      subTitle="Here are the articles created by you"
    />

    <main className="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
          {
            articles && articles.map(article => (
              <div key={article.id}>
                <Article article={article} />
                <hr />
              </div>
            ))
          }

          <nav className="flexbox mt-50 mb-50">

            <Link className={`btn btn-white ${prevUrl ? '' : 'disabled'}`} to="#" onClick={() => handlePagination(prevUrl)}>
              <i className="ti-arrow-left fs-9 ml-4" /> Previous Page
            </Link>

            <Link className={`btn btn-white ${nextUrl ? '' : 'disabled'}`} to="#" onClick={() => handlePagination(nextUrl)}> 
              Next Page <i className="ti-arrow-right fs-9 mr-4" />
            </Link>
            
          </nav>
        </div>
      </div>
    </main>
  </div>
))

export default Articles