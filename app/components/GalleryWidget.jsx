import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import Button from './Button';

const GalleryWidget = ({ categories, isPolish }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(categories)[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  const translatedObj = {
    Haare: 'Włosy',
    Nägel: 'Paznokcie',
    Salon: 'Salon',
  };

  return (
    <div className='gallery'>
      <div className='tabs'>
        {Object.keys(categories).map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            text={isPolish ? translatedObj[category] : category}
          />
        ))}
      </div>
      <div className='images-grid'>
        {categories[selectedCategory].map((image, index) => (
          <div key={index} className='image-container'>
            <Image
              src={image}
              alt={selectedCategory}
              fill
              style={{ objectFit: 'cover' }}
              className='image'
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>
      <Dialog open={isOpen} onClose={closeModal} className='modal'>
        <div className='modal-background' onClick={closeModal}></div>
        <div className='modal-content'>
          <button className='close-button' onClick={closeModal}>
            &times;
          </button>
          <Image
            src={selectedImage}
            alt='Selected'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default GalleryWidget;
