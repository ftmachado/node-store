'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

// exports.get = (req, res, next) => {
//     repository
//         .get()
//         .then( data => {
//             res.status(200).send(data);
//         })
//         .catch( e => {
//             res.status(400).send(e);
//         });
// }
exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getBySlug = async(req, res, next) => {
    try{         
        var data = await repository.getBySlug(req.params.slug)
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await repository.getById(req.params.id)
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getByTag = async(req, res, next) => {
    try{         
        var data = await repository.getByTag(req.params.tag)
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    // var product = new Product();
    // product.title = req.body.title;
    let validator = new ValidationContract();
    validator.hasMinLen(req.body.title, 3, 'Deve conter 3 caracteres');
    validator.hasMinLen(req.body.slug, 3, 'Deve conter 3 caracteres');
    validator.hasMinLen(req.body.description , 3, 'Deve conter 3 caracteres');

    // Se os dados forem inválidos
    if (!validator.isValid()){
        res.status(400).send(validator.errors()).end();
        return;
    }
    try{
        await repository.create(req.body)
        res.status(201).send({ 
            message: 'Produto cadastrado com sucesso!'
        });
    } catch(e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar produto',
            data: e
        });
    }   
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body)
        res.status(200).send({
            "message": "Produto atualizado com sucesso!"
        });
    } catch(e) {
        res.status(400).send({
            "message": "Falha ao atualizar o produto",
            data: e
        });
    };
};

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id)
        res.status(200).send({
            "message": "Produto removido com sucesso!"
        });
    } catch(e) {
        res.status(400).send({
            "message": "Falha ao remover o produto",
            data: e
        });
    };
};