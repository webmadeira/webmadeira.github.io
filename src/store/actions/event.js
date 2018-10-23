import {
  FETCH_EVENTS,
  FETCH_EVENT_DETAILS,
  FETCH_PAST_EVENTS,
} from './types'

const entry = {
  id: 0,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris dsfdsf d.',
}

/* eslint-disable no-plusplus */
const event2018 = {
  id: 0,
  title: '{ "web development talks in Madeira" }',
  logo: 'https://i.imgur.com/sDqnWmE.png',
  date: new Date('2018-12-29'),
  description: 'WebMadeira is a non-profit event built by-the-community and for-the-community and you can be part of it. It has born in 2016 and it is back this year with several talks about web development at December 29, 2018. The event must last about 5 to 6 hours holding talks with 20min, +5min for Q&A. Join us!',
  thankYouText: 'This event could not happen without the support of our sponsors and volunteers. Thank you all for your amazing help organizing this year\'s event and for being part of WebMadeira’s family. <br><br>Thank you <b>Alice Costa</b> and <b>Sofia Sousa</b> for the merchandising, it looks great! <b>Alice</b> again for our website\'s design. <b>Rodolfo Gonçalves</b>, <b>Cristian Gonçalves</b>, <b>Miguel Ribeiro</b> and <b>João Chacha</b> for the development of event page. <b>All our speakers</b> for bringing awesome talks! <br>And finally, <b>C. de Lobos</b> for the support to make this event possible and free for everyone. <br><center>THANK YOU ALL!</center>',
  schedule: [
    {
      id: 0,
      title: 'Doors open',
      type: 'primary',
      time: new Date('2018-08-10 14:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
    },
    {
      id: ++entry.id,
      title: 'Opening sesion',
      time: new Date('2018-08-10 14:15:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 15,
    },
    {
      id: ++entry.id,
      ...entry,
      title: 'Service workers',
      speakersIds: [0],
      type: 'talk',
      time: new Date('2018-08-10 14:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      ...entry,
      title: 'To define...',
      speakersIds: [1],
      type: 'talk',
      time: new Date('2018-08-10 15:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      ...entry,
      title: 'To define... (DevOps)',
      speakersIds: [2],
      type: 'talk',
      time: new Date('2018-08-10 15:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      title: 'Break',
      time: new Date('2018-08-10 16:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 30,
    },
    {
      id: ++entry.id,
      title: 'Unsupervised learning',
      description: 'Why learn it yourself when you can have a machine do it for you?',
      speakersIds: [3],
      type: 'talk',
      time: new Date('2018-08-10 16:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      ...entry,
      title: 'To define... (Micro services)',
      speakersIds: [4],
      type: 'talk',
      time: new Date('2018-08-10 17:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      ...entry,
      title: 'To define...',
      type: 'talk',
      speakersIds: [5],
      time: new Date('2018-08-10 17:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      ...entry,
      title: 'Critical Rendering Path',
      type: 'talk',
      speakersIds: [6],
      time: new Date('2018-08-10 18:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++entry.id,
      title: 'Closing sesion',
      time: new Date('2018-08-10 18:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 10,
    },
    {
      id: ++entry.id,
      title: 'Doors closed',
      type: 'primary',
      time: new Date('2018-08-10 19:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
    },
  ],
  sponsors: [
    {
      id: 0,
      name: 'C. M. Câmara de Lobos',
      logo: 'https://i.imgur.com/fgcD5fV.png',
      link: 'http://www.cm-camaradelobos.pt',
    },
  ],
  location: {
    name: 'Centro Cívico do Estreito',
    address: 'Rua Cónego Agostinho Figueira Faria Nº 6',
    postCode: '9325-024 Vila do Estreito de Câmara de Lobos',
    link: 'https://goo.gl/maps/SQMz7GK8Br42',
  },
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
        url: 'http://webmadeira.herokuapp.com/',
      },
    ],
  }),
})

export {
  getEvents,
  getEventDetails,
  getPastEvents,
}
