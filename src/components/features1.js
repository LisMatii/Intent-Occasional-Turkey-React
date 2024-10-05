import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span>
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text18 thq-body-small">
                    Where Professional Volleyball Meets Family Fun
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features1-text17 thq-heading-2">
                    Exciting Features of the Tournament
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text19 thq-body-small">
                  Discover what makes our volleyball tournament a must-attend
                  event for players and spectators alike.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features1-text15 thq-heading-3">
                        Professional Teams
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text16 thq-body-small">
                        Watch top professional volleyball teams compete in
                        thrilling matches.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features1-text21 thq-heading-3">
                        Family-Friendly Environment
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text14 thq-body-small">
                        Enjoy a fun and safe atmosphere suitable for all ages.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features1-text20 thq-heading-3">
                        Exciting Matches
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text13 thq-body-small">
                        Experience intense and competitive games that will keep
                        you on the edge of your seat.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions"></div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3Description: undefined,
  feature2Description: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Professional Teams Image',
  feature1Description: undefined,
  sectionTitle: undefined,
  feature2ImageAlt: 'Family-Friendly Environment Image',
  slogan: undefined,
  sectionDescription: undefined,
  feature3Title: undefined,
  feature2Title: undefined,
  feature3ImageAlt: 'Exciting Matches Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1536900581608-8409646ffe10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1522071901873-411886a10004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  slogan: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
}

export default Features1
