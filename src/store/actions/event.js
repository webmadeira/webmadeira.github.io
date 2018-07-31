import {
  FETCH_EVENTS,
  FETCH_EVENT_DETAILS,
} from './types'

const getEvents = () => ({
  type: FETCH_EVENTS,
  payload: Promise.resolve({
    events: [
      {
        id: 0,
        title: '{ "web development talks in Madeira" }',
        date: new Date('2018-12-29'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper aliquam massa vel aliquam. Duis eleifend fermentum tortor eu pulvinar. Duis maximus mauris nec metus blandit aliquet. Nulla consequat massa a vehicula rutrum. Maecenas et eleifend purus. Aenean maximus ac sem sed mollis. Donec varius lobortis risus, eget bibendum dui vestibulum vel. Ut ullamcorper faucibus porttitor. Curabitur id imperdiet dolor. Proin finibus euismod neque vel dapibus. Maecenas congue urna non dictum gravida. Nam ultrices vestibulum urna, quis aliquam nisl iaculis nec. Pellentesque rutrum, erat vel malesuada facilisis, erat velit semper nisi, ac porttitor enim dolor at diam. Duis non erat ac turpis vehicula euismod. Sed dignissim eros ut est vestibulum iaculis.',
        talks: [
          { id: 0, description: '' },
          { id: 1, description: '' },
          { id: 2, description: '' },
          { id: 3, description: '' },
          { id: 4, description: '' },
          { id: 5, description: '' },
          { id: 6, description: '' },
          { id: 7, description: '' },
          { id: 8, description: '' },
          { id: 9, description: '' },
        ],
      },
    ],
  }),
})

const getEventDetails = id => ({
  type: FETCH_EVENT_DETAILS,
  payload: Promise.resolve({
    id,
    title: '{ "web development talks in Madeira" }',
    date: new Date('2018-12-29'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper aliquam massa vel aliquam. Duis eleifend fermentum tortor eu pulvinar. Duis maximus mauris nec metus blandit aliquet. Nulla consequat massa a vehicula rutrum. Maecenas et eleifend purus. Aenean maximus ac sem sed mollis. Donec varius lobortis risus, eget bibendum dui vestibulum vel. Ut ullamcorper faucibus porttitor. Curabitur id imperdiet dolor. Proin finibus euismod neque vel dapibus. Maecenas congue urna non dictum gravida. Nam ultrices vestibulum urna, quis aliquam nisl iaculis nec. Pellentesque rutrum, erat vel malesuada facilisis, erat velit semper nisi, ac porttitor enim dolor at diam. Duis non erat ac turpis vehicula euismod. Sed dignissim eros ut est vestibulum iaculis.',
    talks: [
      { id: 0, description: '' },
      { id: 1, description: '' },
      { id: 2, description: '' },
      { id: 3, description: '' },
      { id: 4, description: '' },
      { id: 5, description: '' },
      { id: 6, description: '' },
      { id: 7, description: '' },
      { id: 8, description: '' },
      { id: 9, description: '' },
    ],
  }),
})

export {
  getEvents,
  getEventDetails,
}
