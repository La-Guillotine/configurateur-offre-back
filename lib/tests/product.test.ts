import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';

describe('products', () => {
    describe('#getAll', () => {
        it('should return all products',(done) => {
            chai
            .request(API)
            .get('/products')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[1].name).to.equals('fauteuil');
                expect(Number(res.body[1].price)).to.equals(57.00);
                expect(res.body[1].options).to.be.an('array');
                expect(res.body[1].options).length(3);
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one product', (done) => {
            chai
            .request(API)
            .get('/products/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('chaise');
                expect(res.body.options).to.be.an('array');
                expect(res.body.options).length(1);
                done();
            });
        });
    });
});