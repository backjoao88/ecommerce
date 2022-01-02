import nodemailer from 'nodemailer';
import HandlebarsMailTemplateProvider from '../MailTemplateProvider/HandlebarsMailTemplateProvider';

interface ITemplateDataVariables{
  [key: string]: string | number;
}

interface ITemplateData{
  file: string;
  variables: ITemplateDataVariables;
}

export default class EtherealMailProvider {
  public async sendMail(to: string, subject: string, templateData: ITemplateData): Promise<void> {
    nodemailer.createTestAccount((err, account:any) => {
      new Promise((resolve) => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });
        console.log(account);
        resolve(transporter);
      }).then(async (transporter: any) => {
        const mailTemplateProvider = new HandlebarsMailTemplateProvider();
        transporter.sendMail({
          from: 'Equipe Burg Circuitos <equipe@burgcircuitos.com>',
          to,
          subject,
          html: await mailTemplateProvider.parse(templateData),
        }, (erro: any, info: any) => {
          console.log(info.messageId);
          console.log(nodemailer.getTestMessageUrl(info));
        });
      });
    });
  }
}
