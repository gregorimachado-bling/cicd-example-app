import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('deve incrementar o contador quando o botão é clicado', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Test Message'
      }
    })

    const button = wrapper.find('button')
    expect(button.text()).toBe('count is 0')

    await button.trigger('click')

    expect(button.text()).toBe('count is 1')

    await button.trigger('click')
    expect(button.text()).toBe('count is 2')
  })
})
