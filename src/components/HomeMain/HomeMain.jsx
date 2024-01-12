import React from 'react';
import {
  HomeMainDiv,
  HomeMainGridUl,
  HomeMainH1,
  HomeMainImg,
} from './HomeMain.styled';
import main1 from '../../img/main1.jpg';
import main2 from '../../img/main2.jpg';
import main3 from '../../img/main3.jpg';
import main4 from '../../img/main4.jpg';

export default function HomeMain() {
  return (
    <HomeMainDiv>
      <HomeMainH1>
        {/* ALPACA COFFEE */}
        Запашна розчинна кава... <br /> смачний бутерброд з мазіком... <br /> ми
        чекає на тебе!
      </HomeMainH1>
      <HomeMainGridUl>
        <li>
          <HomeMainImg src={main1} alt="main1" />
        </li>
        <li>
          <HomeMainImg src={main2} alt="main1" />
        </li>
        <li>
          <HomeMainImg src={main3} alt="main1" />
        </li>
        <li>
          <HomeMainImg src={main4} alt="main1" />
        </li>
      </HomeMainGridUl>
    </HomeMainDiv>
  );
}
