import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Clear timeout on component unmount (clean-up)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Display loading indicator while content is loading
      ) : (
        <div>

          <Header />
        </div>
      )}
    </>
  );
};

export default Home;
