import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Mahmoud', text: 'Programming is a super power that you can learn!'},
    {id: 'q2', author: 'Mido', text: 'React is a good library!'},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;