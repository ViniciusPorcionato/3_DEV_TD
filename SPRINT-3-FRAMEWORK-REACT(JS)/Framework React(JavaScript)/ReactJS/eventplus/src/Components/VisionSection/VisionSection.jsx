import React from 'react';
import Title from '../Title/Title';
import './VisionSection.css';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className="vision__box">
                <Title
                    titleText={"Visão"}
                    color='white'
                    additionalClass='vision__title'
                />

                <p className='vision__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequatur ratione dolor inventore, repellat quas illum blanditiis officia vero minima repellendus quam nisi veniam animi mollitia quisquam voluptatem minus rem?</p>
            </div>
        </section>
    );
};

export default VisionSection;