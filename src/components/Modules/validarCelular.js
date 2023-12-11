class validar {
    static validarNumeroCelular(numero) {
      // Verifica se a entrada é uma string
      if (typeof numero !== 'string') {
        return false;
      }
  
      // Padroniza o número removendo caracteres não numéricos
      const numeroPadronizado = numero.replace(/[\s._-]+/g, '');
  
      // Verifica se o número tem a quantidade correta de dígitos (considerando apenas o número do celular)
      if (numeroPadronizado.length !== 9 && numeroPadronizado.length !== 8) {
        return false;
      }
  
      // Verifica se todos os dígitos são iguais, o que tornaria o número inválido
      if (/^(\d)\1+$/.test(numeroPadronizado)) {
        return false;
      }
  
      // Se passou pelas verificações, considera o número válido
      return true;
    }
  }
  
  export default validar