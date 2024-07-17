type ContactDetail = {
  id: string;
  name: string;
  href: string;
  value: string;
};

export const ContactDetails: ContactDetail[] = [
  {
    id: '1',
    name: 'Call Us',
    href: '/icons/phone-contact-details.svg',
    value: '+880 1763 27 2216',
  },
  {
    id: '2',
    name: 'Email',
    href: '/icons/email-contact-details.svg',
    value: 'bim.info@bim.com',
  },
  {
    id: '3',
    name: 'Location',
    href: '/icons/location-contact-details.svg',
    value: '120/A, Block C, Road-3, New York, London',
  },
];
