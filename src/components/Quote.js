import React, { useState, useEffect } from 'react';
import './Quotes.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'TmJBQ/qdD6PdCv7tUWZlbw==DJZulwhx1HHPa4vZ' },
      });
      const data = await response.json();
      const randomQuote = data[0];
      setQuote(randomQuote);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="quotes">
      <h2>Quote of the Day</h2>
      <p>
        &ldquo;
        {quote.quote}
        &rdquo;
      </p>
      <p>
        -
        {quote.author}
      </p>
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
    </div>
  );
};

export default Quote;
