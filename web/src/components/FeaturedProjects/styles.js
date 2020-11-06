import styled, { keyframes } from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import bg from '../../images/background-poly.jpg'

export const gradientAnimation = keyframes`
0% {
		background-position: 15% 0%;
}
50% {
		background-position: 85% 100%;
}
100% {
		background-position: 15% 0%;
}
`

export const ColorAnimation = keyframes`
0%  {background: #04e5e5;}
10% {background: #f37055;}
20% {background: #ef4e7b;}
30% {background: #a166ab;}
40% {background: #5073b8;}
50% {background: #04e5e5;}
60% {background: #07b39b;}
70% {background: #6fba82;}
80% {background: #5073b8;}
90% {background: #1098ad;}
100% {background: #f37055;}
`

export const AnimatedShadow = keyframes`
0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
`

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #111;
  background-image: url(${bg});
  background-size: cover;
  .heading {
    width: 100%;
  }
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
`

export const StyledContainer = styled(Container)`
  padding: 10rem 0;
  @media (max-width: 500px) {
    padding: 50rem 0;
  }
`

export const Heading = styled.h2`
  font-size: 5.6rem;
  margin-bottom: 2rem;
  color: var(--white);
  line-height: 5rem;
`

export const Separator = styled.div`
  height: 5px;
  width: 50px;
  background-color: var(--blue);
  margin-bottom: 4rem;
`

export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  gap: 6rem;
  justify-items: start;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StyledCol = styled(Col)``

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 58rem;
  padding: 5rem 4rem;
  border-radius: 20px;
  transition: 0.2s;
  border: 1px solid var(--grey);
  /* box-shadow: 0 -5px 78px rgba(161, 102, 171, 0.5); */
  &:hover {
    transform: translateY(-10px);
  }
`

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 200px;
  background: var(--blue);
  margin-bottom: 2rem;
`
export const Title = styled.h4`
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 2rem;
`

export const Description = styled.p`
  color: #c5c5c5;
  font-weight: 300;
  margin: 5px 0px;
  margin-bottom: 4rem;
`

export const StyledButton = styled.button`
  height: 4rem;
  width: 18.6rem;
  border: none;
  align-self: flex-end;
  overflow: hidden;
  transition: 0.5s;
  background-color: var(--blue);
  &:hover {
    background: var(--blue);
  }
  span {
    top: 0;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`
