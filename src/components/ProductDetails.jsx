import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    const fetchedData = () => {
        setLoading(true);
        setError(null);
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong');
                }
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchedData();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Product Details
            </h2>
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
                <article className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
                    <img
                        src={product.images}
                        alt={product.title}
                        className="w-full h-64 object-cover rounded-md mb-6"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        {product.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Price:</strong> ${product.price}
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>Description:</strong>{' '}
                        {product.description && product.description}
                    </p>
                    <Link
                        to="/"
                        className="inline-block mt-4 text-blue-500 hover:text-blue-600 font-medium"
                    >
                        back
                    </Link>
                </article>
            )}
        </div>
    );
};

export default ProductDetails;
