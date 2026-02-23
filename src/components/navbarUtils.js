/**
 * navbarUtils.js - Utilidades para la barra de navegación
 */

export const navLinkClass = "nav-link";

/**
 * Obtiene las clases CSS para un enlace de navegación
 * @param {boolean} isActive - Si el enlace está activo
 * @returns {string} - Las clases CSS a aplicar
 */
export const getNavLinkClass = (isActive = false) => {
  const baseClass = navLinkClass;
  return isActive ? `${baseClass} active` : baseClass;
};

/**
 * Cierra el menú hamburguesa
 * @param {function} setMenuOpen - Función para establecer el estado del menú
 */
export const closeMenu = (setMenuOpen) => {
  setMenuOpen(false);
};

/**
 * Alterna el estado del menú hamburguesa
 * @param {boolean} currentState - Estado actual del menú
 * @returns {boolean} - Nuevo estado del menú
 */
export const toggleMenu = (currentState) => {
  return !currentState;
};

/**
 * Maneja el clic en un enlace de navegación
 * @param {function} setMenuOpen - Función para establecer el estado del menú
 * @param {function} navigate - Función de navegación (si es necesario)
 */
export const handleNavLinkClick = (setMenuOpen, navigate = null) => {
  closeMenu(setMenuOpen);
  if (navigate) {
    navigate();
  }
};
