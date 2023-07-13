import React, { useEffect, useState } from 'react';
import TopSellersCard from './TopSellersCard';
import avatar1 from '../../../assets/demo/Avatar1.png';
import avatar2 from '../../../assets/demo/Avatar2.png';
import avatar3 from '../../../assets/demo/Avatar3.png';

type Props = {};

function TopSellersHome({ }: Props) {
  const topSellersData = [
    { number: 1, name: 'Keepitreal', totalSales: '34.5K USD', image: avatar1 },
    { number: 2, name: 'DigiLab', totalSales: '25K USD', image: avatar2 },
    { number: 3, name: 'GravityOne', totalSales: '12K USD', image: avatar3 },
    { number: 4, name: 'Juanie', totalSales: '50K USD', image: avatar1 },
    { number: 5, name: 'BlueWhale', totalSales: '50K USD', image: avatar2 },
    { number: 6, name: 'Mr fox', totalSales: '50K USD', image: avatar3 },
    { number: 7, name: 'Shroomie', totalSales: '50K USD', image: avatar1 },
    { number: 8, name: 'Robotica', totalSales: '50K USD', image: avatar2 },
  ];

  const limitedTopSellersData = topSellersData.slice(0, 8); // Limit to maximum of 8 items

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update the state based on the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div className='mx-36'>
          <div className='text-yellow text-[32px] barlow font-semibold'>Top Sellers</div>
          <div className='text-white text-[14px] barlow'>
            Checkout Top Rated Creators on the BazArt212 Marketplace
          </div>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-8 my-5`}>
            {limitedTopSellersData.map((seller, index) => (
              <TopSellersCard key={index} image={seller.image} number={Number(seller.number)} name={seller.name} totalSales={seller.totalSales} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSellersHome;
