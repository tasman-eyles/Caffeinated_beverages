const request = require('supertest')
const jwt = require('jsonwebtoken')

const server = require('../server')
const db = require('../db/volunteers')
const log = require('../logger')
const getToken = require('./mock-token')

jest.mock('../logger')
jest.mock('../db/volunteers')

const REQUEST_HEADER = {
  Authorization: `Bearer ${getToken(1, 'testuser', 'testuser@test.co', false)}`
}

describe('POST /api/v1/volunteer', () => {

  it('addVolunteer response with 401 when no token passed', () => {
    return request(server)
      .post('/api/v1/volunteer')
      .send({ userId: 1, eventId: 1 })
      .expect(401)
  })

  it('addVolunteer returns correct response', () => {

    db.addVolunteer.mockImplementation(() => Promise.resolve(201))
    return request(server)
      .post('/api/v1/volunteer')
      .set(REQUEST_HEADER)
      .send({ userId: 1, eventId: 1 })
      .then(res => {
        expect(res.status).toBe(201)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.addVolunteer.mockImplementation(() => Promise.reject(
      new Error('mock addVolunteer error')
    ))
    return request(server)
      .post('/api/v1/volunteer')
      .set(REQUEST_HEADER)
      .send({ userId: 1, eventId: 1 })
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        expect(log).toHaveBeenCalledWith('mock addVolunteer error')
        expect(res.body.error.title).toBe('Unable to register volunteer status')
        return null
      })
  })
})

describe('deleteVolunteer adds Volunteer', () => {

  it('deleteVolunteer response with 401 when no token passed', () => {
    return request(server)
      .delete('/api/v1/volunteer')
      .send({ userId: 1, eventId: 1 })
      .expect(401)
  })

  it('deleteVolunteer returns correct response', () => {
    db.deleteVolunteer.mockImplementation(() => Promise.resolve(200))
    return request(server)
      .delete('/api/v1/volunteer')
      .set(REQUEST_HEADER)
      .send({ userId: 1, eventId: 1 })
      .then(res => {
        expect(res.status).toBe(200)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.deleteVolunteer.mockImplementation(() => Promise.reject(
      new Error('mock deleteVolunteer error')
    ))
    return request(server)
      .delete('/api/v1/volunteer')
      .set(REQUEST_HEADER)
      .send({ userId: 1, eventId: 1 })
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        expect(log).toHaveBeenCalledWith('mock deleteVolunteer error')
        expect(res.body.error.title).toBe('Unable to remove volunteer status')
        return null
      })
  })
})
