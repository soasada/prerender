import { mount } from '@vue/test-utils';
import HelloWorld2 from './HelloWorld2.vue';

describe('HelloWorld2', () => {
    it('should display header text', () => {
        const msg = 'Hello Vue 3'
        const wrapper = mount(HelloWorld2, { props: { msg } })

        expect(wrapper.find('h1').text()).toEqual(msg)
    })
})