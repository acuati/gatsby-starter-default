import  React from "react"
import Layout from "../components/layout/layout"
import Greeting from "../components/Greeting"
import StatusMessage from "../components/statusMessage/statusmessage"
import UserCard from "../components/userCard/userCard"
import TeamCard from "../components/teamcard/teamcard"

import { graphql } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
const IndexPage = ({data}) => {
  return (
    <>
    <Layout>
     
    </Layout> 
    </>
  )
}


export default IndexPage
export const Head = () => <title>Home Page</title>
