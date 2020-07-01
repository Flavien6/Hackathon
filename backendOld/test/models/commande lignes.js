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
var Commande_ligne;
// Testing The Commande_ligne Model
describe('Commande_ligne Model',function(){

    var id;
    var id2;

    before(function(){  /* jslint ignore:line */
        Commande_ligne = require('../../models/Commande_lignes');
        var workers = require('../../services/queue/workers');
        var workers1 = require('../../services/queue/workers');
        var workers2 = require('../../services/queue/workers');
        var workers3 = require('../../services/queue/workers');
    });

    describe('Commande_ligne CRUDS', function(){
        it('should save data', function(done){
            var mycommande ligne = Commande_ligne.create({name: 'femi'});

            mycommande ligne.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read data', function(done){
            var mycommande ligne = Commande_ligne.findOne({where: {name: 'femi'}});

            mycommande ligne.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should read all data', function(done){
            var mycommande ligne = Commande_ligne.findAll();

            mycommande ligne.then(function(res){
                res.should.be.an.array; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should update data', function(done){
            var cb = sinon.spy();
            var mycommande ligne = Commande_ligne.update({name: 'Olaoluwa'}, { where: {name: 'femi'}});

            mycommande ligne.then(function(res){
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
            var mycommande ligne = Commande_ligne.search('femi');

            mycommande ligne.then(function(res){
                res.should.be.an.object; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should delete data', function(done){
            var cb2 = sinon.spy();
            var ourcommande ligne = Commande_ligne.bulkCreate([{name:'Olaolu'},{name: 'fola'},{name: 'bolu'}]);

            ourcommande ligne.then(function(res){
                return Commande_ligne.destroy({where: {name: 'bolu'}});
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
            var mycommande ligne = Commande_ligne.create({name: 'this is for the gods'});

            mycommande ligne.then(function(res){
                id = res._id;
                res.should.have.property('createdAt');
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should add updatedAt', function(done){
            var mycommande ligne = Commande_ligne.create({name: 'i am a demigod!'});
            mycommande ligne.then(function(res){
                id2 = res._id;
                return Commande_ligne.update({name: 'This is the titan'}, {where: {_id: id}});
            })
            .then(function(res){
                return Commande_ligne.findOne({where: {name: 'This is the titan'}});
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
            var mycommande ligne = await Commande_ligne.create({name: 'femi',someOtherStringData: 'stuff'});
            
            return q.Promise(function(resolve, reject) {
            setTimeout(function(){
                Commande_ligne.findOne({where: {_id: mycommande ligne._id}})
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
            var mycommande ligne = Commande_ligne.count({where: {name: 'This is the titan'}});

            mycommande ligne.then(function(res){
                res.should.be.a.number; /* jslint ignore:line */
                done();
            })
            .catch(function(err){
                done(err);
            });
        });

        it('should find a record by id and delete', function(done){
            var mycommande ligne = Commande_ligne.findOne({where: {_id: id2}});

            var commande ligneer = mycommande ligne.then(function(res){
                return res.destroy();
            })
            .then(function(res){
                res.should.be.an('object');
                done();
            });
            
        });

        it('should have transaction object', function(done){
            var mycommande ligne = Commande_ligne.transaction.should.exist;  /* jslint ignore:line */
            done();
        });

    });
});
