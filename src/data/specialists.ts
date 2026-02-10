import Ulugbek from '../assets/images/Ulugbek.png';
import Laziz from '../assets/images/Laziz.png';
import Nargiza from '../assets/images/Nargiza.png';

export interface Specialist {
  id: number;
  name: string;
  role?: string;
  image: string;
  actions: ('book' | 'consult')[];
}

export const specialists: Specialist[] = [
  {
    id: 1,
    name: "doctor_ulugbek",
    image: Ulugbek,
    actions: ['book']
  },
  {
    id: 2,
    name: "doctor_laziz",
    image: Laziz,
    actions: ['book']
  },
  {
    id: 4,
    name: "doctor_nargiza",
    role: "director_role",
    image: Nargiza,
    actions: ['book']
  }
];
