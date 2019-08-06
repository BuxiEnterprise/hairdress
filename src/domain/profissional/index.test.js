const profissional = require('.');

describe('createProfessiona', () => {
  test('should add professional', async () => {
    const profissionalMock = {
      nome: 'Vitinho',
      email: 'fdsfdsfsdf8787sd@hotmail.com',
      cpf: '4234234256563'
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
})