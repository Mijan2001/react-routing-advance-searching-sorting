import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Pagination from '../components/user/Pagination';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    // paginatin
    const itemsPerPage = 10;
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchedData = (currentPage, searchTerm, sortCriteria) => {
        setLoading(true);
        setError(null);

        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
            (currentPage - 1) * itemsPerPage
        }`;

        if (searchTerm !== '') {
            url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${itemsPerPage}&skip=${
                (currentPage - 1) * itemsPerPage
            }`;
        }

        if (sortCriteria) {
            const splitSortCriteria = sortCriteria.split('-');
            url += `&sortBy=${splitSortCriteria[0]}&order=${splitSortCriteria[1]}`;
        }

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong');
                }
                return res.json();
            })
            .then(data => {
                setProducts(data.products);
                setTotalPages(Math.ceil(data.total / itemsPerPage));
                setLoading(false);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchedData(currentPage, searchTerm, sortCriteria);
    }, [currentPage, searchTerm, sortCriteria]);

    // searching

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    // sorting
    const handleSortChange = event => {
        setSortCriteria(event.target.value);
        setCurrentPage(1);
    };

    // filter by current page data
    // const filterProducts = products.filter(
    //     product =>
    //         product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         product.category.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                All Products
            </h2>
            <div className="">
                <div className="flex justify-between items-center mb-6">
                    <div className="w-2/6">
                        <input
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onFocus={e =>
                                e.target.classList.add(
                                    'transition-all',
                                    'duration-500',
                                    'transform',
                                    'origin-left',
                                    'scale-x-110'
                                )
                            }
                            onBlur={e =>
                                e.target.classList.remove(
                                    'transition-all',
                                    'duration-500',
                                    'transform',
                                    'scale-x-110'
                                )
                            }
                            type="text"
                            placeholder="Search Products..."
                        />
                    </div>
                    <div className="w-2/5">
                        <select
                            value={sortCriteria}
                            onChange={handleSortChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Sort By</option>
                            <option value="price-asc">
                                Price: Low to High
                            </option>
                            <option value="price-desc">
                                Price: High to Low
                            </option>
                            <option value="title-asc">Title: A to Z</option>
                            <option value="title-desc">Title: Z to A</option>
                        </select>
                    </div>
                </div>
                {/* <div className="text-center">
                    <input
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-2/5   p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onFocus={e =>
                            e.target.classList.add(
                                'transition-all',
                                'duration-500',
                                'transform',
                                'scale-x-110'
                            )
                        }
                        onBlur={e =>
                            e.target.classList.remove(
                                'transition-all',
                                'duration-500',
                                'transform',
                                'scale-x-110'
                            )
                        }
                        type="text"
                        placeholder="Search Products..."
                    />
                </div>

                <div className="text-center mb-6">
                    <select
                        value={sortCriteria}
                        onChange={e => setSortCriteria(e.target.value)}
                        className="w-2/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Sort By</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="title-asc">Title: A to Z</option>
                        <option value="title-desc">Title: Z to A</option>
                    </select>
                </div> */}
            </div>

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
                <>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products &&
                            products.length > 0 &&
                            products.map(product => {
                                const {
                                    id,
                                    title,
                                    description,
                                    category,
                                    price,
                                    images
                                } = product;
                                return (
                                    <article
                                        key={id}
                                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                                    >
                                        <img
                                            src={images[0]}
                                            alt={title}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {title}
                                        </h2>
                                        <p className="text-sm text-gray-600 mt-1">
                                            <strong>Category:</strong>{' '}
                                            {category}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <strong>Price:</strong> ${price}
                                        </p>
                                        <p className="text-sm text-gray-700 mt-2">
                                            <strong>Description:</strong>{' '}
                                            {description &&
                                                description.substring(0, 100)}
                                            ...
                                        </p>
                                        <Link
                                            to={`/product/${id}`}
                                            state={product}
                                            className="inline-block mt-4 text-blue-500 hover:text-blue-600 font-medium"
                                        >
                                            Show Details
                                        </Link>
                                    </article>
                                );
                            })}
                    </section>

                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onHandleCurrentPage={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};

export default Products;
