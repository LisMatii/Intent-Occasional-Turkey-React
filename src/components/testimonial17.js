import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text36 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text24 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35 thq-body-small">
                            Professional Volleyball Player
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        This tournament was one of the best I&apos;ve ever
                        participated in. The organization was top-notch, and the
                        competition was fierce. Can&apos;t wait for next year!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33 thq-body-small">
                            Volleyball Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text37 thq-body-small">
                        I had an amazing time at the tournament. The atmosphere
                        was electric, and I got to watch some incredible
                        matches. Definitely coming back next time!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text25 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34 thq-body-small">
                            Coach
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text31 thq-body-small">
                        As a coach, I appreciate well-organized events like this
                        tournament. It provided a great platform for my team to
                        showcase their skills and learn from tough competition.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            Sarah Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Spectator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        I&apos;m not a player myself, but I had a blast cheering
                        for the teams and soaking in the excitement. The
                        tournament had something for everyone!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Src:
    'https://images.unsplash.com/photo-1534790741270-1ecaaee38a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author3Name: undefined,
  author4Name: undefined,
  author4Position: undefined,
  review1: undefined,
  review4: undefined,
  author3Alt: 'Image of Michael Johnson',
  author2Name: undefined,
  author4Alt: 'Image of Sarah Lee',
  review3: undefined,
  content1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1558624232-75ee22af7e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
  author3Position: undefined,
  author1Alt: 'Image of John Doe',
  author3Src:
    'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author1Position: undefined,
  heading1: undefined,
  review2: undefined,
}

Testimonial17.propTypes = {
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
  author3Name: PropTypes.element,
  author4Name: PropTypes.element,
  author4Position: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.element,
  author4Alt: PropTypes.string,
  review3: PropTypes.element,
  content1: PropTypes.element,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
  author2Position: PropTypes.element,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  heading1: PropTypes.element,
  review2: PropTypes.element,
}

export default Testimonial17
