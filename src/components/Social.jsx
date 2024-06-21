import React from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { social } from "../constants";

const Social = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {social.map((social) => (
                <a href={social.socialurl} target="_blank" rel="noopener noreferrer" key={social.name}>
                    <div className='w-28 h-28'>
                        <BallCanvas icon={social.icon} size={3}/>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SectionWrapper(Social, "social");