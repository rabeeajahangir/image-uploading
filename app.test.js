import supertest from 'supertest'
import { describe } from 'yargs'
import app from './app.js'


describe("POST /images", () => {
    describe('when image is uploaded', () => {
  
        test("should respod with a 200 status code", async () => {
             const response = await request(app).post("/single")
             
     expect(response.statusCode).toBe(200)
             })
         })
    
})



