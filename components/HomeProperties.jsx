'use client'
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';

const HomeProperties = () => {
  const [recentProperties, setRecentProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

        if (!res.ok) {
          throw new Error('Failed to fetch data!');
        }

        const data = await res.json();
        const shuffledProperties = data.sort(() => Math.random() - Math.random());
        const slicedProperties = shuffledProperties.slice(0, 3);
        setRecentProperties(slicedProperties);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-emerald-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p>No properties, buddy!</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link href="/properties" className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
