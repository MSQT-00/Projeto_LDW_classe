/**
 * @fileoverview Authentication module for handling login and session management
 * @module modules/auth
 */

/**
 * Handles user login
 * @param {string} login - User login or email (identificador)
 * @param {string} senha - User password
 * @returns {Promise<void>}
 */
export async function handleLogin(login, senha) {
  try {
    const response = await fetch('https://stunning-space-spoon-j6j5r6p4vx4cqxjr-5000.app.github.dev/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: login,
        senha: senha
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.mensagem || 'Login ou senha inválidos');
    }

    const data = await response.json();

    // Armazena o token no sessionStorage
    sessionStorage.setItem('token', data.token);

    // Opcional: você pode decodificar o token para pegar dados do usuário,
    // ou fazer uma chamada à API para buscar o perfil do usuário
    // Aqui só salvamos o token mesmo

  } catch (error) {
    throw new Error(error.message || 'Erro ao fazer login');
  }
}

/**
 * Handles user logout
 */
export function handleLogout() {
  sessionStorage.clear();
  window.location.href = '/html/tela_login.html';
}

/**
 * Checks if user is authenticated
 * @returns {boolean}
 */
export function isAuthenticated() {
  return !!sessionStorage.getItem('token');
}

/**
 * Gets current user data (optionally you can decode JWT here if needed)
 * @returns {Object|null}
 */
export function getCurrentUser() {
  const token = sessionStorage.getItem('token');
  if (!token) return null;

  // Se quiser decodificar JWT simples sem biblioteca:
  try {
    const payloadBase64 = token.split('.')[1];
    const payloadJson = atob(payloadBase64);
    return JSON.parse(payloadJson);
  } catch {
    return null;
  }
}

/**
 * Handles forgot password
 */
export function handleForgotPassword() {
  alert('Funcionalidade em desenvolvimento');
}
