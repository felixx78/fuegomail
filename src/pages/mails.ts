const testEmails = [
  {
    id: "1",
    sender: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    recipient: {
      name: "Felix Gray",
      email: "felixx78@example.com",
    },
    subject: "Welcome to FuegoMail!",
    snippet:
      "Hi there! We're excited to have you on board with FuegoMail. Here's a quick overview...",
    timestamp: "2024-07-30T10:00:00Z",
    read: false,
    attachments: [
      {
        fileName: "welcome_guide.pdf",
        fileSize: "1.2MB",
      },
    ],
  },
  {
    id: "2",
    sender: {
      name: "Support Team",
      email: "support@example.com",
    },
    recipient: {
      name: "Vadym Petrenko",
      email: "vadympetrenko@example.com",
    },
    subject: "Your Account Update",
    snippet:
      "Hello, we've updated your account settings. Please review the changes...",
    timestamp: "2024-07-29T15:30:00Z",
    read: true,
    attachments: [],
  },
  {
    id: "3",
    sender: {
      name: "Newsletter Team",
      email: "newsletter@example.com",
    },
    recipient: {
      name: "Rajeev Brunhilde",
      email: "user123@example.com",
    },
    subject: "Monthly Newsletter",
    snippet: "Check out the latest updates and news from our team...",
    timestamp: "2024-07-28T08:45:00Z",
    read: false,
    attachments: [
      {
        fileName: "newsletter_july.pdf",
        fileSize: "750KB",
      },
    ],
  },
  {
    id: "4",
    sender: {
      name: "Event Coordinator",
      email: "info@example.com",
    },
    recipient: {
      name: "Rajeev Brunhilde",
      email: "user123@example.com",
    },
    subject: "Reminder: Upcoming Event",
    snippet:
      "Don't forget about the upcoming event on August 5th. We look forward to seeing you there...",
    timestamp: "2024-07-27T14:20:00Z",
    read: false,
    attachments: [],
  },
  {
    id: "5",
    sender: {
      name: "Special Offers Team",
      email: "offers@example.com",
    },
    recipient: {
      name: "Rajeev Brunhilde",
      email: "user123@example.com",
    },
    subject: "Exclusive Offers Just for You!",
    snippet:
      "Hi! We've got some special offers that you might be interested in. Check them out...",
    timestamp: "2024-07-26T12:00:00Z",
    read: true,
    attachments: [],
  },
];

export default testEmails;
