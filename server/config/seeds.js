const db = require('./connection');
const { User, Meet, Swimmer} = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Meet', 'meets');

  const meets = await Meet.insertMany([
    {
      date: '03/18/2025',
      location: 'Wayland',
      name: 'Wayland vs EGR',
      deadline: '03/17/2025',
      invitational: false
    },
    {
      date: '04/18/2025',
      location: 'Holland',
      name: 'Wayland vs Holland',
      deadline: '04/17/2025',
      invitational: false
    }
  ]);

  const swimmers = await Swimmer.insertMany([
    {
      firstName: 'Jonathan',
      lastName: 'Fein',
      birthdate: '05/05/2012'
    },
    {
      firstName: 'Ethan',
      lastName: 'Fein',
      birthdate: '05/05/2010'
    },
  ])

  await User.create({
    firstName: 'Anthony',
    lastName: 'Muscarella',
    email: 'muscarellaanthony1@gmail.com',
    password: 'pass123',
    swimmers: [swimmers[0], swimmers[1]]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
