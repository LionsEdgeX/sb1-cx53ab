import { EmailNotification } from '../types/user';

class EmailService {
  private static instance: EmailService;
  private mockMode: boolean = true;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  private async sendWithGmail(notification: EmailNotification): Promise<boolean> {
    // Real Gmail SMTP implementation would go here
    throw new Error('Gmail SMTP not configured');
  }

  private async sendMock(notification: EmailNotification): Promise<boolean> {
    console.log('Mock email sent:', {
      to: notification.to,
      subject: notification.subject,
      template: notification.template,
      data: notification.data
    });
    return true;
  }

  async sendNotification(notification: EmailNotification): Promise<boolean> {
    try {
      if (this.mockMode) {
        return await this.sendMock(notification);
      }
      return await this.sendWithGmail(notification);
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }
}

export const emailService = EmailService.getInstance();