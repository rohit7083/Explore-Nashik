import React from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import TAndT from '../tours-section/TAndT'
import TAndTHeader from '../tours-section/TAndTHeader'
import { Container } from '@mui/material'

function index() {
  return (
    <>

          <Header />
          <Container maxWidth="lg" sx={{ mb: 4 }}>
          <TAndTHeader/>
          <TAndT/>
          </Container>
          <Footer/>
    </>
  )
}

export default index