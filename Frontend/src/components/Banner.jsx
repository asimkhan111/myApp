
import banner from "../../public/banner.avif";

function Banner() {
  return (
    <>
      <div className="max-w-screen2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="  order-2 md:order-1 w-full md:w-1/2 mt-12">
          <div  className="space-y-10">
          <h1 className="text-4xl font-bold space-y-5">
            Hello, welcome here to learn something{" "}
            <span className="text-yellow-300">new everyday!!</span>
          </h1>
          <p className="text-xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, maxime voluptatibus. Blanditiis earum itaque veniam
            officiis nisi quas ex vitae saepe quae, a in ab voluptatibus iste.
            Earum, illum laborum?
          </p>
          <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
          </div>
          <button className=" mt-5 btn btn-warning">Send</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className="h-96 w-120 rounded-lg object-cover object-center mt-8  ml-auto" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
