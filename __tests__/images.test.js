import request from 'supertest'

const testImage = require ('../images')

describe('Upload endpoint', () => {

  test('Successfully uploads jpg image', (done) => {
      const req = request(app)
          .post(`${ROOT_URL}${endpoints.add_image.route}`)
          .set('Authorization', `Bearer ${process.env.testUserJWT}`)
          .set('content-type', 'application/octet-stream')

      const imgStream = fs.createReadStream(testImage);
      imgStream.on('end', () => req.end(done));
      imgStream.pipe(req, {end: false})
  })
})

