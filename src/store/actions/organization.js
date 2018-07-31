import { FETCH_ORGANIZATION } from './types'

const getOrganizationDetails = () => ({
  type: FETCH_ORGANIZATION,
  payload: Promise.resolve({
    logo: 'http://webmadeira.herokuapp.com/img/logo.svg',
    social: {
      medium: '',
      youtube: '',
    },
  }),
})

export { getOrganizationDetails } // eslint-disable-line
