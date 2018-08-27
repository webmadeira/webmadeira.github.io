import {
  FETCH_EVENTS,
  FETCH_EVENT_DETAILS,
  FETCH_PAST_EVENTS,
} from './types'

const event2018 = {
  id: 0,
  title: '{ "web development talks in Madeira" }',
  logo: 'https://i.imgur.com/sDqnWmE.png',
  date: new Date('2018-12-29'),
  description: 'WebMadeira is a non-profit event built by-the-community and for-the-community and you can be part of it. It has born in 2016 and it is back this year with several talks about web development at December 29, 2018. The event should last about 5 to 6 hours holding two kind of talks: "Standard talks" with 20min+5min for Q&A and some very brief ones mentioned as "Lighting talks", taking only 5min and no Q&A. Wanna get on stage? Hit "Become a speaker" button! Wanna help us to maitain this event as non-profit? Hit the "Become a sponsor" button!',
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
}

const getEvents = () => ({
  type: FETCH_EVENTS,
  payload: Promise.resolve({
    events: [
      event2018,
    ],
  }),
})

const getEventDetails = id => ({
  type: FETCH_EVENT_DETAILS,
  payload: Promise.resolve({
    id,
    ...event2018,
  }),
})

const getPastEvents = () => ({
  type: FETCH_PAST_EVENTS,
  payload: Promise.resolve({
    pastEvents: [
      {
        id: 0,
        name: 'WebMadeira 2016',
        path: 'http://webmadeira.herokuapp.com/',
      },
    ],
  }),
})

export {
  getEvents,
  getEventDetails,
  getPastEvents,
}
