import supertest from 'supertest'
import {expect} from 'chai'

describe('Auth', function () {
    const request = supertest('https://paysis.herokuapp.com')

    it( 'Successful log in', function(){
        request
            .post('/auth')
            .send({login:  'adminius', password: 'super3cret' })
            .end(function(err, res){
                expect(res.statusCode).to.eq(200)
                expect(res.body.token).not.to.be.undefined
            })
    })
    it( 'Log in with invalidecredentials', function(){
        request
            .post('/auth')
            .send({login:  'invalid', password: 'invalid' })
            .end(function(err, res){
                expect(res.statusCode).to.eq(404)
                expect(res.body.token).to.eq( 'Wrong login or password.')
            })
    })
})