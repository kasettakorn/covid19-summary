import React from 'react'
import { Layout } from 'antd'
import './style/App.css'
import CovidCard from './components/Cards'
const { Header, Content, Footer } = Layout

export default function App() {
  return (
    <div>
      <Layout>
        <Header 
          style={{ height: "80vh", 
          paddingBottom: '10px',
          backgroundColor: "#485461",
          backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}
          
        >
          <h1> 🦠 Thailand Coronavirus (COVID-19) 🦠</h1>
          <h3> Realtime Data from WHO</h3>
          <CovidCard/>
        </Header>

        <Footer>
          <center>
            <div>
              Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26 </a> 
              from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div> 
            <div>
             Develop by Ronnakorn Hompoa ©2020
              </div>           
          </center>

        </Footer>
      </Layout>
    </div>
  )
}
