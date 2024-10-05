import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Team8 from './team8'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <Team8
        member1={
          <Fragment>
            <span className="component-text10 thq-body-small">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="component-text11 thq-body-small">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="component-text12 thq-body-small">
              Alex Johnson
            </span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="component-text13 thq-body-small">Sarah Lee</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="component-text14 thq-body-small">
              Michael Brown
            </span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="component-text15 thq-body-small">Emily Davis</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="component-text16 thq-body-small">
              Poznaj naszych sponsorów
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="component-text17 thq-heading-2">
              Sponsorzy turnieju!
            </span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="component-text18 thq-body-small">
              Tournament Director
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="component-text19 thq-body-small">
              Marketing Manager
            </span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="component-text20 thq-body-small">
              Logistics Coordinator
            </span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="component-text21 thq-body-small">
              Sponsorship Coordinator
            </span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="component-text22 thq-body-small">
              Head Referee
            </span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="component-text23 thq-body-small">
              Entertainment Coordinator
            </span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="component-text24 thq-body-small">
              John has been organizing volleyball events for over a decade,
              ensuring a smooth and exciting experience for all participants.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="component-text25 thq-body-small">
              Jane is responsible for promoting our tournament and ensuring that
              the word gets out to volleyball enthusiasts everywhere.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="component-text26 thq-body-small">
              Alex handles all the behind-the-scenes work to make sure
              everything runs seamlessly during the tournament.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="component-text27 thq-body-small">
              Sarah works tirelessly to secure sponsorships and partnerships to
              support our tournament and make it even more exciting.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="component-text28 thq-body-small">
              Michael brings his expertise and fair judgment to ensure that all
              matches are played fairly and according to the rules.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="component-text29 thq-body-small">
              Emily plans fun activities and entertainment for families and
              spectators to enjoy between matches.
            </span>
          </Fragment>
        }
      ></Team8>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
