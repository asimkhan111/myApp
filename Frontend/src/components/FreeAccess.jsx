
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";

function FreeAccess() {
  const [app,setApp] = useState([])
  useEffect(() =>{
  const getApp =async() =>{
    try {
     const res =  await axios.get("http://localhost:3000/app")
     
     const data =(res.data.filter((data) => data.category === "Free"));
     console.log(data)
     setApp(data);
    } catch (error) {
      console.log(error)
    }
  }
  getApp();
  },[])
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free coding Tools</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, maxime voluptatibus. Blanditiis earum itaque veniam
            officiis nisi quas ex vitae saepe quae, a in ab voluptatibus iste.
            Earum, illum laborum?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {app.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeAccess;
