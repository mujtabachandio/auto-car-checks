// schemas/userSubmission.ts

export default {
  name: 'userSubmission',
  title: 'User Submission',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'country', title: 'Country', type: 'string' },
    { name: 'userPhone', title: 'User Phone', type: 'string' },
    { name: 'vinNumber', title: 'VIN Number', type: 'string' },
    { name: 'createdAt', title: 'Created At', type: 'datetime' },
  ],
};
