'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import Pagination from '../_components/Pagination';
import BreadCrumb from '../_components/BreadCrumb';
import ProductCard from '../_components/ProductCard';
import BASE_URL from '@/utils/apiConfig';
import overlay from '../../public/assets/shop/shop_overlay_shape.png'

const Page = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((res) => setCategoriesData(res.data));
  }, []);
    useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  }, []);
  const filterList = [
    { filter: 'All' },
    ...((categoriesData || []).map((category) => ({ filter: category?.title }))),
  ];

  const items = 6;
  const noOfPages = Math.ceil(filteredProducts.length / items) || 0;
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const productsPerPage = filteredProducts?.slice(startIndex, endIndex);

  const handleDropDownMenu = () => {
    setIsActive(!isActive);
  };

  const handleSelectFilter = (name, idx) => {
    setSelectedIndex(idx);
    handleDropDownMenu();
    setSelectedFilter(name);
  };

  const handleSelectCategory = (name) => {
    const idx = filterList.findIndex((item) => item.filter === name);
    setSelectedIndex(idx);
    setSelectedFilter(name);
  };

  

  const filterProducts = (filter) => {
    let updatedProducts = [...(categoriesData || [])];
    switch (filter) {
      case 'All':
        updatedProducts = categoriesData;
        break;
      default:
        updatedProducts = updatedProducts.filter((e) => e?.category === filter);
        setCurrent(1);
        break;
    }
    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    filterProducts(selectedFilter);
  }, [selectedFilter, categoriesData]);

  return (
    <main>
      <BreadCrumb title="PRODUCTS LIST" pageTitle="shop" />
      <section className="shop-area">
        <div className="container">
          <div className="shop-top-meta">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12">
                <p className="show-result">
                  Showing {startIndex + 1}–{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} Results
                </p>
              </div>
              <div className="col-sm-6 col-12">
                <div className="shop-filter">
                  <div>
                    <div className={`custom-div ms-auto ${isActive ? 'active' : ''}`} onClick={handleDropDownMenu}>
                      <div className="custom-select">
                        <span className="me-3">Filter by:</span>
                        {selectedFilter.length > 12 ? selectedFilter.substr(0, 10) + '...' : selectedFilter}
                        <IoIosArrowDown className="position-absolute" />
                      </div>
                      <ul>
                        {filterList.map(({ filter }, idx) => {
                          return(
                            <li
                            key={idx}
                            onClick={() => handleSelectFilter(filter, idx)}
                            className={selectedIndex === idx ? 'activeLi' : ''}
                          >
                            {filter}
                          </li>
                          )
                        }
                          
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {productsPerPage?.map((product, idx) => {
              return(
                <div key={idx} className="col-lg-4 col-md-6 col-sm-8 col-10">
                <ProductCard product={product} handleSelectFilter={handleSelectCategory} />
                 </div>
              )
            }
              
            )}
          </div>
          <div className="row">
            <div className="col-12">
              <Pagination pagesNumber={noOfPages} current={current} setCurrent={setCurrent} />
            </div>
          </div>
        </div>
        <div className="shop-area-shape">
          <Image src={overlay} alt="over-lay" layout="responsive" width={1000} height={1000} />
        </div>
      </section>
    </main>
  );
};

export default Page;

