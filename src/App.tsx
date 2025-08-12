import { useState, useEffect } from 'react'

// All the frog images from the original website
const frogImages = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
  '/assets/5.jpg',
  '/assets/6.jpg',
  '/assets/7.jpg',
  '/assets/8.jpg',
  '/assets/9.jpg',
  '/assets/10.jpg',
  '/assets/11.jpg',
  '/assets/12.jpg',
  '/assets/13.jpg',
  '/assets/14.jpg',
  '/assets/15.jpg',
  '/assets/16.jpg',
  '/assets/17.jpg',
  '/assets/18.jpg',
  '/assets/19.jpg',
  '/assets/20.jpg',
]

// Duplicate the array for seamless infinite scroll
const infiniteImages = [...frogImages, ...frogImages, ...frogImages]

function App() {
  const contractAddress = "** CA : coming soon **"; // ganti sesuai CA asli
  const [copied, setCopied] = useState(false);
  const [flip, setFlip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Balik lagi setelah 2 detik
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Jika scroll mentok ke bawah
      if (scrollTop + windowHeight >= docHeight) {
        setFlip(true);
      } else {
        setFlip(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#2673d1] text-white overflow-hidden relative">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-12 md:pt-24 pb-32">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-8xl md:text-9xl font-titan text-[#FFF081] mb-6 md:mb-8 tracking-tight">
            FiNN
          </h1>
          <p className="text-[#FFF081] font-bold text-lg md:text-lg font-mono tracking-wider">
           {contractAddress}
          </p>
        </div>

        {/* Buttons */}
          <button onClick={handleCopy} className="px-8 py-3 border-2 border-[#FFF081] text-[#FFF081] rounded-full font-semibold hover:bg-[#FFF081] hover:text-black transition-all duration-300 mb-4">
            {copied ? "COPIED!" : "COPY CA"}
          </button>
           <a href="#" target="_blank"><button className="px-8 py-3 bg-[#FFF081] text-[#2673d1] rounded-full font-extrabold hover:bg-[#eddd7b] transition-all duration-300 flex items-center gap-2 mb-8 text-2xl">
            💰 BUY NOW
          </button>
          </a>
     
        <div className="flex flex-row gap-4 relative mb-64">
        <a href="https://x.com/Finn0nbags" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] flex items-center justify-center text-[#FFF081] text-2xl border-2 transition-[0.3s] no-underline font-extrabold rounded-[50%] border-solid border-[#FFF081] hover:scale-125"><img src="/assets/tw3.png" alt="Twitter" className="w-[30px] h-[30px] block " /></a>



        <a href="https://dexscreener.com/solana/#" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] flex items-center justify-center text-[#FFF081] text-2xl border-2 transition-[0.3s] no-underline font-extrabold rounded-[50%] border-solid border-[#FFF081] hover:scale-125"><img src="/assets/dex3.png" alt="DEX" className="w-[30px] h-[30px] block " /></a>

        </div>

        {/* Animated Gallery */}
        <div className="w-full mx-auto">
          <div className="relative overflow-hidden">
            <div className="gallery-container">
              {/* First row - moving left */}
              <div className="gallery-row animate-scroll-left">
                {infiniteImages.slice(0, 16).map((image, index) => (
                  <div key={`row1-${image}`} className="gallery-item">
                    <img
                      src={image}
                      alt={`Frog ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Second row - moving left */}
              <div className="gallery-row animate-scroll-left">
                {infiniteImages.slice(16, 32).map((image, index) => (
                  <div key={`row2-${image}`} className="gallery-item">
                    <img
                      src={image}
                      alt={`Frog ${index + 17}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Third row - moving left */}
              <div className="gallery-row animate-scroll-left">
                {infiniteImages.slice(32, 48).map((image, index) => (
                  <div key={`row3-${image}`} className="gallery-item">
                    <img
                      src={image}
                      alt={`Frog ${index + 33}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Fourth row - moving left */}
              <div className="gallery-row animate-scroll-left">
                {infiniteImages.slice(0, 16).map((image, index) => (
                  <div key={`row4-${image}`} className="gallery-item">
                    <img
                      src={image}
                      alt={`Frog ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Fifth row - moving left */}
              <div className="gallery-row animate-scroll-left">
                {infiniteImages.slice(16, 32).map((image, index) => (
                  <div key={`row5-${image}`} className="gallery-item">
                    <img
                      src={image}
                      alt={`Frog ${index + 17}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Frog Character at Bottom */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">


        {/* Main Frog Character */}
        <div className="relative w-64 h-48 md:w-80 flex items-center justify-center">


          {/* Frog body */}
            <img
              src="/assets/finn2.png"
              alt="Finn"
              className={`w-full drop-shadow-[0_8px_15px_rgba(0,0,0,0.3)] ${flip ? "scale-x-[-1]" : ""}`}
              onMouseEnter={() => setFlip(true)}
              onMouseLeave={() => setFlip(false)}
            />          
        </div>
      </div>
    </div>
  )
}

export default App
