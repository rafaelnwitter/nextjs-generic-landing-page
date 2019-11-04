import React from 'react'

import Block from './Block'

export default (props) => (
  <Block className='columns' padding='0 0 1em' {...props}>
    {props.features.map(feature => (
      <Block key={feature.name} className='rows'>
        <h3>{feature.name}</h3>
        <img src={feature.image} alt={feature.name} title={feature.name} />
        <p className='description'>
          {feature.description}
        </p>
        <style jsx>{`
          img {
            max-width: 100%;
            object-fit: contain;
          }
        `}
        </style>
      </Block>
    ))}
  </Block>
)
