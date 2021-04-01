import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';

describe('options', () => {
    describe('#getAll', () => {
        it('should return all options',(done) => {
            chai
            .request(API)
            .get('/options')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[3].name).to.equals('porte gobelet');
                expect(Number(res.body[3].price)).to.equals(25.00);
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one option', (done) => {
            chai
            .request(API)
            .get('/options/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('siège en cuir');
                expect(Number(res.body.price)).to.equals(2.00);
                done();
            });
        });
    });
});