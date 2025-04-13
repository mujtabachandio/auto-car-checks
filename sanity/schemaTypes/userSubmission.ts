// schemas/userSubmission.js
export default {
  name: 'userSubmission',
  type: 'document',
  title: 'User Submission',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      options: {
        list: [
          { title: 'USA', value: 'usa' },
          { title: 'Canada', value: 'canada' },
          { title: 'Australia', value: 'australia' },
          // Add other countries as needed
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'vinNumber', // Changed from 'vin number' to 'vinNumber' for consistency
      type: 'string',
      title: 'VIN Number', // Changed to 'string' for VIN compatibility (e.g., alphanumeric VIN)
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
    },
  ],
};
