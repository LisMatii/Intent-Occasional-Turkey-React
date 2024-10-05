import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact11.css'

const Contact11 = (props) => {
  return (
    <div className="contact11-container thq-section-padding">
      <div className="contact11-max-width thq-section-max-width">
        <div className="contact11-section-title">
          <div className="contact11-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact11-text22 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact11-content2 thq-flex-row">
          <div className="contact11-content3">
            <div className="contact11-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact11-contact-info1">
                <h3 className="contact11-text11 thq-heading-3">Email</h3>
                <p>
                  {props.content2 ?? (
                    <Fragment>
                      <p className="contact11-text20 thq-body-large">
                        We are here to assist you with any questions you may
                        have.
                      </p>
                    </Fragment>
                  )}
                </p>
                <span>
                  {props.email ?? (
                    <Fragment>
                      <span className="contact11-text26 thq-body-small">
                        info@volleyballtournament.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact11-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact11-contact-info2">
                <h3 className="thq-heading-3">Telefon</h3>
                <p>
                  {props.content3 ?? (
                    <Fragment>
                      <p className="contact11-text24 thq-body-large">
                        Feel free to reach out to us via email or phone for more
                        information.
                      </p>
                    </Fragment>
                  )}
                </p>
                <span>
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact11-text25 thq-body-small">
                        +1 (555) 123-4567
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact11-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact11-contact-info3">
                <h3 className="contact11-text16 thq-heading-3">
                  <span>Miejsce</span>
                  <br></br>
                </h3>
                <p>
                  {props.content5 ?? (
                    <Fragment>
                      <p className="contact11-text21 thq-body-large">
                        We look forward to hearing from you!
                      </p>
                    </Fragment>
                  )}
                </p>
                <span>
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact11-text23 thq-body-small">
                        123 Tournament Avenue, Beach City, USA
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

Contact11.defaultProps = {
  content2: undefined,
  content5: undefined,
  heading1: undefined,
  address1: undefined,
  content3: undefined,
  phone1: undefined,
  email: undefined,
}

Contact11.propTypes = {
  content2: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  address1: PropTypes.element,
  content3: PropTypes.element,
  phone1: PropTypes.element,
  email: PropTypes.element,
}

export default Contact11
