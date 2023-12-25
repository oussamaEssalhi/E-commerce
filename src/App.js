import './App.css'
import { Fragment } from 'react'
import { Navs, Landing, Statistic, About, Explore, Testimonials, Frequently, Subscribe, Footer } from "./Components/index";


const App = () => {
  return (
    <Fragment>
      <Navs />
      <Landing />
      <Statistic />
      <About />
      <Explore />
      <Testimonials />
      <Frequently />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default App