import { Link } from "gatsby"
import React from "react"
import Title from "../global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"> </Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Nonumy sea duo diam ipsum sadipscing et amet labore sanctus ea.
              Ipsum diam et takimata sed magna. Dolores consetetur labore elitr
              elitr ut sed sea dolor dolor, ut lorem ut dolores dolore erat no.
              Takimata amet ipsum dolor sanctus, vero ipsum gubergren et ipsum
              eirmod dolore, stet erat est erat rebum et, dolor magna labore
              nonumy sea clita accusam. Aliquyam nonumy diam dolore est clita.
              Consetetur eirmod lorem diam justo sadipscing dolore nonumy
              sanctus labore,.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
