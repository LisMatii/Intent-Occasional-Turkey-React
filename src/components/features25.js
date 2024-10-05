import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text2 thq-heading-2">
                      Professional Teams
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Watch top professional volleyball teams compete for the
                      championship title.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text3 thq-heading-2">
                      Exciting Matches
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text6 thq-body-small">
                      Experience thrilling and intense matches that will keep
                      you on the edge of your seat.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text5 thq-heading-2">
                      Family-Friendly Environment
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text4 thq-body-small">
                      Enjoy a family-friendly atmosphere with activities for all
                      ages to participate in.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1691315963186-532f5e299e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1711587165362-58837892388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Professional Teams Image Alt Text',
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1614058584275-7330e8f9929c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODEyNDM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Exciting Matches Image Alt Text',
  feature2Title: undefined,
  feature3Description: undefined,
  feature3ImgAlt: 'Family-Friendly Environment Image Alt Text',
  feature3Title: undefined,
  feature2Description: undefined,
}

Features25.propTypes = {
  feature1Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features25
