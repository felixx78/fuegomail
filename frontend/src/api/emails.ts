import { get } from "./index";

type Email = {
  id: string;
  sender_email: string;
  sender_name: string;
  subject: string;
  readed: boolean;
  time: string;
};

export type EmailList = Array<Email & { snippet: string }>;
type EmailFull = Email & { html: string; text: string };

const Emails = {
  paged: (page: number) =>
    get(`/email/?page=${page}`) as Promise<{
      content: EmailList;
      rowCount: number;
    }>,
  byId: (id: string) => get(`/email/${id}`) as Promise<EmailFull>,
  mark: (id: string) => get(`/email/mark/${id}`),
};

export default Emails;
