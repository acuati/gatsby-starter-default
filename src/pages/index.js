import React from "react"
import Layout from "../components/layout"
import Greeting from "../components/Greeting"
import StatusMessage from "../components/statusMessage/StatusMessage"
import UserCard from "../components/userCard/UserCard"
import TeamCard from "../components/teamcard/teamcard"
const IndexPage = () => {
  return(
    <>
    <Layout>
      <div className='container-team-card'>
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
    
     



     </TeamCard>
     <TeamCard
      imageSrc="https://via.placeholder.com/150"
      title="Alberto Alcocer"
      role="Jefe de equipo"
      description="Me gusta caminar por los jardines de mañana"
     
     >
    
     



     </TeamCard>
     </div>


    </Layout>
    </>

)
}




export default IndexPage

export const Head = () => <title> Home Page </title>
