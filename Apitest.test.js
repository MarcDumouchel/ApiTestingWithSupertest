const request = require('supertest')
const app = 'https://jsonplaceholder.typicode.com'
var assert = require('assert')

describe('/comments endpoint', () => {
    it('get comments responds with a 200 and some comments', (done) => {
        request(app)
            .get('/posts/1/comments')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                expect(response.body[0]).toStrictEqual(
                    {
                        "postId": 1,
                        "id": 1,
                        "name": "id labore ex et quam laborum",
                        "email": "Eliseo@gardner.biz",
                        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                    })
            })
            .end(err => {
                if (err) return done(err)
                done()
            })
    });
});

describe('users/1/posts endpoint', () => {
    it('get user 1 posts responds with a 200 and some posts', (done) => {
        request(app)
            .get('/users/1/posts')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                expect(response.body[0]).toStrictEqual(
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    })
            })
            .end(err => {
                if (err) return done(err)
                done()
            })
    });

    it('POST responds with a 201 on successful post', (done) => {
        request(app)
            .post('/posts')
            .send({
                title: "whatevs",
                body: "whatevsMan",
                userId: 1
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(err => {
                if (err) return done(err)
                done()
            })
    });
});

describe('/album/id/photos endpoint', () => {
    it('get photo for first album responds with a 200 and some photos', (done) => {
        request(app)
            .get('/album/1/photos')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                expect(response.body[0]).toStrictEqual(
                    {
                        "albumId": 1,
                        "id": 1,
                        "title": "accusamus beatae ad facilis cum similique qui sunt",
                        "url": "https://via.placeholder.com/600/92c952",
                        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                      })
            })
            .end(err => {
                if (err) return done(err)
                done()
            })
    });
});
describe('/users/id/albums endpoint', () => {
    it('get albums for first user responds with a 200 and some albums', (done) => {
        request(app)
            .get('/users/1/albums')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                expect(response.body[0]).toStrictEqual(
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "quidem molestiae enim"
                      })
            })
            .end(err => {
                if (err) return done(err)
                done()
            })
    });
});
describe('/users/id/todos endpoint', () => {
    it('get todos for first user responds with a 200 and some todos', (done) => {
        request(app)
            .get('/users/1/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                expect(response.body[0]).toStrictEqual(
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                      })
            })
            .end(err => {
                if (err) return done(err)
                done()
            })
    });
});
describe('/users/id/posts endpoint', () => {
    it('get posts for first user responds with a 200 and some posts', (done) => {
        request(app)
            .get('/users/1/posts')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                expect(response.body[0]).toStrictEqual(
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                      })
            })
            .end(err => {
                if (err) return done(err)
                done()
            })
    });
});