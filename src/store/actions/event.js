import {
  FETCH_EVENTS,
  FETCH_EVENT_DETAILS,
  FETCH_PAST_EVENTS,
} from './types'

let id = 0

/* eslint-disable no-plusplus */
const event2018 = {
  id,
  title: '{ "web development talks in Madeira" }',
  logo: 'https://i.imgur.com/sDqnWmE.png',
  date: new Date('2018-12-29'),
  description: 'WebMadeira is a non-profit event built by-the-community and for-the-community and you can be part of it. It was born in 2016 and it is back this year with several talks about web development in December 29, 2018. The event will last about 5 to 6 hours comprised of 20min talks +5min Q&A. Join us!',
  thankYouText: 'This event could not happen without the support of our sponsors and volunteers. Thank you all for your amazing help organizing this year\'s event and for being part of WebMadeira’s family. <br><br>Thank you <b><a href="https://www.linkedin.com/in/alice-costa-619872a5/" target="_blank" rel="noopener noreferrer">Alice Costa</a></b> and <b><a href="https://www.linkedin.com/in/sofia-sousa/" target="_blank" rel="noopener noreferrer">Sofia Sousa</a></b> for the merchandising, it looks great! <b>Alice</b> again for our website\'s design. <b><a href="https://www.linkedin.com/in/rodolfo-goncalves/" target="_blank" rel="noopener noreferrer">Rodolfo Gonçalves</a></b>, <b><a href="https://www.linkedin.com/in/crisgoncalves84/" target="_blank" rel="noopener noreferrer">Cristian Gonçalves</a></b>, <b><a href="https://www.linkedin.com/in/miguel-ribeiro-7bb32a110/" target="_blank" rel="noopener noreferrer">Miguel Ribeiro</a></b> and <b><a href="https://github.com/JoaoChacha" target="_blank" rel="noopener noreferrer">João Chacha</a></b> for the development of the event page. <br>Thank you <b><a href="https://www.linkedin.com/in/ana-sofia-nunes-05413558/" target="_blank" rel="noopener noreferrer">Sofia Nunes</a></b> for your "eagle eye" on the QA process! <b>All our speakers</b> for bringing awesome talks! <br>And finally,<b>C. de Lobos</b> for the support to make this event possible and free for everyone. <br><br><center>THANK YOU ALL!</center>',
  registrationLink: 'https://www.eventbrite.pt/e/bilhetes-web-madeira-2018-49671284148?aff=eac2',
  schedule: [
    {
      id: 0,
      title: 'Doors open',
      type: 'primary',
      time: new Date('2018/12/29 14:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 15,
    },
    {
      id: ++id,
      title: 'Opening session',
      time: new Date('2018/12/29 14:15:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 15,
    },
    {
      id: ++id,
      title: 'Service workers',
      description: 'Pushing the web forward',
      speakersIds: [0],
      type: 'talk',
      time: new Date('2018/12/29 14:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'Releasing without bugs',
      description: 'From feature definition to tests, what can we do to improve code quality and release software without bugs',
      speakersIds: [1],
      type: 'talk',
      time: new Date('2018/12/29 15:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'Delivering Happiness',
      description: 'Making your Team and Customers happier with Continuous Delivery automation',
      speakersIds: [2],
      type: 'talk',
      time: new Date('2018/12/29 15:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'Break',
      time: new Date('2018/12/29 16:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 30,
    },
    {
      id: ++id,
      title: 'Unsupervised learning',
      description: 'Why learn it yourself when you can have a machine do it for you?',
      speakersIds: [3],
      type: 'talk',
      time: new Date('2018/12/29 16:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'Pre-microservices',
      description: 'What you should know before moving to microservices',
      speakersIds: [4],
      type: 'talk',
      time: new Date('2018/12/29 17:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'Living on the edge',
      description: 'The future of the distributed web',
      type: 'talk',
      speakersIds: [5],
      time: new Date('2018/12/29 17:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'High performance web apps',
      description: 'You can’t optimize what you can’t measure',
      type: 'talk',
      speakersIds: [6],
      time: new Date('2018/12/29 18:00:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 20,
      qaLength: 5,
    },
    {
      id: ++id,
      title: 'Closing session',
      time: new Date('2018/12/29 18:30:00').toLocaleTimeString('us-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
      length: 10,
    },
    {
      id: ++id,
      title: 'Doors closed',
      type: 'primary',
      time: new Date('2018/12/29 19:00:00').toLocaleTimeString('us-US', {
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
