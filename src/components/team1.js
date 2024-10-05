import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <div className="team1-content10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="team1-text62 thq-heading-2">Meet Our Team</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="team1-text59 thq-body-large">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team1-content11">
          <div className="team1-content12">
            <div className="team1-row1">
              <div className="team1-container1">
                <div className="team1-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content13">
                    <div className="team1-title1">
                      <span>
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text48 thq-body-small">
                              John Doe
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text45 thq-body-small">
                              Head Coach
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text42 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="team1-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content14">
                    <div className="team1-title2">
                      <span>
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text36 thq-body-small">
                              Jane Smith
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text39 thq-body-small">
                              Assistant Coach
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text51 thq-body-small">
                            Sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content15">
                    <div className="team1-title3">
                      <span>
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text44 thq-body-small">
                              Mike Johnson
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text56 thq-body-small">
                              Team Captain
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text40 thq-body-small">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="team1-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content16">
                    <div className="team1-title4">
                      <span>
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text53 thq-body-small">
                              Sarah Brown
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text55 thq-body-small">
                              Team Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text50 thq-body-small">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-row2">
              <div className="team1-container3">
                <div className="team1-card5">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content17">
                    <div className="team1-title5">
                      <span>
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team1-text38 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team1-text41 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team1-text63 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="team1-card6">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image6 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content18">
                    <div className="team1-title6">
                      <span>
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team1-text37 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team1-text57 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team1-text49 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="team1-container4">
                <div className="team1-card7">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image7 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content19">
                    <div className="team1-title7">
                      <span>
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team1-text47 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member7Job ?? (
                          <Fragment>
                            <span className="team1-text52 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team1-text58 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="team1-card8">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image8 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content20">
                    <div className="team1-title8">
                      <span>
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team1-text54 thq-body-small">
                              Full name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member8Job ?? (
                          <Fragment>
                            <span className="team1-text46 thq-body-small">
                              Job title
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team1-text43 thq-body-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
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
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member7Alt: 'Member Alt',
  member6Alt: 'Member Alt',
  member2: undefined,
  member6: undefined,
  member5: undefined,
  member2Job: undefined,
  member3Content: undefined,
  member5Job: undefined,
  member1Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1542850802-8a047a726d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Content: undefined,
  member3: undefined,
  member1Job: undefined,
  member8Job: undefined,
  member4Alt: 'Image of Sarah Brown, Team Manager',
  member8Alt: 'Member Alt',
  member7: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1460904577954-8fadb262612c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1: undefined,
  member3Alt: 'Image of Mike Johnson, Team Captain',
  member4Src:
    'https://images.unsplash.com/photo-1558898479-33c0057a5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Content: undefined,
  member5Alt: 'Member Alt',
  member8Src:
    'https://images.unsplash.com/photo-1711898383891-a1d9f4be259c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  member1Alt: 'Image of John Doe, Head Coach',
  member2Content: undefined,
  member7Job: undefined,
  member4: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member8: undefined,
  member4Job: undefined,
  member3Job: undefined,
  member6Job: undefined,
  member7Content: undefined,
  content2: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1618587068859-d9903ef41bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Alt: 'Image of Jane Smith, Assistant Coach',
  member5Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1535368362808-e21d5f250bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNTI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Team1.propTypes = {
  member7Alt: PropTypes.string,
  member6Alt: PropTypes.string,
  member2: PropTypes.element,
  member6: PropTypes.element,
  member5: PropTypes.element,
  member2Job: PropTypes.element,
  member3Content: PropTypes.element,
  member5Job: PropTypes.element,
  member1Content: PropTypes.element,
  member3Src: PropTypes.string,
  member8Content: PropTypes.element,
  member3: PropTypes.element,
  member1Job: PropTypes.element,
  member8Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member8Alt: PropTypes.string,
  member7: PropTypes.element,
  member1Src: PropTypes.string,
  member1: PropTypes.element,
  member3Alt: PropTypes.string,
  member4Src: PropTypes.string,
  member6Content: PropTypes.element,
  member5Alt: PropTypes.string,
  member8Src: PropTypes.string,
  member4Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member2Content: PropTypes.element,
  member7Job: PropTypes.element,
  member4: PropTypes.element,
  member5Src: PropTypes.string,
  member8: PropTypes.element,
  member4Job: PropTypes.element,
  member3Job: PropTypes.element,
  member6Job: PropTypes.element,
  member7Content: PropTypes.element,
  content2: PropTypes.element,
  member6Src: PropTypes.string,
  heading1: PropTypes.element,
  member2Src: PropTypes.string,
  member2Alt: PropTypes.string,
  member5Content: PropTypes.element,
  member7Src: PropTypes.string,
}

export default Team1
