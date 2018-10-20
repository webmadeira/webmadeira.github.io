import { FETCH_ORGANIZATION } from './types'

const getOrganizationDetails = () => ({
  type: FETCH_ORGANIZATION,
  payload: Promise.resolve({
    social: [
      { id: 0, name: 'github', url: 'https://github.com/webmadeira' },
      { id: 1, name: 'twitter', url: 'https://twitter.com/@web_madeira' },
      { id: 2, name: 'linkedin', url: 'https://www.linkedin.com/in/webmadeira-66484516b' },
    ],
  }),
})

export { getOrganizationDetails } // eslint-disable-line
