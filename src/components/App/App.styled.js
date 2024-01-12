import styled from 'styled-components';
import mainAlpacaImg from '../../img/main-alpaca-img.jpg';

export const PagesDiv = styled.div`
  /* Устанавливаем изображение в качестве фона */
  background-image: url(${mainAlpacaImg});
  /* Указываем размеры и расположение фона */
  background-size: cover;
  background-position: center;
  /* Дополнительные стили, если необходимо */
  width: 100%;
  height: 400px; /* Высота по вашему усмотрению */
`;
