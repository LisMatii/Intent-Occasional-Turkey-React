import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text16 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text19 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text17 thq-heading-3">
                    Miejsce Turnieju
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text21 thq-body-large">
                    123 Main Street, City, Country
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://maps.app.goo.gl/1yZeb9FnSvhZpJZU8"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Zobacz gdzie to jest!
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text20 thq-heading-3">
                    Support Team
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text18 thq-body-large">
                    Email: p@p.pl
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="mailto:l1spek@outlook.com?subject=Pomoc: D.milicz-tournament-withw"
                className="contact10-link2 thq-button-flat thq-body-small"
              >
                Napisz do nas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: undefined,
  location1: undefined,
  location2Description: undefined,
  location2ImageAlt: 'Support Team',
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1694328412965-839277dba03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  location2: undefined,
  location1ImageAlt: 'Tournament Headquarters',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1643199187247-b3b6009bf0bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyODIzOHw&ixlib=rb-4.0.3&q=80&w=1400',
  location1Description: undefined,
}

Contact10.propTypes = {
  heading1: PropTypes.element,
  location1: PropTypes.element,
  location2Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
}

export default Contact10
