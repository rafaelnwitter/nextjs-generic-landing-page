// External packages used:
//   yarn add react-share react-twitter-embed react-fb-like
import React from 'react'
import { SocialShareAndFollow } from 'react-share-follow'

import {
  Block,
  Features,
  Footer,
  Header,
  Headline,
  Image,
  LinkOptional,
  PageHead,
  Pricing,
  SignupBlock,
  Video
} from 'components'

import { config } from 'config/config'

const LandingPage = () => (
  <main>
    <PageHead />

    <Header>
      <LinkOptional href='#pricing'>Produtos</LinkOptional>
      <LinkOptional href='#testimonials'>Testimonials</LinkOptional>
    </Header>

    <Headline
      title={config.appTagline}
      description={config.appDescription}
    >
      <SocialShareAndFollow
        title={config.appName}
        description={config.appDescription}
        iconColor='#555555'
        share={{
          copy: true,
          email: true,
          sms: false,
          facebook: true,
          twitter: true,
          reddit: false,
          pinterest: false,
          linkedin: true
        }}
        follow={{
          web: 'https://www.instagram.com/r_witt',
          instagram: 'r_witt',
          linkedin: 'rafaelnwitt'
        }}
        onShare={({ message }) => window.alert(message)}
      />
    </Headline>

    <CustomSignupBlock />


    <Image
      src='https://integrae.com.br/wp-content/uploads/2018/09/WhatsApp-Image-2018-09-21-at-10.44.10.jpeg'
      fullWidth={false}
    />

    <Features
      features={config.appFeatures}
      fullWidth={false}
    />

    <Pricing
      products={config.appProducts}
      id='pricing'
    />

    <Video
      src='https://www.youtube.com/embed/-8-ZyyQy3hU'
      controls={false}
      fullWidth={false}
    />

    <Features
      headline='What our customers are saying'
      features={config.appTestimonials}
      id='testimonials'
    />

    <CustomSignupBlock />

    <Footer>
      &copy; Company, Inc. | <a href='https://www.instagram.com/r_witt' target='_blank' rel='noopener noreferrer'>Made by @rafaelnwitter</a>
    </Footer>
  </main>
)

export default LandingPage

const CustomSignupBlock = () => (
  <SignupBlock
    thankyouText='Thank you for signing up!'
    className='darker'
    leadService={config.leadService}
  />
)
