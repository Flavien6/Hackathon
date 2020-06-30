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
var Produit_info;
// Testing The Produit_info Model
describe('Produit_info Model',function(){

    var id;
    var id2;

    before(function(){  /* jslint ignore:line */
        Produit_info = require('../../models/Produit_infos');
        var workers = require('../../services/queue/workers');
        var workers1 = require('../../services/queue/workers');
        var workers2 = require('../../services/queue/workers');
        var workers3 = require('../../services/queue/workers');
    });

    describe('Produit_info CRUDS', function(){
        it('should save data', function(done){
            var myproduit info = Produit_info.create({name: 'femi'});

            myproduit info.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read data', function(done){
            var myproduit info = Produit_info.findOne({where: {name: 'femi'}});

            myproduit info.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read all data', function(done){
            var myproduit info = Produit_info.findAll();

            myproduit info.then(function(res){
                res.should.be.an.array; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should update data', function(done){
            var cb = sinon.spy();
            var myproduit info = Produit_info.update({name: 'Olaoluwa'}, { where: {name: 'femi'}});

            myproduit info.then(function(res){
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
            var myproduit info = Produit_info.search('femi');

            myproduit info.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should delete data', function(done){
            var cb2 = sinon.spy();
            var ourproduit info = Produit_info.bulkCreate([{name:'Olaolu'},{name: 'fola'},{name: 'bolu'}]);

            ourproduit info.then(function(res){
                return Produit_info.destroy({where: {name: 'bolu'}});
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
            var myproduit info = Produit_info.create({name: 'this is for the gods'});

            myproduit info.then(function(res){
                id = res._id;
                res.should.have.property('createdAt');
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should add updatedAt', function(done){
            var myproduit info = Produit_info.create({name: 'i am a demigod!'});
            myproduit info.then(function(res){
                id2 = res._id;
                return Produit_info.update({name: 'This is the titan'}, {where: {_id: id}});
            })
            .then(function(res){
                return Produit_info.findOne({where: {name: 'This is the titan'}});
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
            var myproduit info = await Produit_info.create({name: 'femi',someOtherStringData: 'stuff'});
            
            return q.Promise(function(resolve, reject) {
            setTimeout(function(){
                Produit_info.findOne({where: {_id: myproduit info._id}})
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
            var myproduit info = Produit_info.count({where: {name: 'This is the titan'}});

            myproduit info.then(function(res){
                res.should.be.a.number; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should find a record by id and delete', function(done){
            var myproduit info = Produit_info.findOne({where: {_id: id2}});

            var produit infoer = myproduit info.then(function(res){
                return res.destroy();
            })
            .then(function(res){
                res.should.be.an('object');
                done();
            });
            
        });

        it('should have transaction object', function(done){
            var myproduit info = Produit_info.transaction.should.exist;  /* jslint ignore:line */
            done();
        });

    });
});
