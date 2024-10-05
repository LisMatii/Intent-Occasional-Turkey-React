import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Contact15 from '../components/contact15'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Intent Occasional Turkey</title>
        <meta
          property="og:title"
          content="Contact - Intent Occasional Turkey"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10 thq-link thq-body-small">
              Strona Główna
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11 thq-link thq-body-small">
              Kontakt
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12 thq-link thq-body-small">
              #schedule
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13 thq-link thq-body-small">
              O nas
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15 thq-body-large">Teams</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16 thq-body-large">Schedule</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17 thq-body-large">Register</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/contact"
        page1Description={
          <Fragment>
            <span className="contact-text20 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Contact15
        email1={
          <Fragment>
            <span className="contact-text24 thq-body-small">
              info@volleyballtournament.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text25 thq-body-small">48+ 2137</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text26 thq-body-small">
              Park w Miliczu
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27 thq-body-small">
              Kontakt z nami
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text28 thq-body-large">
              Napisz do nas maila (Preferowane)
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text29 thq-body-large">
              Zadzwoń Do nas
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="contact-text30 thq-body-large">
              Miejscowość w którym odbywa się cały turniej
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text31 thq-heading-2">Kontakt</span>
          </Fragment>
        }
      ></Contact15>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text32 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text33 thq-body-small">Schedule</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text34 thq-body-small">Teams</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text35 thq-body-small">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text36 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text37 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text38 thq-body-small">
              Cookies Policy
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text39 thq-body-small">
              Privacy Policy
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
