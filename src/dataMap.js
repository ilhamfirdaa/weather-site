import React from 'react'
import {
  Cloudy, Sunny, Rainy, Stormy, Snowy, Windy, Misty,
} from './components/widget'

export const weatherMap = new Map([
  [200, <Stormy />],
  [201, <Stormy />],
  [202, <Stormy />],
  [230, <Stormy />],
  [231, <Stormy />],
  [232, <Stormy />],
  [233, <Stormy />],
  [300, <Rainy />],
  [301, <Rainy />],
  [302, <Rainy />],
  [500, <Rainy />],
  [501, <Rainy />],
  [502, <Rainy />],
  [511, <Rainy />],
  [520, <Rainy />],
  [521, <Rainy />],
  [522, <Rainy />],
  [600, <Snowy />],
  [601, <Snowy />],
  [602, <Snowy />],
  [610, <Snowy />],
  [611, <Windy />],
  [612, <Windy />],
  [621, <Snowy />],
  [622, <Snowy />],
  [623, <Snowy />],
  [700, <Misty />],
  [711, <Misty />],
  [721, <Misty />],
  [731, <Misty />],
  [741, <Misty />],
  [751, <Misty />],
  [800, <Sunny />],
  [801, <Cloudy />],
  [802, <Cloudy />],
  [803, <Cloudy />],
  [804, <Cloudy />],
  [900, <Cloudy />],
  ['unknown', <Cloudy />],
])

export const others = new Map([
  [200, <Stormy />],
  [201, <Stormy />],
  [202, <Stormy />],
])
