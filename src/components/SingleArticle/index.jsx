import React from 'react'
import { Link } from 'react-router-dom'

const SingleArticle = () => (
  <div>
    {/* Header */}
    <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-cup.jpg)` }} data-overlay={8}>
      <div className="container text-center">
        <div className="row h-full">
          <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
            <p className="opacity-70">News</p>
            <br />
            <h1 className="display-4 hidden-sm-down">We just passed 1,000 customers!</h1>
            <h1 className="hidden-md-up">We&#39ve just passed 1,000 customers!</h1>
            <br />
            <br />
            <p>
              <span className="opacity-70 mr-8">By</span>
              <Link className="text-white" href="#">Hossein Shams</Link>
            </p>
            <p>
              <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
            </p>
          </div>
          <div className="col-12 align-self-end text-center">
            <Link
              className="scroll-down-1 scroll-down-inverse"
              href="#"
              data-scrollto="section-content"
            >
              <span />
            </Link>
          </div>
        </div>
      </div>
    </header>
    {/* END Header */}
    {/* Main container */}
    <main className="main-content">
      <div className="section" id="section-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <p className="lead">Dynamically
              </p>
              <hr className="w-100" />
              <p>Proactively whiteboard</p>
              <p>Compellingly plagiarize </p>
            </div>
          </div>
          <br />
          <p>
            <img src={`${process.env.PUBLIC_URL}/assets/img/blog-img.jpg`} alt="..." />
          </p>
          <br />
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <p>Assertively empower customized alignments.</p>
              <ul>
                <li>Energistically coordinate business relationships</li>
                <li>Change via resource-leveling innovation</li>
                <li>Efficiently develop fully researched experiences and integrated</li>
                <li>Assertively empower customized alignments vis-a-vis go forward vortals</li>
              </ul>
              <p>Quickly innovate high-qualit-e
                with.
              </p>
              <blockquote className="blockquote">
                <div className="quote-sign" />
                <p>Objectively grow out-of-the-box results with go forward methodologies.</p>
                <footer>Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>Proactively underwhelm proactive leadership.</p>
              <div className="gap-multiline-items-1 mt-30">
                <Link className="badge badge-pill badge-default" href="#">Record</Link>
                <Link className="badge badge-pill badge-default" href="#">Progress</Link>
                <Link className="badge badge-pill badge-default" href="#">Customers</Link>
                <Link className="badge badge-pill badge-default" href="#">News</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bt-1 bg-grey">
        <div className="container">
          <div className="row text-center">
            <div className="text-center p-5">
              COMMENTS HERE.
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* END Main container */}
  </div>
)

export default SingleArticle