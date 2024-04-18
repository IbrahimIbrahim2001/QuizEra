import { useQuery } from "@tanstack/react-query"
import axios from "axios";

let URL = "";

const SPORTS = "Sports";
const ART = "Art";
const HISTORY = "History";
const MOVIES = "Movies";
const COMPUTER = "Computer";
const GEOGRAPHY = "Geography";
const ANIMALS = "Animals";


let SPORTS_LINK = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
let ART_LINK = "https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple";
let HISTORY_LINK = "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";
let MOVIES_LINK = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple";
let COMPOUTER_LINK = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
let GEOGRAPHY_LINK = "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
let ANIMALS_LINK = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";

const defineCategory = (category) => {
  switch (category) {
    case (SPORTS): URL = SPORTS_LINK;
      break;
    case (ART): URL = ART_LINK;
      break;
    case (HISTORY): URL = HISTORY_LINK;
      break;
    case (MOVIES): URL = MOVIES_LINK;
      break;
    case (COMPUTER): URL = COMPOUTER_LINK;
      break;
    case (GEOGRAPHY): URL = GEOGRAPHY_LINK;
      break;
    case (ANIMALS): URL = ANIMALS_LINK;
      break;
    default: URL = "";
  }
};

const fetchQuestions = (category) => {
  defineCategory(category);
  return axios.get(URL);
}

export default function useFetchQuestionsData(category) {
  return useQuery({
    queryKey: ["questions", category],
    queryFn: () => fetchQuestions(category),

  });
}
