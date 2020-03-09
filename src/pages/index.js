import React from "react"
import images from "../components/images"
import Layout from "../components/layout"
import Slider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <Slider slides={images} autoPlay={5} />
  </Layout>
)
export default IndexPage
