// Libraries
import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'

// Components
import Layout from '../components/layout'


const Wrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  top: 100px;
  position: relative;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #6f6f6f;
`
const Img = styled.img`
  width: 100px;
  height: auto;
  padding-bottom: 30px;
`

const Home = () => (
  <Layout>
    <Wrapper>
      <Head>
        <title>Syabany Labs | Digital Solution</title>
        <link rel="icon" href="/images/syabany-logo.svg" />
        <meta
          name="description"           
          content="Ini saatnya bisnis Anda mengudara dengan web yang cepat.">
        </meta>
      </Head>
        <div>
          <Img src="/images/syabany-logo.svg" alt=""/>
          <h3>Nextjs Syabany Labs Starter Kit</h3>
        </div>
    </Wrapper>
  </Layout>
)

export default Home
