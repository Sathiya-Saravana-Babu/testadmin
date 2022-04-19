import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Bookings',
    icon: 'smartphone-outline',
    // link: '/pages/bookings'
    children: [
      {
        title: 'Bus',
        link: '/pages/bookings/bus',
        //icon: {icon: 'fa-eye', pack: 'fa'}
      },
      {
        title: 'Flights',
        link: '/pages/bookings/flight',
      },
      {
        title: 'Trains',
        link: '/pages/bookings/train',
      },
      {
        title: 'All',
        link: '/pages/bookings/all',
      }
    ]
    },
    {
      title: 'Customers',
      icon: 'person-outline',
      link: '/pages/customers',
    },
    {
      title: 'Vehicles Management',
      icon: 'globe-2-outline',
     // link: '/pages/vehicles',
     children: [
       {
         title: 'Companies',
         link: '/pages/companies'
       }
     ]
    },
    {
      title: 'Website content',
      icon: 'globe-outline',
      children: [
        {
          title: 'Home',
          link: '/pages/website/home',
          //icon: {icon: 'fa-eye', pack: 'fa'}
        },
        {
          title: 'Trains',
          link: '/pages/website/trains',
        },
        {
          title: 'Buses',
          link: '/pages/website/buses',
        },
        {
          title: 'Flights',
          link: '/pages/website/flights',
        },
        {
          title: 'Parcels',
          link: '/pages/website/parcels',
        },
        {
          title: 'Your bookings',
          link: '/pages/website/your_bookings',
        },
        {
          title: 'Become a Partner',
          link: '/pages/website/become_a_partner',
        },
        {
          title: 'Who we are',
          link: '/pages/website/who_we_are',
        },
        {
          title: 'Terms of use',
          link: '/pages/website/terms',
        },
        {
          title: 'Privacy Policy',
          link: '/pages/website/privacy',
        },
        {
          title: 'Others',
          //link: '/pages/dashboard',
          children: [
            {
              title: 'Banners',
              link: '/pages/contents/banner'
            },{
              title: 'Sliders',
              link: '/pages/contents/slider'
            },{
              title: 'Contacts',
              link: '/pages/contents/contacts'
            },{
              title: 'Social Links',
              link: '/pages/contents/social_link'
            },{
              title: 'FAQs',
              link: '/pages/contents/faq_item'
            }
          ]
        }
      ]
  },
  {
    title: 'Shipping Companies',
    icon: 'person-outline',
    link: '/pages/shipping-users',
  },

  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },

  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },



];
