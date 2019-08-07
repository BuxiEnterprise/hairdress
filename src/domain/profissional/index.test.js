const profissional = require('.');

describe('createProfessiona', () => {
  test('should add professional', async () => {
    const profissionalMock = {
      nome: 'vidwo',
      cpf: '4664w50065',
      email:'696900565s6969@otmail.com'
    }
  
    await expect(profissional.createProfessional(profissionalMock))
    .resolves.toMatchObject(profissionalMock);
      
  })
  // test('should not add professional if nome is missing', async () => {
  //   const profissionalMock = {
  //     email: 'fdsfddssf7373sdfsd@hotmail.com',
  //     cpf: '4234234545'
  //     }
  //     await expect(profissional.createProfessional(profissionalMock))
  //       .rejects.toThrowError()
  // });
  // test('should not add professional if email is missing', async () => {
  //   const profissionalMock = {
  //     nome:'Vitindsssho',
  //     cpf:'4234234545'
  //     }

  //     await expect(profissional.createProfessional(profissionalMock))
  //       .rejects.toThrowError()
  // });
  // test('should not add professional if cpf is missing', async () => {
  //   const professionalMock = {
  //     nome: 'Vitindsssho',
  //     email:'fdsfddssf7373sdfsd@hotmail.com'
  //     }

  //     await expect(profissional.createProfessional(professionalMock))
  //       .rejects.toThrowError() 
  // })
  
});