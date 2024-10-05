import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text6 thq-heading-1">
                  Welcome to the Annual Volleyball Tournament
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text7 thq-body-large">
                  Join us for an exciting weekend of volleyball action! Whether
                  you&apos;re a player or a fan, this tournament promises to be
                  a thrilling event for all.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <Link to="/about" className="hero17-button1 thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text5 thq-body-small">
                    Register Now
                  </span>
                </Fragment>
              )}
            </span>
          </Link>
          <Link to="/contact" className="hero17-button2 thq-button-outline">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text8 thq-body-small">
                    Learn More
                  </span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image3Alt: 'Trophy for the winning team',
  rootClassName: '',
  image7Src:
    'https://images.unsplash.com/photo-1721209223691-437ef51a8b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1625480859504-e5eca6347c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1612151388040-9ec75d2de8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1646343253681-eaafc374b2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1556732282-595ef530909c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1599509033274-4d2128aa81e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Players celebrating a point',
  action1: undefined,
  heading1: undefined,
  image8Alt: 'Players high-fiving after a win',
  image6Alt: 'Spectators enjoying the games',
  image10Alt: 'Merchandise stand with tournament souvenirs',
  content1: undefined,
  image7Alt: 'Referee making a call on the court',
  image12Src:
    'https://images.unsplash.com/photo-1625467771283-f5683e11e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Kids playing volleyball in a mini court',
  action2: undefined,
  image12Alt: 'Sunset view of the tournament venue',
  image5Alt: 'Team huddle before a match',
  image2Alt: 'Crowd cheering at the tournament',
  image1Alt: 'Volleyball players in action',
  image9Alt: 'Food and drinks available at the venue',
  image8Src:
    'https://images.unsplash.com/photo-1713473476924-75f1a33e8960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1656110073843-1bf237ebabc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1646343251574-a7b03ee3dbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1625467983319-6a0e5152bf67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero17.propTypes = {
  image3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image7Src: PropTypes.string,
  image6Src: PropTypes.string,
  image11Src: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image4Alt: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image8Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  content1: PropTypes.element,
  image7Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  image12Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image10Src: PropTypes.string,
  image9Src: PropTypes.string,
  image4Src: PropTypes.string,
}

export default Hero17
