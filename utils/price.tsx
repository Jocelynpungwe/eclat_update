type PriceType = {
  id: number
  title: string
  price: string
  desc: string
  list: string[]
}

export const priceList: PriceType[] = [
  {
    id: 1,
    title: 'Studio Flat',
    price: 'C$185',
    desc: 'Thorough Cleaning Below; You can Add More Areas & Items',
    list: [
      'Entire Studio Appartment',
      'Kitchen & Appliances',
      'Bathroom & Toilet',
      'windows',
      'Deep Carpet Cleaning',
      'Kitchen Appliances',
    ],
  },
  {
    id: 2,
    title: '1 Bed Flat/House',
    price: 'C$220',
    desc: 'Thorough Cleaning Below; You can Add More Areas & Items',
    list: [
      '1 Bedroom',
      '1 Bathroom',
      '1 Kitchen',
      '1 Living room',
      '1 Hallaway',
      'Kitchen Appliances',
      'windows',
    ],
  },
  {
    id: 3,
    title: '2 Bed Flat/House',
    price: 'C$290',
    desc: 'Thorough Cleaning Below; You can Add More Areas & Items',
    list: [
      '2 Bedrooms',
      '1 Bathroom',
      '1 Kitchen',
      '1 Living room',
      '1 Hallaway',
      'Kitchen Appliances',
      'windows',
    ],
  },
  {
    id: 4,
    title: '3 Bed House',
    price: 'C$340',
    desc: 'Thorough Cleaning Below; You can Add More Areas & Items',
    list: [
      '3 Bedrooms',
      '1 Bathroom',
      '1 Kitchen',
      '1 Living room',
      '1 Hallaway',
      'Kitchen Appliances',
      'windows',
    ],
  },
  {
    id: 5,
    title: '4 Bed House',
    price: 'C$390',
    desc: 'Thorough Cleaning Below; You can Add More Areas & Items',
    list: [
      '4 Bedrooms',
      '1 Bathroom',
      '1 Kitchen',
      '1 Living room',
      '1 Hallaway',
      'Kitchen Appliances',
      'windows',
    ],
  },
  {
    id: 6,
    title: '5 Bed House',
    price: 'C$450',
    desc: 'Thorough Cleaning Below; You can Add More Areas & Items',
    list: [
      '5 Bedrooms',
      '1 Bathroom',
      '1 Kitchen',
      '1 Living room',
      '1 Hallaway',
      'Kitchen Appliances',
      'windows',
    ],
  },
]

type AdditionalType = {
  id: number
  desc: string
  list: string[]
}

export const additionalList: AdditionalType[] = [
  {
    id: 1,
    desc: 'Prices for additional areas are below',
    list: [
      'Bedroom: C$40',
      'Bathroom: C$40',
      'Toilet: C$40',
      'Living Room: C$40',
      'Kitchen: C$45',
    ],
  },
  {
    id: 2,
    desc: 'Prices for additional areas are below',
    list: [
      'Garage: C$45',
      'Balcony: C$30',
      'Study Room: C$35',
      'Utilty Room: C$35',
      'Dining Room: C$45',
    ],
  },
  {
    id: 3,
    desc: 'Prices for additional areas are below',
    list: [
      'Guest Room: C$45',
      'Office Room: C$40',
      'Playroom: C$40',
      'Gym Room: C$45',
      'Attic: C$55',
    ],
  },
  {
    id: 4,
    desc: 'Prices for additional areas are below',
    list: [
      'Dinning Room Carpet: C$55',
      'Through Lounge Carpet: C$60',
      'Hallway Carpet: C$60',
      'Staircase Carpet: C$40',
      'Single Bedroom Carpet: C$55',
      'Medium Rug: C$35',
    ],
  },
  {
    id: 5,
    desc: 'Prices for additional areas are below',
    list: [
      'Single Oven: C$35',
      'Double Oven: C$55',
      'Single Fridge: C$35',
      'Double Fridge: C$45',
      'Laundry Machine: C$35',
      'Dryer Machine: C$35',
    ],
  },
]
