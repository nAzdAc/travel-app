import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { routes } from '../utils/routes';
import { AuthContext } from '../context/AuthContext';

const ratingValues = [ 5, 4, 3, 2, 1 ];
const country = 'spain';

export const Rating = () => {
	const { loading, request } = useHttp();
	const [ ratings, setRatings ] = useState(0);
	const { token } = useContext(AuthContext);

  const fetchRating = useCallback(
		async () => {
      console.log('fetchRating')
			try {
				const data = await request(`http://localhost:8080/all-rating?country=${country}`, 'GET', null, {
					Authorization: `Bearer ${token}`
				});
        // console.log(data);
				// setLinks(data);
			} catch (e) {}
		},
		[ token, request ]
	);
  
  useEffect(() => {
    fetchRating()
  }, [fetchRating])

	const postRating = async (value) => {
		try {
			const data = await request(
				'http://localhost:8080/post-rating',
				'POST',
				{ country, value },
				{
					Authorization: `Bearer ${token}`
				}
			);
			console.log(data);
		} catch (e) {}
	};

	return (
		<div className="rating-wrap">
			<div className="rating">
				{ratingValues.map((item) => {
					return (
						<div className="rating-item" key={item} value={item} onClick={() => postRating(item)}>
							★
						</div>
					);
				})}
			</div>
			<div className="total-value" onClick={fetchRating}>
				{ratings}
			</div>
		</div>
	);
};
