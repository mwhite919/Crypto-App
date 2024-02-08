import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { useCrypto } from "@/app/Providers/CryptoProvider";
import SliderWrapper from "@/app/SliderWrapper";
import ArrowDown, { ArrowUp } from "@/icons/Icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./coin-swiper.css";

export const CoinSwiper = ({ currentCoins }) => {
  
  const { handleSelect, top10Coins } = useCrypto();



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  

  return (
    <div>
      <Slider {...settings}>
        {top10Coins.map((coin) => (
          <div key={coin.id}>
            <div
              className="bg-second flex items-center justify-start text-xs ml-2 my-2 h-20 p-3 drop-shadow-md rounded-md "
              onClick={() => handleSelect(coin)}
            >
              <div>
                <img className="w-9 m-4" src={coin.image} />
              </div>
              <div className="flex flex-col">
                <div>
                  {coin.name}({coin.symbol.toUpperCase()})
                </div>
                <div>{coin.current_price}</div>
                <div className="flex items-center">
                  {coin?.price_change_percentage_1h_in_currency > 0 ? (
                    <ArrowUp className="h-3" />
                  ) : (
                    <ArrowDown className="h-3" />
                  )}
                  {coin?.price_change_percentage_1h_in_currency.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
