import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact15.css'

const Contact15 = (props) => {
  return (
    <div className="contact15-contact20 thq-section-padding">
      <div className="contact15-max-width thq-section-max-width">
        <div className="contact15-section-title">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="contact15-text19 thq-body-small">
                  Default value
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact15-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact15-text23 thq-heading-2">
                    Default value
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact15-row">
          <div className="contact15-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact15-contact-info1">
              <div className="contact15-content3">
                <h3 className="contact15-text12 thq-heading-3">Email</h3>
                <p>
                  {props.content3 ?? (
                    <Fragment>
                      <p className="contact15-text18 thq-body-large">
                        Napisz do nas maila (Preferowane)
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact15-text21 thq-body-small">
                      info@volleyballtournament.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact15-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact15-contact-info2">
              <div className="contact15-content5">
                <h3 className="thq-heading-3">Telefon</h3>
                <p>
                  {props.content5 ?? (
                    <Fragment>
                      <p className="contact15-text20 thq-body-large">
                        Zadzwoń Do nas
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact15-text25 thq-body-small">
                      48+ 2137
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact15-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact15-contact-info3">
              <div className="contact15-content7">
                <h3 className="thq-heading-3">Miejsce</h3>
                <p>
                  {props.content6 ?? (
                    <Fragment>
                      <p className="contact15-text22 thq-body-large">
                        Miejscowość w którym odbywa się cały turniej
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact15-text24 thq-body-small">
                      Park w Miliczu
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

Contact15.defaultProps = {
  content3: undefined,
  content1: undefined,
  content5: undefined,
  email1: undefined,
  content6: undefined,
  heading1: undefined,
  address1: undefined,
  phone1: undefined,
}

Contact15.propTypes = {
  content3: PropTypes.element,
  content1: PropTypes.element,
  content5: PropTypes.element,
  email1: PropTypes.element,
  content6: PropTypes.element,
  heading1: PropTypes.element,
  address1: PropTypes.element,
  phone1: PropTypes.element,
}

export default Contact15
