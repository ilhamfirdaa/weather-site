import React from 'react'
import { mount } from 'enzyme'
import Page from '../forecast'

it('shows "Weather site!"', () => {
  const page = mount(<Page />)

  expect(page.find('h3').text()).toEqual('Weather site!')
})

it('contain image', () => {
  const page = mount(<Page />)

  expect(page.contains(<img alt="" />)).toBeDefined()
})
