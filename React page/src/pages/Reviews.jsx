import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/NavBar';


const Reviews = () => {
  const { productId } = useParams()
  console.log('Product ID:', productId)
  const [reviews, setReviews] = useState([])
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product details pagal productId
        const productResponse = await fetch(`http://localhost:4012/bouquet/${productId}`)
        const productData = await productResponse.json()
        setProduct(productData)
  
        // Fetch reviews naudojant productId
        const reviewsResponse = await fetch(`http://localhost:4012/reviews?product_id=${productId}`)
        const reviewsData = await reviewsResponse.json()
        setReviews(reviewsData)
      } catch (error) {
        console.error('Error fetching data:', error)
        setProduct(null)
        setReviews([])
      }
    }
    fetchData()
  }, [productId])

  const handleDeleteReview = async (reviewId) => {
    try {
      // Delete the review 
      await fetch(`http://localhost:4012/reviews/${reviewId}`, {
        method: 'DELETE',
      })
      // Update the reviews state to trigger a re-render
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId))
    } catch (error) {
      console.error('Error deleting review:', error)
    }
  }

  return (
     <>
      <Navbar/>
      <div className="review-page">
        {product ? (<h2> " {product.title} " reviews:</h2>) : (<h2>Loading...</h2>)}
        {reviews.length > 0 ? (
          <div className="review-cards-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="rating">
                  <span className="rating-label">Rating:</span>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={index < review.rating ? 'green-star' : 'yellow-star'} />
                  ))}
                </div>
                <h3>{review.name}</h3>
                <br />
                <p>{review.comment}</p>
                <br />
                <div className="action-icons">
                  You do not like comment?
                  <FaTrashAlt className="trash-icon" onClick={() => handleDeleteReview(review.id)} />  
                </div>
              </div>
            ))}
          </div> ) : (
          <p className="noReviews">No reviews available for this product.</p>
        )}
        <Link to="/Bouquets"> <button>Go Back</button> </Link>
        <Link to={ `/reviews/${productId}/new-review`}> <button>Add Review</button> </Link>
      </div>
      </>
  )
}

export default Reviews;
