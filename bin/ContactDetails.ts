import phoneContactDetails from '../public/icons/phone-contact-details.svg';
import emailContactDetails from '../public/icons/email-contact-details.svg';
import locationContactDetails from '../public/icons/location-contact-details.svg';

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
    href: phoneContactDetails.src,
    value: '+880 1763 27 2216',
  },
  {
    id: '2',
    name: 'Email',
    href: emailContactDetails.src,
    value: 'bim.info@bim.com',
  },
  {
    id: '3',
    name: 'Location',
    href: locationContactDetails.src,
    value: '120/A, Block C, Road-3, New York, London',
  },
];
