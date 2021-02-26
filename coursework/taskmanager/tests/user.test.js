const request = require('supertest');
const { response } = require('../src/app');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'Joe Bloggs',
  email: 'joe@bloggs.com',
  password: 'WhatT43Cr4p!',
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Dean',
      email: 'deanpugh@deanpugh.com',
      password: 'MyPass777!',
    })
    .expect(201);
});

test('Should login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test('Should no login in, non user', async () => {
  await request(app)
    .post('/users/login')
    .send({ email: userOne.email, password: 'failedPassed' })
    .expect(400);
});
