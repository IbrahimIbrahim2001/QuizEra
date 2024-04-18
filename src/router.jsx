import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomeLayout from "./pages/HomeLayout";

import Categories from "./pages/Categories";
import CategoryQuestionsLayout from "./pages/CategoryQuestionsLayout";
import QuizResult from "./components/QuizResult";
import Error from "./components/UIComponents/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="QuizEra" element={<HomeLayout />}>
      <Route index element={<Categories />} />
      <Route
        path="category-questions/:id"
        element={<CategoryQuestionsLayout />}
      />
      <Route path="quiz-result" element={<QuizResult />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
