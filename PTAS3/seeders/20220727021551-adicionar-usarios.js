'use strict';

const crypto = require('crypto');
const CHAVE = 'v52vu2v282bodceecjwbnwc52wcgr190'; // 32
const IV = "6195jebai981kinwc"; // 16
const ALGORITMO = "aes-256-cbc";
const METODO_CRIPTOGRAFIA = 'hex';
const METODO_DESCRIPTOGRAFIA = 'hex';

const encrypt = ((text) =>  {
   let cipher = crypto.createCipheriv(ALGORITMO, CHAVE, IV);
   let encrypted = cipher.update(text, 'utf8', METODO_CRIPTOGRAFIA);
   encrypted += cipher.final(METODO_CRIPTOGRAFIA);
   return encrypted;
});

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'Wellen', usuario: 'wellen', senha: encrypt('1902')},
      { nome: 'Picolo', usuario: 'luiz', senha: encrypt('123')},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};