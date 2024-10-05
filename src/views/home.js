import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import AppComponent from '../components/component'
import Features25 from '../components/features25'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Intent Occasional Turkey</title>
        <meta property="og:title" content="Intent Occasional Turkey" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">
              Strona Główna
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">Kontakt</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              #schedule
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">O nas</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">Teams</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">Schedule</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Register</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/contact"
        page1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24 thq-body-small">O nas</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25 thq-body-small">
              <span>Kontakt z nami</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text28 thq-body-large">
              Najlepszy turniej w polsce z Wilfredo Leonem!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text29 thq-heading-1">
              Łowimy talenty z Wilefredo Leonem!
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text30">Register Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text31 thq-body-large">
              Napisz eMaila aby się z nami skontaktować
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text32 thq-heading-2">Dołącz do nas!</span>
          </Fragment>
        }
      ></CTA26>
      <AppComponent rootClassName="app-componentroot-class-name"></AppComponent>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text33 thq-heading-2">
              Professional Teams
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">Exciting Matches</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">
              Family-Friendly Environment
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Watch top professional volleyball teams compete for the
              championship title.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              Experience thrilling and intense matches that will keep you on the
              edge of your seat.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              Enjoy a family-friendly atmosphere with activities for all ages to
              participate in.
            </span>
          </Fragment>
        }
      ></Features25>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text39 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text40 thq-heading-2">Kontakt z nami!</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text41 thq-heading-3">Gdzie gramy?</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text42 thq-heading-3">Supprot</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text43 thq-body-large">Park w Miliczu</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text44 thq-body-large">
              Email: support@volleyballtournament.com
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text45 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text46 thq-body-small">Schedule</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text47 thq-body-small">Teams</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text48 thq-body-small">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text49 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text50 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text51 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text52 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
