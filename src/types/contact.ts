export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
