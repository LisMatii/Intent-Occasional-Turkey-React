import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text25 thq-body-small">20</span>
              </Fragment>
            )}
          </span>
          <p>
            {props.content2 ?? (
              <Fragment>
                <p className="stats2-text21 thq-body-large">50</p>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats2-text28 thq-heading-2">
                      Number of Teams
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text24 thq-body-small">
                      Total number of professional teams participating in the
                      tournament
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="stats2-text22 thq-heading-2">
                      Matches Played
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text27 thq-body-small">
                      Total number of matches played throughout the tournament
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats2-text23 thq-heading-2">Attendance</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text29 thq-body-small">
                      Total number of spectators attending the event
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2>
                {props.stat4 ?? (
                  <Fragment>
                    <h2 className="stats2-text20 thq-heading-2">
                      Winning Team
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text26 thq-body-small">
                      Name of the professional team that emerged as the
                      tournament champions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1505837070343-f0f1722298ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  stat4: undefined,
  content2: undefined,
  stat2: undefined,
  stat3: undefined,
  stat1Description: undefined,
  content1: undefined,
  stat4Description: undefined,
  stat2Description: undefined,
  stat1: undefined,
  stat3Description: undefined,
  image1Alt: 'Volleyball tournament stats image',
}

Stats2.propTypes = {
  image1Src: PropTypes.string,
  stat4: PropTypes.element,
  content2: PropTypes.element,
  stat2: PropTypes.element,
  stat3: PropTypes.element,
  stat1Description: PropTypes.element,
  content1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat1: PropTypes.element,
  stat3Description: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Stats2
