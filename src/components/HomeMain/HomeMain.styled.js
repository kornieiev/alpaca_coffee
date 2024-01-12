import styled from 'styled-components';

export const HomeMainDiv = styled.div`
  margin-top: 90px;
`;
export const HomeMainH1 = styled.h1`
  /* @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=M+PLUS+Code+Latin:wght@200;400;600;700&family=Nunito+Sans:ital,opsz,wght@1,6..12,200&family=Nunito:ital,wght@0,200;0,400;1,200;1,400&display=swap'); */
  /* font-family: 'DM Sans', sans-serif; */
  /* font-family: 'M PLUS Code Latin', monospace; */
  /* font-family: 'Nunito', sans-serif; */
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0px;
  color: rgba(255, 255, 255, 0.8);
`;

export const HomeMainImg = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  border: 4px solid white;
`;

export const HomeMainGridUl = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;
