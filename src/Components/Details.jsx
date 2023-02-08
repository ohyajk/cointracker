import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const details = useSelector((state) => state.coins.selectedCoin);

  return (
    <div data-testid="Details-1" className="flex flex-col gap-2 justify-start items-between mt-10 [&>*:nth-child(2n+3)]:bg-violet-900/20 border border-black/10">
      <img className="h-20 w-max ml-auto mr-auto" src={details.icon} alt={details.name} />
      <div className="flex justify-between px-4 py-4">
        <span>Name :</span>
        <span>
          {details.name}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span> Rank :</span>
        <span>
          {details.rank}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span>Total Supply :</span>
        <span>
          {details.totalSupply}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span>Available Supply :</span>
        <span>
          {details.availableSupply}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span>Price :</span>
        <span>
          {details.price}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span> Price Change Weekly :</span>
        <span>
          {details.priceChange1w < 0 ? <span className="text-red-400">{details.priceChange1w}</span> : <span className="text-green-400">{details.priceChange1w}</span>}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span>Price Change Daily :</span>
        <span>
          {details.priceChange1d < 0 ? <span className="text-red-400">{details.priceChange1d}</span> : <span className="text-green-400">{details.priceChange1d}</span>}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span>Price Change Hourly :</span>
        <span>
          {details.priceChange1h < 0 ? <span className="text-red-400">{details.priceChange1h}</span> : <span className="text-green-400">{details.priceChange1h}</span>}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
    </div>
  );
};

export default Details;
