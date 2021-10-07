const supertest  =require('supertest')
const app  =require('../src/app')
const api  = supertest(app)

describe('Server inicial', ()=>{
    it('Returns payment url', ()=>{
        return api
        .post('/new_payment')
        .send(
            {"quantity":"1","description":"Some book","price":"10"}
        )
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(String)
                    })
                
            )
        })
    }),
    it('Responds with especific error if payload is not ok', ()=>{
        return api
        .post('/new_payment')
        .send(
            {"quantity":"1","description":"Some book"}
        )
        .expect('Content-Type', /json/)
        .expect(400)
        .then((response)=>{
            expect(response.body).toMatchObject({"error":"Invalid or missing params"}) 
            
        })
    })
    it('Notification webhook is listinening', ()=>{
        return api
        .post('/payment_notification')
        .send(
            {"notification":"something"}
        )
        .expect(200)
        .then((response)=>{
            expect(response.body).toMatchObject({}) 
            
        })
    })
})