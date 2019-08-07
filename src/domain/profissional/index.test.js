const profissional = require('.');

describe('createProfessiona', () => {
  test('should add professional', async () => {
    const profissionalMock = {
      nome: 'Vitinho',
      email:'fdsfdsf7373sdfsd@hotmail.com',
      cpf: '423423664645423'
    }
  
    await expect(profissional.createProfessional(profissionalMock))
      .resolves.toMatchObject(profissionalMock)
      
  })

  test('should not add professional if nome is missing', async () => {
    const profissionalMock = {
      email: 'fdsfdsfsdfsd@hotmail.com',
      cpf: '423423423'
    }
    await expect(profissional.createProfessional(profissionalMock))
      .rejects.toThrowError()
  });
  test('should not add professional if email is missing', async () => {
    const profissionalMock = {
      nome:'judas',
      cpf:'5455151515151'
      }

      await expect(profissional.createProfessional(profissionalMock))
        .rejects.toThrowError()
  });
  // test('find profissional', async () => {
  //     const professionalMock = {
  //     email: 'fdsfdsfsdfsd@hotmail.com'
  //     }

  //     await expect(profissional.findProfessional(professionalMock))
  //       .resolves.toMatchObject(professionalMock)
  // })
})