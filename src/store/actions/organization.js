import { FETCH_ORGANIZATION } from './types'

const getOrganizationDetails = () => ({
  type: FETCH_ORGANIZATION,
  payload: Promise.resolve({
    logo: 'http://webmadeira.herokuapp.com/img/logo.svg',
    social: [
      { id: 1, name: 'facebook', path: '/facebook' },
      { id: 2, name: 'instagram', path: '/instagram' },
      { id: 3, name: 'linkedin', path: '/linkedin' },
      { id: 4, name: 'twitter', path: '/twitter' },
      { id: 5, name: 'youtube', path: '/youtube' },
    ],
  }),
})

export { getOrganizationDetails } // eslint-disable-line
