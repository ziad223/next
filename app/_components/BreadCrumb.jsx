import React from 'react';
import Link from 'next/link';

const BreadCrumb = ({ title, pageTitle }) => {
  const words = title.split(' ');

  return (
    <section className='breadcrumb-sec'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className='text-center'>
                {words[0]} <span className="second-word">{words[1]}</span> {words.slice(2).join(' ')}
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">{pageTitle}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
