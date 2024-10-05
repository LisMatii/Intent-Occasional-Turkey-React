import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero8-text4 thq-heading-1">
                    Annual Volleyball Tournament
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero8-text3 thq-body-large">
                    Join us for the most exciting volleyball tournament of the
                    year!
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions"></div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1521137959136-6bc78e585f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Professional volleyball players in action',
  content1: undefined,
  heading1: undefined,
}

Hero8.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero8
