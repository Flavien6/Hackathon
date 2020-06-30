'use strict';

var chai = require('chai');
chai.should();
var config = require('../../config');
var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
var mongooseMock = require('mongoose-mock');
// var expect = chai.expect;
var sinon = require('sinon');
var q = require('q');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var Emploi;
// Testing The Emploi Model
describe('Emploi Model',function(){

    var id;
    var id2;

    before(function(){  /* jslint ignore:line */
        Emploi = require('../../models/Emplois');
        var workers = require('../../services/queue/workers');
        var workers1 = require('../../services/queue/workers');
        var workers2 = require('../../services/queue/workers');
        var workers3 = require('../../services/queue/workers');
    });

    describe('Emploi CRUDS', function(){
        it('should save data', function(done){
            var myemploi = Emploi.create({name: 'femi'});

            myemploi.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read data', function(done){
            var myemploi = Emploi.findOne({where: {name: 'femi'}});

            myemploi.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read all data', function(done){
            var myemploi = Emploi.findAll();

            myemploi.then(function(res){
                res.should.be.an.array; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should update data', function(done){
            var cb = sinon.spy();
            var myemploi = Emploi.update({name: 'Olaoluwa'}, { where: {name: 'femi'}});

            myemploi.then(function(res){
                cb();
                cb.should.have.been.calledOnce; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should search data', function(done){
            // Search needs more work for more accuracy
            var myemploi = Emploi.search('femi');

            myemploi.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should delete data', function(done){
            var cb2 = sinon.spy();
            var ouremploi = Emploi.bulkCreate([{name:'Olaolu'},{name: 'fola'},{name: 'bolu'}]);

            ouremploi.then(function(res){
                return Emploi.destroy({where: {name: 'bolu'}});
            }).then(function(res){
                cb2();
                cb2.should.have.been.calledOnce; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should add createdAt', function(done){
            var myemploi = Emploi.create({name: 'this is for the gods'});

            myemploi.then(function(res){
                id = res._id;
                res.should.have.property('createdAt');
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should add updatedAt', function(done){
            var myemploi = Emploi.create({name: 'i am a demigod!'});
            myemploi.then(function(res){
                id2 = res._id;
                return Emploi.update({name: 'This is the titan'}, {where: {_id: id}});
            })
            .then(function(res){
                return Emploi.findOne({where: {name: 'This is the titan'}});
            })
            .then(function(res){
                res.should.have.property('updatedAt');
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should tag database entries properly', async function(){
            var myemploi = await Emploi.create({name: 'femi',someOtherStringData: 'stuff'});
            
            return q.Promise(function(resolve, reject) {
            setTimeout(function(){
                Emploi.findOne({where: {_id: myemploi._id}})
                .then(function(res){
                    if(typeof res.tags === 'string'){
                        var _tags = res.tags.split(', ');
                        _tags.length.should.equal(2);/* jslint ignore:line */
                    }else{
                        res.tags.length.should.equal(2);/* jslint ignore:line */
                    }
                    
                    resolve(res);
                })
                .catch(function(err){
                    reject(err);
                });
            },3000);
            });
            });

        it('should count returned records', function(done){
            var myemploi = Emploi.count({where: {name: 'This is the titan'}});

            myemploi.then(function(res){
                res.should.be.a.number; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should find a record by id and delete', function(done){
            var myemploi = Emploi.findOne({where: {_id: id2}});

            var emploier = myemploi.then(function(res){
                return res.destroy();
            })
            .then(function(res){
                res.should.be.an('object');
                done();
            });
            
        });

        it('should have transaction object', function(done){
            var myemploi = Emploi.transaction.should.exist;  /* jslint ignore:line */
            done();
        });

    });
});
