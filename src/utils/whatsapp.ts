/**
 * Utility for WhatsApp direct integration with Bynarixa Tech Solutions
 * Phone: +92 306 9299193 (0306-9299193)
 */

export const WHATSAPP_NUMBER = '923069299193';
export const DISPLAY_PHONE = '+92 306 9299193';
export const LOCAL_PHONE = '0306-9299193';
export const COMPANY_EMAIL = 'info@bynarixa.com';
export const COMPANY_NAME = 'Bynarixa Tech Solutions';

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello Bynarixa Tech Solutions! I would like to discuss a software project.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
