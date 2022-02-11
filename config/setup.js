import 'dotenv/config'
import supertest from 'supertest'

    before( async function () {
        const request = await supertest(process.env.BASE_URL)
        await request
            .post('/auth')
            .send({login: 'invalid', password: 'invalid'})
            .then(res => {
                process.env['TOKEN'] = res.body.token
            })
})