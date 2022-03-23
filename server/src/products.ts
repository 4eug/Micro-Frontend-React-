export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Flowerish Mest',
    price: 15.99,
    description: 'A beautiful pattern flower dress',
    image: 'http://localhost:8080/1.webp',
    longDescription:
      'A beautiful pattern flower dress for ladies both adult and young. Exclusive!',
  },
  {
    id: 2,
    name: 'Black Chi',
    price: 25.99,
    description: 'A Black Dress made of lyno.',
    image: 'http://localhost:8080/2.webp',
    longDescription:
      'A Black Dress made of lyno for ladies. Can wear to parties and any other event.',
  },
  {
    id: 3,
    name: 'Slight Red Hands',
    price: 23.99,
    description: 'A Single Threaded dress for ladies.',
    image: 'http://localhost:8080/3.webp',
    longDescription:
      'A Single Threaded dress for ladies to wear makes you love yourself',
  },
  {
    id: 4,
    name: 'Pinky',
    price: 25.99,
    description: 'Flaming Pink Dress for girls.',
    image: 'http://localhost:8080/4.webp',
    longDescription: 'Flaming Pink Dress for girls to wear occasionally',
  },
  {
    id: 5,
    name: 'Brownly',
    price: 16.99,
    description: 'A Single Threaded dress for ladies Brown color',
    image: 'http://localhost:8080/5.webp',
    longDescription:
      'A Single Threaded dress for ladies Brown Color for outing',
  },
  {
    id: 6,
    name: 'Red Pullon',
    price: 8.99,
    description: 'Sexy Red Pullon Classic and beautiful.',
    image: 'http://localhost:8080/6.webp',
    longDescription:
      'Sexy Red Pullon Classic and beautiful. Ladies nice outfit',
  },
  {
    id: 7,
    name: 'Orange Lase',
    price: 17.99,
    description: 'Beautiful orange lase sexy!.',
    image: 'http://localhost:8080/7.webp',
    longDescription: 'Beautiful orange lase sexy!. Ladies Grad yours',
  },
  {
    id: 8,
    name: 'Pink Cindy',
    price: 8.99,
    description: 'Pink Cindy makes you feel like a princess',
    image: 'http://localhost:8080/8.webp',
    longDescription: 'Pink Cindy makes you feel like a princess!',
  },
  {
    id: 9,
    name: 'Pattern Hearts',
    price: 30.59,
    description: 'Red Pattern Hearts for ladies',
    image: 'http://localhost:8080/9.webp',
    longDescription: 'Red Pattern Hearts for ladies. Beautiful !',
  },
];

export default products;
