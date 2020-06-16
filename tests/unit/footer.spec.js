import { mount } from '@vue/test-utils';
import AppFooter from  '@/components/AppFooter.vue';

describe('Main Footer', () => {
  const wrapper = mount(AppFooter);
  it('Render correct footer markup', () => {
    console.log(wrapper)
    expect(wrapper.html()).toContain('<v-row class="footer">')
  })
  it('Has clickable links', () => {
    expect(wrapper.contains('router-link')).toBe(true)
  })
})
