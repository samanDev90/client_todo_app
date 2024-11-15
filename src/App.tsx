import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Todo = lazy(() => import("./pages/Todo"));

const App = () => {
  return (
    <main className="p-2 md:max-w-[80rem] md:mx-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/todo/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Todo />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
