export const PIZZAS: PizzaI[] = [
  {
    id: '1',
    name: 'Маргарита',
    ingredients: ['Томатный соус', 'Моцарелла', 'Базилик'],
    price: 450,
    description: 'Классическая пицца с нежным сыром и ароматным базиликом.',
  },
  {
    id: '2',
    name: 'Пепперони',
    ingredients: ['Томатный соус', 'Моцарелла', 'Пепперони', 'Орегано'],
    price: 550,
    description: 'Острая пицца с пикантными колбасками пепперони.',
  },
  {
    id: '3',
    name: 'Гавайская',
    ingredients: ['Томатный соус', 'Моцарелла', 'Ветчина', 'Ананас'],
    price: 520,
    description: 'Необычное сочетание сладкого ананаса и солёной ветчины.',
  },
];

export interface PizzaI {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  description: string;
}
