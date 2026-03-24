import { ScrollView, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Category from '../components/Category'
import MyCarousel from '../components/MyCarousel'
import Services from '../components/Services'
import Deals from '../components/Deals'
import Brand from '../components/Brand'

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SubHeader />
      <Category />
      <MyCarousel />
      <Services />
      <Deals />
      <Brand />
    </ScrollView>
  )
}

export default HomeScreen