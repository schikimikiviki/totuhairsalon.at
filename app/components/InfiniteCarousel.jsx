import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import quote from '../media/quote.svg';

const InfiniteCarousel = ({ items, interval, visibleitems, isImage }) => {
  const [index, setIndex] = useState(0);
  const length = items.length;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % length),
      interval
    );

    return () => {
      resetTimeout();
    };
  }, [index, length, interval]);

  const nextSlide = () => {
    setIndex((index + visibleitems) % length);
  };

  const prevSlide = () => {
    setIndex((index - visibleitems + length) % length);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper index={index} visibleitems={visibleitems}>
        {items.map((item, i) => (
          <CarouselItem key={i} visibleitems={visibleitems}>
            {isImage ? (
              <img src={item} alt={`carousel-item-${i}`} />
            ) : (
              <TextItem>{item}</TextItem>
            )}
          </CarouselItem>
        ))}
      </CarouselWrapper>
      {isImage ? (
        <>
          <Button onClick={prevSlide}>{'<'}</Button>
          <Button onClick={nextSlide}>{'>'}</Button>
        </>
      ) : (
        <>
          <img src={quote.src} alt='quote' width={'80px'} className='quote' />
        </>
      )}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 20px;
  transform: translateX(
    ${(props) => -props.index * (100 / props.visibleitems)}%
  );
  width: ${(props) => (props.length / props.visibleitems) * 100}%;
`;

const CarouselItem = styled.div`
  min-width: ${(props) => 100 / props.visibleitems}%;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
  }
`;

const TextItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  padding-left: 40px;
  font-style: italic;
  height: 200px;
  font-size: 20px;
  background: #eee;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  &:nth-of-type(1) {
    left: 10px;
  }
  &:nth-of-type(2) {
    right: 10px;
  }
`;

export default InfiniteCarousel;
