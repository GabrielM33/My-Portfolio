import React from 'react';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { social } from "../constants";

const Social = ({ url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className='flex flex-row flex-wrap justify-center gap-10'>
              {social.map((social) => (
                <div className='w-28 h-28' key={social.name}>
                  <BallCanvas icon={social.icon} size={3}/>
                </div>
              ))}
            </div>
        </a>
      );
};

export default Social;