import { get } from "./index";

type Email = {
  id: string;
  sender_email: string;
  sender_name: string;
  subject: string;
  readed: boolean;
  time: string;
};

type EmailList = Array<Email & { snippet: string }>;

const Emails = {
  paged: (page: number) =>
    get(`/email/?page=${page}`) as Promise<{
      content: EmailList;
      rowCount: number;
    }>,
};

export default Emails;
