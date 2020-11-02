import React from 'react'

export default ({ publicationLinks }) => {
    return (
        <section className="bg-gray page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">ABOUT ME</h2>
            </div>
          </div>
          <div className="row">
            {
                publicationLinks && publicationLinks.map(({ image, title, caption , instagram, contact}, index) => 
                    <div className="col-md-12 col-sm-12 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href={ contact }>
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                </div>
                            </div>
                            <img className="img-fluid" src={ image } alt={ image } />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                        <ul className="list-inline social-buttons">
                          <li className="list-inline-item">
                            <a href= { instagram }> 
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href= { contact }> 
                              <i className="fa fa-id-badge text-white"></i>
                            </a>
                          </li>
                        </ul>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}