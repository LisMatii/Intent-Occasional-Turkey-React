import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Intent Occasional Turkey</title>
        <meta property="og:title" content="About - Intent Occasional Turkey" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10 thq-link thq-body-small">
              Strona Główna
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11 thq-link thq-body-small">
              Kontakt
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12 thq-link thq-body-small">
              #schedule
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13 thq-link thq-body-small">O nas</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15 thq-body-large">Teams</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16 thq-body-large">Schedule</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17 thq-body-large">Register</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/contact"
        page1Description={
          <Fragment>
            <span className="about-text20 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text21 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text22 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        content1={
          <Fragment>
            <span className="about-text24 thq-body-large">
              Join us for the most exciting volleyball tournament of the year!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text25 thq-heading-1">
              Annual Volleyball Tournament
            </span>
          </Fragment>
        }
      ></Hero8>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text26 thq-heading-2">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features1
        slogan={
          <Fragment>
            <span className="about-text27 thq-body-small">
              Where Professional Volleyball Meets Family Fun
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text28 thq-heading-2">
              Exciting Features of the Tournament
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text29 thq-heading-3">
              Professional Teams
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text30 thq-heading-3">
              Family-Friendly Environment
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text31 thq-heading-3">Exciting Matches</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text32 thq-body-small">
              Discover what makes our volleyball tournament a must-attend event
              for players and spectators alike.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text33 thq-body-small">
              Watch top professional volleyball teams compete in thrilling
              matches.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text34 thq-body-small">
              Enjoy a fun and safe atmosphere suitable for all ages.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text35 thq-body-small">
              Experience intense and competitive games that will keep you on the
              edge of your seat.
            </span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member1={
          <Fragment>
            <span className="about-text36 thq-body-small">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text37 thq-body-small">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text38 thq-body-small">Mike Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text39 thq-body-small">Sarah Brown</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text40 thq-body-small">Full name</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text41 thq-body-small">Full name</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text42 thq-body-small">Full name</span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text43 thq-body-small">Full name</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text44 thq-body-large">
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
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text47 thq-heading-2">
              Poznaj nasz team!
            </span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text48 thq-body-small">Head Coach</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text49 thq-body-small">Assistant Coach</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text50 thq-body-small">Team Captain</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text51 thq-body-small">Team Manager</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text52 thq-body-small">Job title</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text53 thq-body-small">Job title</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text54 thq-body-small">Job title</span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text55 thq-body-small">Job title</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text56 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text57 thq-body-small">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text58 thq-body-small">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text59 thq-body-small">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text60 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text61 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text62 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text63 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></Team1>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text64 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text65 thq-body-small">Schedule</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text66 thq-body-small">Teams</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text67 thq-body-small">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text68 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text69 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text70 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text71 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
