import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Quote Details page {params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
