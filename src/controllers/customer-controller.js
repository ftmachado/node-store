'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async(req, res, next) => {
    let validator = new ValidationContract();
    validator.hasMinLen(req.body.name, 3, 'O nome deve conter 3 caracteres');
    validator.isEmail(req.body.email, 'Email inválido');
    validator.hasMinLen(req.body.password , 6, 'A senha deve conter 6 caracteres');
 
    if (!validator.isValid()){
        res.status(400).send(validator.errors()).end();
        return;
    }
    try{
        await repository.create(req.body)
        res.status(201).send({ 
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch(e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar seu cliente',
            data: e
        });
    }   
};

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
