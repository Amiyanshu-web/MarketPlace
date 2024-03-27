import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RINGS from "vanta/dist/vanta.rings.min"
import { useSelector } from 'react-redux';

const Hero = () => {

  const theme = useSelector(state => state.userState.theme);

  useEffect(() => {
    RINGS({
      el: "#hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: theme === 'winter' ? 0xffffff : 0x1D232A
    });
  }, [theme]);
  return (
    <div className='pl-4 grid items-center' style={{ height: "90vh" }} id="hero">
      <h1 className='max-w-3xl text-4xl font-bold sm:text-6xl mt-4'>
        Explore the Frontier of AI
      </h1>
      <p className='max-w-2xl text-lg leading-8'>
        Dive into a World of Cutting-Edge Models, Unveiling the Future of Technology at Your Fingertips!
      </p>
      <div className=''>
        <Link to='/products' className='btn btn-primary'>
          EXPLORE!
        </Link>
      </div>
    </div>
  );
};
export default Hero;
