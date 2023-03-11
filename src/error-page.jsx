import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center pt-10">Oops!</h1>
      <p className="text-1xl font-bold mb-6 text-secondary text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-4xl font-bold mb-6 text-tertiary text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">  Let's go back home! </a>
    </div>
  );
}