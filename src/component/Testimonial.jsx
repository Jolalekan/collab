import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from './Container';

const Testimonial = () => {
  const scrollContainerRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // Only apply auto-scroll on mobile
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const testimonialCards = testimonialRefs.current;
      const cardWidth = testimonialCards[0]?.offsetWidth || 288; // 288px is w-72
      const gapWidth = 16; // 4 in Tailwind equals 16px
      const totalWidth = cardWidth * testimonialCards.length + gapWidth * (testimonialCards.length - 1);
      
      // Create auto-scroll animation
      const autoScroll = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
      });
      
      // Start with a pause
      autoScroll.to({}, { duration: 1 });
      
      // Scroll to each testimonial
      testimonialCards.forEach((_, index) => {
        if (index > 0) { // Skip the first one since we're already there
          autoScroll.to(scrollContainer, {
            scrollLeft: (cardWidth + gapWidth) * index,
            duration: 1.5,
            ease: "power2.inOut"
          });
          
          // Pause at each testimonial
          autoScroll.to({}, { duration: 2 });
        }
      });
      
      // Return to the first testimonial
      autoScroll.to(scrollContainer, {
        scrollLeft: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });
      
      // Clean up the animation when component unmounts
      return () => {
        autoScroll.kill();
      };
    }
  }, []);

  return (
    <div className='bg-blue-950'>
      <Container>
        <div className='py-6 flex items-center flex-col gap-4'>
          <h2 className='text-white text-2xl tracking-tight font-medium'>Testimonials</h2>
          
          {/* Scrollable testimonial container */}
          <div 
            ref={scrollContainerRef}
            className='w-full overflow-x-auto pb-4 scrollbar-hide'
          >
            <div className='flex md:flex md:justify-center gap-4 min-w-max md:min-w-0'>
              {/* Testimonial cards */}
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index}
                  ref={el => testimonialRefs.current[index] = el}
                  className='rounded-md p-4 bg-gray-50 flex flex-col items-center w-72'
                >
                  <div className='flex flex-col gap-4 items-center'>
                    <span><img src="/assets/noAvatar.png" alt="" /></span>
                    <h3 className='text-base font-bold'>Adisa Olaide</h3>
                  </div>
                  <div> <p className='text-center text-sm text-gray-600'> They are trustworthy and good to work <br /> with and have experience </p></div>
                  <div className='flex py-2'>
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <div key={i}><img src="/assets/star.png" width={12} height={12} alt="" /></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Optional scroll indicator */}
          <div className='flex gap-2 mt-2 md:hidden'>
            <div className='h-1 w-6 bg-white rounded-full opacity-80'></div>
            <div className='h-1 w-6 bg-white rounded-full opacity-40'></div>
            <div className='h-1 w-6 bg-white rounded-full opacity-40'></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;

// import React from 'react'
// import Container from './Container'

// const Testimonial = () => {
//   return (
//     <div className='bg-blue-950'>
//     <Container>
//       <div className='py-6 flex items-center flex-col gap-4'>
//         <h2 className='text-white text-2xl tracking-tight font-medium'>Testimonials</h2>
        
//         {/* Scrollable testimonial container */}
//         <div className='w-full overflow-x-auto pb-4'>
//           <div className='flex md:flex gap-4 min-w-max md:min-w-0'>
//             {/* Testimonial cards */}
//             <div className='rounded-md p-4 bg-gray-50 flex flex-col items-center w-72'>
//               <div className='flex flex-col gap-4 items-center'>
//                 <span><img src="/assets/noAvatar.png" alt="" /></span>
//                 <h3 className='text-base font-bold'>Adisa Olaide</h3>
//               </div>
//               <div> <p className='text-center text-sm text-gray-600'> They are trustworthy and good to work <br /> with and have experience </p></div>
//               <div className='flex py-2'>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//               </div>
//             </div>
            
//             <div className='rounded-md p-4 bg-gray-50 flex flex-col items-center w-72'>
//               <div className='flex flex-col gap-4 items-center'>
//                 <span><img src="/assets/noAvatar.png" alt="" /></span>
//                 <h3 className='text-base font-bold'>Adisa Olaide</h3>
//               </div>
//               <div> <p className='text-center text-sm text-gray-600'> They are trustworthy and good to work <br /> with and have experience </p></div>
//               <div className='flex py-2'>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//               </div>
//             </div>
            
//             <div className='rounded-md p-4 bg-gray-50 flex flex-col items-center w-72'>
//               <div className='flex flex-col gap-4 items-center'>
//                 <span><img src="/assets/noAvatar.png" alt="" /></span>
//                 <h3 className='text-base font-bold'>Adisa Olaide</h3>
//               </div>
//               <div> <p className='text-center text-sm text-gray-600'> They are trustworthy and good to work <br /> with and have experience </p></div>
//               <div className='flex py-2'>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//                 <div><img src="/assets/star.png" width={12} height={12} alt="" /></div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Optional scroll indicator */}
//         <div className='flex gap-2 mt-2 md:hidden'>
//           <div className='h-1 w-6 bg-white rounded-full opacity-80'></div>
//           <div className='h-1 w-6 bg-white rounded-full opacity-40'></div>
//           <div className='h-1 w-6 bg-white rounded-full opacity-40'></div>
//         </div>
//       </div>
//     </Container>
//   </div>
//   )
// }

// export default Testimonial