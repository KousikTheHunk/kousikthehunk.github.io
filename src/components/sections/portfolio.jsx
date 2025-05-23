import React, { useState } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react'
import Title from '../ui/title';
import { projectsData } from '../../utlits/fackData/projectsData';
import Lightbox from '../ui/lightbox';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = () => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);


    const openLightbox = (image) => {
        console.log("click")
        setSelectedImage(image);
      };
    
      const closeLightbox = () => {
        setSelectedImage(null);
      };


    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);

    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projectsData : projectsData.filter(image => image.category === category);

    return (
        <section id="portfolio" className="projects-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Works</p>
                            <h2>Creative Portfolio</h2>
                        </Title>
                    </div>
                </div>
                <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
                    {filteredCategory.map((item, id) => <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>{item}</li>)}
                </ul>
                <div className="row project-masonry-active">
                {filteredProjects.map(({ id, category, src, title, href }) => (
                  <Card
                  key={id}
                  category={category}
                  title={title}
                  src={src}
                  href={href}                        // ← pass it here
                  animationClass={animationClass}
                  openLightbox={openLightbox}
                  />
                  ))}
                </div>
            </div>
            <Lightbox selectedImage={selectedImage} onClose={closeLightbox} />
        </section>
    );
};

export default Portfolio;



const Card = ({
    category,
    title,
    src,
    href,               // ← new prop
    animationClass,
    openLightbox
  }) => {
    return (
      <div className={`col-lg-4 col-md-6 item branding ${animationClass}`}>
        <div className="project-item style-two wow fadeInUp delay-0-2s">
          {/* Wrap image & zoom button together */}
          <div className="project-image">
            {/* External link uses <a>; internal route uses <Link> */}
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={title} />
              {/* Keep lightbox trigger */}
              <div
                onClick={(e) => {
                  e.preventDefault();    // prevent navigation when zoom icon clicked
                  openLightbox(src);
                }}
                className="details-btn work-popup"
              >
                <i><RiArrowRightUpLine/></i>
              </div>
            </a>
          </div>
          <div className="project-content">
            <span className="sub-title">{category}</span>
            <h3>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  };