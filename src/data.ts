import { md5 } from "js-md5";
import Employe from "./models/Employe";
import Customer from "./models/Customer";
import CreditCard from "./models/CreditCard";
import Actor from "./models/Actor";
import Movie from "./models/Movie";
import Category from "./models/Category";

export const employes: Employe[] = [
  new Employe({
    firstname: "Alice",
    lastname: "Smith",
    gender: "female",
    password: md5("password123"),
    startedAt: 1622505600,
    userCode: "USR001",
    access: "admin",
  }),
  new Employe({
    firstname: "Bob",
    lastname: "Johnson",
    gender: "male",
    password: md5("securePass456"),
    startedAt: 1625097600,
    userCode: "USR002",
    access: "user",
  }),
  new Employe({
    firstname: "Charlie",
    lastname: "Williams",
    password: md5("myPass789"),
    startedAt: 1627776000,
    userCode: "USR003",
    access: "user",
  }),
  new Employe({
    firstname: "Diana",
    lastname: "Brown",
    gender: "female",
    password: md5("anotherPass012"),
    startedAt: 1630454400,
    userCode: "USR004",
    access: "admin",
  }),
  new Employe({
    firstname: "Eve",
    lastname: "Davis",
    password: md5("passWord345"),
    startedAt: 1633046400,
    userCode: "USR005",
    access: "user",
  }),
];

export const creditCards: CreditCard[] = [
  new CreditCard({
    cardNumber: "4111111111111111",
    secret: "123",
    expiration: 1672444800,
  }),
  new CreditCard({
    cardNumber: "5500000000000004",
    secret: "456",
    expiration: 1703980800,
  }),
  new CreditCard({
    cardNumber: "4111111111111111",
    secret: "789",
    expiration: 1745616000,
  }),
  new CreditCard({
    cardNumber: "340000000000009",
    secret: "0123",
    expiration: 1685577600,
  }),
  new CreditCard({
    cardNumber: "6011000000000004",
    secret: "456",
    expiration: 1703980800,
  }),
];

export const customers: Customer[] = [
  new Customer({
    firstname: "John",
    lastname: "Doe",
    gender: "male",
    email: "john.doe@example.com",
    password: "password123",
    inscriptionDate: 1622505600,
    creditCards: [creditCards[0], creditCards[1]],
  }),
  new Customer({
    firstname: "Jane",
    lastname: "Smith",
    gender: "female",
    email: "jane.smith@example.com",
    password: "securePass456",
    inscriptionDate: 1625097600,
    creditCards: [creditCards[2]],
  }),
  new Customer({
    firstname: "Emily",
    lastname: "Johnson",
    email: "emily.johnson@example.com",
    password: "myPass789",
    inscriptionDate: 1627776000,
    creditCards: [creditCards[3]],
  }),
  new Customer({
    firstname: "Michael",
    lastname: "Brown",
    gender: "male",
    email: "michael.brown@example.com",
    password: "anotherPass012",
    inscriptionDate: 1630454400,
    creditCards: [],
  }),
  new Customer({
    firstname: "Sarah",
    lastname: "Davis",
    email: "sarah.davis@example.com",
    password: "passWord345",
    inscriptionDate: 1633046400,
    creditCards: [creditCards[4]],
  }),
] as const;

export const categories: Category[] = [
  new Category({
    name: "Action",
    description: "Movies that have a lot of exciting action sequences.",
  }),
  new Category({
    name: "Adventure",
    description: "Movies that involve exciting journeys or expeditions.",
  }),
  new Category({
    name: "Sci-Fi",
    description: "Movies that are based on speculative or futuristic concepts.",
  }),
  new Category({
    name: "Drama",
    description: "Movies that focus on emotional and relational development.",
  }),
  new Category({
    name: "Fantasy",
    description:
      "Movies that include magical elements or other supernatural phenomena.",
  }),
  new Category({
    name: "Comedy",
    description:
      "Movies that are primarily designed to make the audience laugh.",
  }),
];

export const movies: Movie[] = [
  new Movie({
    name: "Captain America: The First Avenger",
    duration: 124,
    description:
      "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'.",
    categories: [categories[0], categories[1], categories[2]],
  }),
  new Movie({
    name: "Captain America: The Winter Soldier",
    duration: 136,
    description:
      "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    categories: [categories[0], categories[2], categories[4]],
  }),
  new Movie({
    name: "The Avengers",
    duration: 143,
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    categories: [categories[5], categories[4], categories[2]],
  }),
  new Movie({
    name: "Avengers: Endgame",
    duration: 181,
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    categories: [categories[1], categories[2], categories[4]],
  }),
  new Movie({
    name: "Iron Man",
    duration: 126,
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    categories: [categories[5], categories[2], categories[4]],
  }),
  new Movie({
    name: "Iron Man 3",
    duration: 130,
    description:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    categories: [categories[1], categories[2], categories[4]],
  }),
  new Movie({
    name: "Iron Man 2",
    duration: 124,
    description:
      "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful madman with ties to his father's legacy.",
    categories: [categories[1], categories[2], categories[4]],
  }),
  new Movie({
    name: "Black Widow",
    duration: 134,
    description:
      "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    categories: [categories[1], categories[2], categories[3]],
  }),
  new Movie({
    name: "Thor",
    duration: 115,
    description:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    categories: [categories[0], categories[2], categories[5]],
  }),
  new Movie({
    name: "Thor: Ragnarok",
    duration: 130,
    description:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    categories: [categories[0], categories[5], categories[4]],
  }),
  new Movie({
    name: "Thor: Love and Thunder",
    duration: 119,
    description:
      "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    categories: [categories[1], categories[3], categories[4]],
  }),
  new Movie({
    name: "Spider-Man: Homecoming",
    duration: 133,
    description:
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    categories: [categories[0], categories[2], categories[4]],
  }),
  new Movie({
    name: "Spider-Man: Far From Home",
    duration: 129,
    description:
      "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    categories: [categories[0], categories[2], categories[4]],
  }),
  new Movie({
    name: "Spider-Man: No Way Home",
    duration: 148,
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    categories: [categories[0], categories[2], categories[4]],
  }),
];

export const actors: Actor[] = [
  new Actor({
    firstname: "Chris",
    lastname: "Evans",
    gender: "male",
    caracterName: "Captain America",
    startedAt: 2011,
    endedAt: 2019,
    cachet: 20000000,
    movies: [movies[0], movies[1], movies[2], movies[3]],
  }),
  new Actor({
    firstname: "Robert",
    lastname: "Downey Jr.",
    gender: "male",
    caracterName: "Iron Man",
    startedAt: 2008,
    endedAt: 2019,
    cachet: 75000000,
    movies: [movies[4], movies[2], movies[5], movies[3]],
  }),
  new Actor({
    firstname: "Scarlett",
    lastname: "Johansson",
    gender: "female",
    caracterName: "Black Widow",
    startedAt: 2010,
    endedAt: 2021,
    cachet: 20000000,
    movies: [movies[6], movies[2], movies[7]],
  }),
  new Actor({
    firstname: "Chris",
    lastname: "Hemsworth",
    gender: "male",
    caracterName: "Thor",
    startedAt: 2011,
    endedAt: 2022,
    cachet: 20000000,
    movies: [movies[8], movies[9], movies[10], movies[2]],
  }),
  new Actor({
    firstname: "Tom",
    lastname: "Holland",
    gender: "male",
    caracterName: "Spider-Man",
    startedAt: 2016,
    endedAt: 2021,
    cachet: 15000000,
    movies: [movies[11], movies[12], movies[13]],
  }),
];
