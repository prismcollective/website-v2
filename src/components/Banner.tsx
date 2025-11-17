export default function Banner() {
  const text = "THE INTERSECTION OF ART AND TECHNOLOGY.";
  
  return (
    <div className="relative w-full overflow-hidden bg-black py-4">
      <div className="animate-scroll-left-fast md:animate-scroll-left flex whitespace-nowrap">
        {/* First set of text */}
        <div className="flex whitespace-nowrap">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={`first-${i}`} className="text-white mx-4">
              {text}
            </span>
          ))}
        </div>
        {/* Second set of text for seamless loop */}
        <div className="flex whitespace-nowrap">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={`second-${i}`} className="text-white mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
