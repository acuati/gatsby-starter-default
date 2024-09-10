import React from "react"
import Layout from "../components/layout"
import Greeting from "../components/Greeting"
import StatusMessage from "../components/statusMessage/StatusMessage"
import UserCard from "../components/userCard/UserCard"
import TeamCard from "../components/teamcard/teamcard"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const IndexPage = ({data}) => {
  return(
    <>
    <Layout>

       {/* <div className='container-team-card'> */}



     {/* <TeamCard
      imageSrc="https://via.placeholder.com/150"
      title="Alberto Alcocer"
      role="Jefe de equipo"
      description="Me gusta caminar por los jardines de mañana"
     
     >
     



     </TeamCard>
     <TeamCard
      imageSrc="https://via.placeholder.com/150"
      title="Alberto Alcocer"
      role="Jefe de equipo"
      description="Me gusta caminar por los jardines de mañana"
     
     >
     



     </TeamCard>
     <TeamCard
      imageSrc="https://via.placeholder.com/150"
      title="Alberto Alcocer"
      role="Jefe de equipo"
      description="Me gusta caminar por los jardines de mañana"
     
     >
     



     </TeamCard>
     <TeamCard
      imageSrc="https://via.placeholder.com/150"
      title="Alberto Alcocer"
      role="Jefe de equipo"
      description="Me gusta caminar por los jardines de mañana"
     
     >
    
     



     </TeamCard>
     <TeamCard
      imageSrc="https://via.placeholder.com/150"
      title="Alberto Alcocer"
      role="Jefe de equipo"
      description="Me gusta caminar por los jardines de mañana"
     
     >
    
     



     </TeamCard> */}
     {/* </div> */}

      <ul>
        {
          data.allFile.nodes.map(node => {
            <li key={node.childImageSharp.id}>
              <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.name}/>
              {node.base}

            </li>
          })
}
      </ul>



    </Layout>
    </>

)
}

export const imagesTeam = graphql`
query {
 allFile {
    nodes {
      dir
      name
      base
      childImageSharp {
        id
        gatsbyImageData
      
      }
    }
  }

}


`



export default IndexPage

export const Head = () => <title> Home Page </title>
