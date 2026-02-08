import doctor1 from '../assets/images/doctor1.png';
import doctor2 from '../assets/images/doctor2.png';
import doctor3 from '../assets/images/doctor3.png';

export interface Specialist {
  id: number;
  name: string;
  image: string;
  actions: ('book' | 'consult')[];
}

export const specialists: Specialist[] = [
  {
    id: 1,
    name: "Улугбек Бахадырович",
    image: doctor1,
    actions: ['book']
  },
  {
    id: 2,
    name: "Лазиз Отабекович",
    image: doctor2,
    actions: ['book']
  },
  {
    id: 3,
    name: "Отабек Исмаилович",
    image: doctor3,
    actions: ['consult', 'book']
  }
];
