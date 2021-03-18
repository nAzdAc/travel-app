import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { routes } from '../utils/routes';
import { AuthContext } from '../context/AuthContext';

const ratingValues = [ 5, 4, 3, 2, 1 ];
// const attraction = 'sweden';

export const Rating = ({attraction}) => {
	const { loading, request } = useHttp();
	const [ ratings, setRatings ] = useState(0);
	const { token } = useContext(AuthContext);

  const fetchRating = useCallback(
		async () => {
      console.log('fetchRating')
			try {
				const data = await request(`${routes.rating}?attraction=${attraction}`, 'GET', null, {
					Authorization: `Bearer ${token}`
				});
        console.log(data);
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
				routes.postRating,
				'POST',
				{ attraction, value },
				{
					Authorization: `Bearer ${token}`
				}
			);
			console.log(data);
			// setRatings((prev) => prev = data.value)
		} catch (e) {}
	};

	return (
		<div className="rating-wrap">
			<div className="rating" value={ratings}>
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
