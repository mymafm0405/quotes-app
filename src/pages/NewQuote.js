import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (QuoteData) => {
    console.log(QuoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
