global.SALT_KEY = '';
global.EMAIL_TMPL = '<strong>{0}</strong>';

module.exports = {
    connectionString: 'mongodb://ftmachado:prof2016@ds249942.mlab.com:49942/nodestore',
    sendgridKey: 'TDB', //enviar email
    containerConnectionString: 'TDB' //armazenar imagens do produto
}