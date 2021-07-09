import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import "../assets/main.scss"
import { graphql } from "gatsby"

export default function Index({ data }) {
  const metadata = useSiteMetadata()
  const menuNodes = data.allMarkdownRemark.edges

  return (
    <>
      <span
        id="page-top"
        data-spy="scroll"
        data-target=".navbar-fixed-top"
      ></span>
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <span
                id="navbarTitle"
                className="light"
                style={{ display: "none" }}
              >
                Jaimie van Heije
              </span>
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <a className="page-scroll" href="#1062">
                  Concept
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#1071">
                  Menu
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#1080">
                  Reservation
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#1068">
                  Collaborations
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#1072">
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="page-scroll"
                  href="https://www.resengo.com/code/Resengo/?ACTION=TAKEAWAY&CompanyID=1739713"
                  target="_blank"
                >
                  Takeaway
                </a>
              </li>
              <li>
                <a
                  className="page-scroll"
                  href="https://www.resengo.com/Code/Webshop/WS_Shop.asp?AID=1&LC=NL&CompanyID=1739713"
                  target="_blank"
                >
                  Cadeaubon
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/JaimieVanHeijeRestaurant">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/jaimievanheije/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">
                  <img
                    src={"/media/logo.png"}
                    alt="Jaimie van Heije Restaurant"
                  />
                </h1>
                <p className="intro-text">
                  Jaimie van Heije and his ambitious kitchen team welcome you to
                  the dynamic ambience in our restaurant.
                </p>
                <a href="#1062" className="btn btn-circle page-scroll">
                  <i className="fa fa-angle-double-down animated"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="1062" className="container content-section text-center">
        <div className="row">
          <h2>Concept</h2>

          <div className="col-md-9 text-right">
            <p>
              Het chef’s restaurant Jaimie van Heije, in het pittoreske
              Ouderkerk aan de Amstel, is een restaurant waar elk detail tot in
              de puntjes is uitgedacht. Hier wordt elke dag keihard gewerkt aan
              een unieke kaart, sfeer en setting. Elk gerecht is anders, met
              echt goed eten en gezelligheid op een prachtige plek. De
              persoonlijkheid van Jaimie is dan ook te herkennen in alles; het
              eten, het interieur, het personeel en zelfs de gasten. Zijn
              eigenwijze stijl maakt elke lunch en elk diner een one-of-a-kind
              beleving.
            </p>
            <h3 className="margin-title">Chef Jaimie van Heije</h3>
            <p>
              Jaimie van Heije komt uit een gezin waar eten altijd centraal
              stond. Als klein jongetje raakte hij al geïnspireerd door de
              Indische keuken van zijn oma. Na zijn horeca opleiding is Jaimie
              van Heije binnen een paar jaar van hulp in de keuken uitgegroeid
              tot sous chef bij Ron Blaauw. Nadat zijn leermeester vertrok uit
              zijn restaurant in Ouderkerk aan de Amstel greep Jaimie zijn kans.
              Hij begon zijn eigen restaurant Jaimie van Heije, waar hij elke
              dag vol overgave zijn eigen gerechten bedenkt en creëert.
            </p>
            <h3 className="margin-title">Cuisine</h3>
            <p>
              <em>
                “Mijn cuisine is moeilijk om onder woorden te brengen. Ik
                gebruik al mijn ervaringen en inspiratie om elke dag weer nieuwe
                gerechten te bedenken. Ik wil mensen verrassen met nieuwe,
                spannende gerechten, met invloeden vanuit de hele wereld.”
              </em>{" "}
              aldus Jaimie van Heije. Veel mensen kiezen dan ook voor een
              verrassingsmenu en vertrouwen erop dat Jaimie van Heije en zijn
              team het beste van het beste samenstellen. Jaimie van Heije komt
              zelf ook altijd even aan tafel en geniet ervan om mensen te laten
              kennismaken met zijn nieuwe gerechten.
            </p>
          </div>
          <div className="col-md-3">
            <img src="/media/about.jpg" alt="Jaimie van Heije" />
          </div>
        </div>
      </section>

      <section id="1071" className="content-section text-center">
        <div className="background-section">
          <div className="container">
            <h2>Menu</h2>
            <br />
            <div className="row">
              {menuNodes.map(({ node }) => {
                return (
                  <button
                    key={node.id}
                    type="button"
                    className="btn btn-danger btn-lg margin-button"
                    data-toggle="modal"
                    data-target={`#${node.frontmatter.title.replace(/ /g,'')}`}
                  >
                    {node.frontmatter.title}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {menuNodes.map(({ node }) => {
        return (
          <div
            key={`${node.id}-modal`}
            className="modal fade"
            id={`${node.frontmatter.title.replace(/ /g,'')}`}
            tabIndex={-1}
            role="dialog"
            aria-labelledby={`${node.frontmatter.title}-label`}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="1074-label">
                    {node.frontmatter.title}
                  </h4>
                </div>
                <div className="modal-body text-center">
                  <section dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <section id="1080" className="container content-section text-center">
        <div className="row">
          <h2>Reservation</h2>

          <div className="col-md-6 text-right">
            <p>
              Om teleurstellingen te voorkomen raden wij u aan vooraf te
              reserveren.
              <br />
              Dit kan direct via de website of door te bellen of te mailen.
            </p>
            <p>
              <strong>T:</strong> +31 20 496 58 48
              <br /> <strong>E:</strong> info@jaimievanheije.nl
            </p>
            <p> </p>
          </div>
          <div className="col-md-6 text-left">
            <p>
              <strong>donderdag - zondag</strong> 12:00 – 22:00 uur
            </p>
            <br />
            <p>Vanaf 1 mei gaan we open met ons Picknick Club concept. Dit is een super relaxte setting waarbij wij ervoor zorgen dat je er altijd warm en droog bij zit. Dus ook als het regent kun je gewoon bij ons langskomen. We hebben een uitgebreide kaart vol lekkere gerechtjes die je door elkaar heen kan bestellen. Tot snel!</p>
            {/* <p>
              <strong>Lunch</strong> donderdag t/m maandag
              <br />
              12:00 - 14:00 uur
            </p>
            <p>
              <strong>Diner</strong> donderdag t/m maandag
              <br />
              18:00 - 22:00 uur
            </p>
            <p>op dinsdag en woensdag gesloten.</p> */}
          </div>

          <br />
          <div className="row">
            <a
              href="https://www.resengo.com/Flow/?CompanyId=1739713&ForceLC=NL"
              className="btn btn-danger btn-lg margin-title"
            >
              Reservation
            </a>
          </div>
        </div>
      </section>

      <section id="1068" className="content-section text-center">
        <div className="image-section">
          <div className="container">
            <ul className="list-inline">
              <li>
                <a href="https://www.denhamthejeanmaker.com/">
                  <img
                    src="/media/denham.png"
                    alt="Denham the Jeanmaker"
                    style={{ maxWidth: 320 }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.selwynsenatori.com/">
                  <img
                    src="/media/selwyn.png"
                    alt="Selwyn Senatori"
                    style={{ maxWidth: 320 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="1072" className="container content-section text-center">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            name="subject"
            value="Contact @ Jaimie van Heije"
          />

          <div className="row">
            <h2>Contact</h2>

            <div className="col-md-6 text-right">
              <p>
                <strong>Restaurant Jaimie van Heije</strong>
                <br /> Kerkstraat 56 <br /> 1191 JE Ouderkerk a/d Amstel
                <br />
                <br /> T: +31 20 496 58 48
                <br /> E: info@jaimievanheije.nl
              </p>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div>
              <button
                type="submit"
                id="contact-button"
                className="btn btn-danger btn-lg"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="col-md-6">
            <ul className="list-inline">
              <li>
                <a href="mailto:info@jaimievanheije.nl">
                  <i className="fa fa-envelope-square fa-2x"></i>
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/JaimieVanHeijeRestaurant">
                  <i className="fa fa-facebook-square fa-2x"></i>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/jaimievanheije/">
                  <i className="fa fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-right">
            <span className="light">
              <p className="small">Copyright © Jaimie van Heije</p>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          html
        }
      }
    }
  }
`
