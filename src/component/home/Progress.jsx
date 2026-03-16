import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import folioimage from "../../assets/images/folioimage.png";

function Progress() {

  const skills = [
    { name: "Frontend Development", percent: 92 },
    { name: "React & Modern JS", percent: 88 },
    { name: "Backend Development", percent: 85 },
    { name: "Database Architecture", percent: 80 }
  ];

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0,0,0,0]);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true
    });

    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setVisible(true);
          }
        })
      },
      { threshold:0.4 }
    );

    if(sectionRef.current){
      observer.observe(sectionRef.current);
    }

  },[]);



  useEffect(()=>{

    if(visible){

      skills.forEach((skill,index)=>{

        let start = 0;

        const interval = setInterval(()=>{

          start += 1;

          setCounts(prev=>{
            const newArr=[...prev];
            newArr[index]=start;
            return newArr;
          })

          if(start >= skill.percent){
            clearInterval(interval);
          }

        },20);

      });

    }

  },[visible]);



  return (

    <section
    ref={sectionRef}
    className="w-full min-h-screen bg-[#06080f] text-white py-4 px-6 font-[Orbitron]"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

          <h2
          className="text-4xl md:text-5xl font-bold text-[#009689]"
          data-aos="fade-up"
          >
            Development Progress
          </h2>

          <p
          className="text-white mt-6 max-w-2xl mx-auto"
          data-aos="fade-up"
          >
            My development experience covers frontend interfaces,
            backend architecture and scalable database systems
            for modern web applications.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">

          <div className="space-y-10">

            {skills.slice(0,2).map((skill,index)=>(

              <div
              key={index}
              data-aos="fade-right"
              className="bg-[#0a0d16] p-6 rounded-xl border border-[#009689]/30 hover:border-[#009689] transition-all duration-300 hover:scale-[1.02]"
              >

                <div className="flex justify-between mb-3">

                  <h3 className="text-[#009689] font-semibold">
                    {skill.name}
                  </h3>

                  <span className="text-[#00c4b4] font-bold">
                    {counts[index]}%
                  </span>

                </div>

                <div className="w-full h-3 bg-[#0f1523] rounded-full overflow-hidden">

                  <div
                  className="h-full bg-gradient-to-r from-[#009689] to-[#00c4b4] transition-all  duration-[2000ms]"
                  style={{
                    width: visible ? `${skill.percent}%` : "0%"
                  }}
                  />

                </div>

              </div>

            ))}

          </div>



          {/* CENTER IMAGE */}

          <div
          className="flex justify-center"
          data-aos="zoom-in"
          >

            <div className="relative">

              {/* glow */}

              <div className="absolute inset-0 blur-3xl bg-[#009689]/20 rounded-full"></div>

              <img
              src={folioimage}
              alt="developer"
              className="relative w-[340px] md:w-[380px] rounded-full"
              />

            </div>

          </div>



          {/* RIGHT CARDS */}

          <div className="space-y-10">

            {skills.slice(2,4).map((skill,index)=>(

              <div
              key={index}
              data-aos="fade-left"
              className="bg-[#0a0d16] p-6 rounded-xl border border-[#009689]/30 hover:border-[#009689] transition-all duration-300 hover:scale-[1.02]"
              >

                <div className="flex justify-between mb-3">

                  <h3 className="text-[#009689] font-semibold">
                    {skill.name}
                  </h3>

                  <span className="text-[#00c4b4] font-bold">
                    {counts[index+2]}%
                  </span>

                </div>

                <div className="w-full h-3 bg-[#0f1523] rounded-full overflow-hidden">

                  <div
                  className="h-full bg-gradient-to-r from-[#009689] to-[#00c4b4] transition-all duration-[2000ms]"
                  style={{
                    width: visible ? `${skill.percent}%` : "0%"
                  }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Progress;