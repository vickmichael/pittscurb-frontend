const initialState = {
  destination: [], // could store multiple destinations if we want to track history
  time: null,
  phone_number: null
};

const testState = {
  destination: {
    address_components: [
      {
        long_name: '4606',
        short_name: '4606',
        types: [
          'street_number',
        ],
      },
      {
        long_name: 'Penn Avenue',
        short_name: 'Penn Ave',
        types: [
          'route',
        ],
      },
      {
        long_name: 'Bloomfield',
        short_name: 'Bloomfield',
        types: [
          'neighborhood',
          'political',
        ],
      },
      {
        long_name: 'Pittsburgh',
        short_name: 'Pittsburgh',
        types: [
          'locality',
          'political',
        ],
      },
      {
        long_name: 'Allegheny County',
        short_name: 'Allegheny County',
        types: [
          'administrative_area_level_2',
          'political',
        ],
      },
      {
        long_name: 'Pennsylvania',
        short_name: 'PA',
        types: [
          'administrative_area_level_1',
          'political',
        ],
      },
      {
        long_name: 'United States',
        short_name: 'US',
        types: [
          'country',
          'political',
        ],
      },
      {
        long_name: '15224',
        short_name: '15224',
        types: [
          'postal_code',
        ],
      },
      {
        long_name: '1315',
        short_name: '1315',
        types: [
          'postal_code_suffix',
        ],
      },
    ],
    adr_address: '<span class="street-address">4606 Penn Ave</span>, <span class="locality">Pittsburgh</span>, <span class="region">PA</span> <span class="postal-code">15224-1315</span>, <span class="country-name">USA</span>',
    business_status: 'OPERATIONAL',
    formatted_address: '4606 Penn Ave, Pittsburgh, PA 15224, USA',
    geometry: {
      location: {
        lat: 40.46575,
        lng: -79.94929719999999,
      },
      viewport: {
        south: 40.4644565697085,
        west: -79.95063318029149,
        north: 40.4671545302915,
        east: -79.94793521970848,
      },
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'd36e77830be4a0b02ec1720f4c05c1f92f8620a5',
    name: 'APTEKA',
    opening_hours: {
      open_now: false,
      periods: [
        {
          close: {
            day: 1,
            time: '0000',
            hours: 0,
            minutes: 0,
            nextDate: 1589774400000,
          },
          open: {
            day: 0,
            time: '1700',
            hours: 17,
            minutes: 0,
            nextDate: 1589749200000,
          },
        },
        {
          close: {
            day: 3,
            time: '2200',
            hours: 22,
            minutes: 0,
            nextDate: 1590026400000,
          },
          open: {
            day: 3,
            time: '1700',
            hours: 17,
            minutes: 0,
            nextDate: 1590008400000,
          },
        },
        {
          close: {
            day: 4,
            time: '2200',
            hours: 22,
            minutes: 0,
            nextDate: 1590112800000,
          },
          open: {
            day: 4,
            time: '1700',
            hours: 17,
            minutes: 0,
            nextDate: 1590094800000,
          },
        },
        {
          close: {
            day: 6,
            time: '0000',
            hours: 0,
            minutes: 0,
            nextDate: 1590206400000,
          },
          open: {
            day: 5,
            time: '1700',
            hours: 17,
            minutes: 0,
            nextDate: 1590181200000,
          },
        },
        {
          close: {
            day: 0,
            time: '0000',
            hours: 0,
            minutes: 0,
            nextDate: 1590292800000,
          },
          open: {
            day: 6,
            time: '1700',
            hours: 17,
            minutes: 0,
            nextDate: 1590267600000,
          },
        },
      ],
      weekday_text: [
        'Monday: Closed',
        'Tuesday: Closed',
        'Wednesday: 5:00 – 10:00 PM',
        'Thursday: 5:00 – 10:00 PM',
        'Friday: 5:00 PM – 12:00 AM',
        'Saturday: 5:00 PM – 12:00 AM',
        'Sunday: 5:00 PM – 12:00 AM',
      ],
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/101150227013613012002">Jonathan JayLando Dipratna</a>',
        ],
        width: 4032,
      },
      {
        height: 2988,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109229195308276684035">Deepshikha Sharma</a>',
        ],
        width: 5312,
      },
      {
        height: 3036,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104130459280653438437">Matt Shearer</a>',
        ],
        width: 4048,
      },
      {
        height: 2048,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/111047478217773674813">Karen Chui</a>',
        ],
        width: 2048,
      },
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104930422493673232502">Julieanna D</a>',
        ],
        width: 4032,
      },
      {
        height: 2764,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/116036294086104742341">james hollis</a>',
        ],
        width: 3577,
      },
      {
        height: 2268,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102750262771402066410">Chi Yon Cho</a>',
        ],
        width: 4032,
      },
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104583745906850984878">Brian Metallo</a>',
        ],
        width: 3024,
      },
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102537241996505053392">Arvind Jayashankar</a>',
        ],
        width: 4032,
      },
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115435754502077842798">Jason Tai</a>',
        ],
        width: 4032,
      },
    ],
    place_id: 'ChIJ9Q1kJUTyNIgRuvW9f60WFmI',
    plus_code: {
      compound_code: 'F382+87 Pittsburgh, Pennsylvania, United States',
      global_code: '87G2F382+87',
    },
    price_level: 2,
    rating: 4.7,
    reference: 'ChIJ9Q1kJUTyNIgRuvW9f60WFmI',
    reviews: [
      {
        author_name: 'Michael Ashburn',
        author_url: 'https://www.google.com/maps/contrib/110756355512540576751/reviews',
        language: 'en',
        profile_photo_url: 'https://lh4.ggpht.com/-V3ElFjkmq9o/AAAAAAAAAAI/AAAAAAAAAAA/xfFzkZwo5vg/s128-c0x00000000-cc-rp-mo/photo.jpg',
        rating: 5,
        relative_time_description: '2 months ago',
        text: 'Finally got to get here after many years. We are so sorry that we haven’t had time in the past few years after they opened.   We absolutely loved this place.  The cocktails were speedy and delicious. We’ve had cocktails in many bars in Pittsburgh and these were some of, if not the best around.  The small plates and large plates were spectacular - great Eastern European / Polish food.  We love that it’s all vegan!!!  Service was fast and efficient.   Thank you!!',
        time: 1583632380,
      },
      {
        author_name: 'Delta Daley',
        author_url: 'https://www.google.com/maps/contrib/110427490020691620559/reviews',
        language: 'en',
        profile_photo_url: 'https://lh3.ggpht.com/-KOHn5r10Lfg/AAAAAAAAAAI/AAAAAAAAAAA/HQnCFLT0rCE/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg',
        rating: 5,
        relative_time_description: '2 months ago',
        text: 'came with a party of 6 and was able to get a table very quickly on a Saturday night. you order before you sit down, which is actually really convenient. 3 people of my parpa ordered the pancakes and they all absolutely loved them. I got the perogies and they were phenomenal. I was the only vegan in my party but everyone enjoyed the food. Would highly recommend checking out this place. It\'s delicious and the staff if super friendly.',
        time: 1583624994,
      },
      {
        author_name: 'Ryan W',
        author_url: 'https://www.google.com/maps/contrib/117103821061088414116/reviews',
        language: 'en',
        profile_photo_url: 'https://lh6.ggpht.com/-cSSGNzZjGPU/AAAAAAAAAAI/AAAAAAAAAAA/3c2-Bf9BDn4/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg',
        rating: 5,
        relative_time_description: '3 months ago',
        text: 'Cool atmosphere, amazing cocktails, and great food! I’d recommend any of the cocktails because they are some of the best I’ve had in Pittsburgh, but you also must try their desert menu. We had this pastry thing that brought me back to my childhood eating toaster strudels but with enough icing! It’s also worth reminding that this is a vegan restaurant, but as someone who regularly eats meat, I didn’t miss it here.',
        time: 1581954202,
      },
      {
        author_name: 'Megan Ung',
        author_url: 'https://www.google.com/maps/contrib/107341618088084995874/reviews',
        language: 'en',
        profile_photo_url: 'https://lh3.ggpht.com/-cJaPHCVuseA/AAAAAAAAAAI/AAAAAAAAAAA/UtyyjXRYnnM/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg',
        rating: 4,
        relative_time_description: '4 months ago',
        text: 'The food and atmosphere was pretty good. It\'s an interesting process to order / eat the food- especially since it\'s so crowded it gets a bit confusing. Otherwise it is a good vegan place since there aren\'t many options but overall I think this place may have been a bit hyped up.',
        time: 1577935928,
      },
      {
        author_name: 'Julieanna D',
        author_url: 'https://www.google.com/maps/contrib/104930422493673232502/reviews',
        language: 'en',
        profile_photo_url: 'https://lh4.ggpht.com/-A-WKVyvOTOQ/AAAAAAAAAAI/AAAAAAAAAAA/-JqgwiGPJtg/s128-c0x00000000-cc-rp-mo-ba6/photo.jpg',
        rating: 5,
        relative_time_description: '11 months ago',
        text: 'Oh my gosh this place is amazing. Reminds me of my grandmother\'s Hungarian cooking. I wish I lived closer so I could eat here all the time. Incredible flavors. Highly recommend the pierogies.',
        time: 1560387281,
      },
    ],
    scope: 'GOOGLE',
    types: [
      'restaurant',
      'food',
      'point_of_interest',
      'establishment',
    ],
    international_phone_number: '+1 412 6826809',
    url: 'https://maps.google.com/?cid=7067861599632881082',
    user_ratings_total: 1000,
    utc_offset: -240,
    vicinity: '4606 Penn Avenue, Pittsburgh',
    website: 'http://aptekapgh.com/',
    html_attributions: [],
    utc_offset_minutes: -240,
  },
  time: '6:00 PM',
};

const spotSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PLACE':
      return {
        ...state,
        destination: action.value,
      };
    case 'UPDATE_TIME':
      console.log(`Time updated: ${action.value}`);
      return {
        ...state,
        time: action.value,
      };
    default:
      return state;
  }
};
export default spotSearchReducer;
