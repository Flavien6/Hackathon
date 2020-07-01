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
var Emploi_historique;
// Testing The Emploi_historique Model
describe('Emploi_historique Model',function(){

    var id;
    var id2;

    before(function(){  /* jslint ignore:line */
        Emploi_historique = require('../../models/Emploi_historiques');
        var workers = require('../../services/queue/workers');
        var workers1 = require('../../services/queue/workers');
        var workers2 = require('../../services/queue/workers');
        var workers3 = require('../../services/queue/workers');
    });

    describe('Emploi_historique CRUDS', function(){
        it('should save data', function(done){
            var myemploi historique = Emploi_historique.create({name: 'femi'});

            myemploi historique.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read data', function(done){
            var myemploi historique = Emploi_historique.findOne({where: {name: 'femi'}});

            myemploi historique.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read all data', function(done){
            var myemploi historique = Emploi_historique.findAll();

            myemploi historique.then(function(res){
                res.should.be.an.array; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should update data', function(done){
            var cb = sinon.spy();
            var myemploi historique = Emploi_historique.update({name: 'Olaoluwa'}, { where: {name: 'femi'}});

            myemploi historique.then(function(res){
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
            var myemploi historique = Emploi_historique.search('femi');

            myemploi historique.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should delete data', function(done){
            var cb2 = sinon.spy();
            var ouremploi historique = Emploi_historique.bulkCreate([{name:'Olaolu'},{name: 'fola'},{name: 'bolu'}]);

            ouremploi historique.then(function(res){
                return Emploi_historique.destroy({where: {name: 'bolu'}});
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
            var myemploi historique = Emploi_historique.create({name: 'this is for the gods'});

            myemploi historique.then(function(res){
                id = res._id;
                res.should.have.property('createdAt');
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should add updatedAt', function(done){
            var myemploi historique = Emploi_historique.create({name: 'i am a demigod!'});
            myemploi historique.then(function(res){
                id2 = res._id;
                return Emploi_historique.update({name: 'This is the titan'}, {where: {_id: id}});
            })
            .then(function(res){
                return Emploi_historique.findOne({where: {name: 'This is the titan'}});
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
            var myemploi historique = await Emploi_historique.create({name: 'femi',someOtherStringData: 'stuff'});
            
            return q.Promise(function(resolve, reject) {
            setTimeout(function(){
                Emploi_historique.findOne({where: {_id: myemploi historique._id}})
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
            var myemploi historique = Emploi_historique.count({where: {name: 'This is the titan'}});

            myemploi historique.then(function(res){
                res.should.be.a.number; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should find a record by id and delete', function(done){
            var myemploi historique = Emploi_historique.findOne({where: {_id: id2}});

            var emploi historiqueer = myemploi historique.then(function(res){
                return res.destroy();
            })
            .then(function(res){
                res.should.be.an('object');
                done();
            });
            
        });

        it('should have transaction object', function(done){
            var myemploi historique = Emploi_historique.transaction.should.exist;  /* jslint ignore:line */
            done();
        });

    });
});
