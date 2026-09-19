import Bundle from "../assets/Bundle.jpg";
import Combo from "../assets/Combo.jpg";
import Cover from "../assets/Cover.png";

const products = [
  {
    id: "combo-2",
    name: "2-in-1 Combo",
    type: "Combo",
    description:
      "A carefully selected pair of G3 books to help your girl begin building confidence and understanding herself.",
    books: ["Making Wise Decisions", "The Girls World"],
    price: 20000,
    oldPrice: 25000,
    discount: "SAVE 20%",
    image: Combo,
  },

  {
    id: "bundle-4",
    name: "4-in-1 Bundle",
    type: "Bundle",
    description:
      "Four G3 books covering important areas of growth, confidence, character and personal development.",
    books: [
      "Managing Peer Pressure As A Girl",
      "Why Well Train Girls Misbehave During Valentine & How to Avoid The Trap",
      "The Purpose Driven Girl",
      "I Dare To Be Confident",
    ],
    price: 35000,
    oldPrice: 45000,
    discount: "SAVE 22%",
    image: Bundle,
  },

  {
    id: "bundle-6",
    name: "6-in-1 Complete Collection",
    type: "Complete Collection",
    description:
      "The complete G3 collection, giving your girl access to all six books in one powerful package.",
    books: [
      "Why Well Train Girls Misbehave During Valentine & How to Avoid The Trap",
      "Managing Peer Pressure As A Girl",
      "The Purpose Driven Girl",
      "Making Wise Decisions",
      "I Dare To Be Confident",
      "The Girls World",
    ],
    price: 55000,
    oldPrice: 70000,
    discount: "SAVE 21%",
    image: Cover,
    featured: true,
  },
];

export default products;