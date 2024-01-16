import Card from "./Card";

export default function Checkout() {
  return (
    <div className="w-screen h-screen bg-zinc-50 flex justify-center items-center">
      <div className="h-[664px] w-[1024px] t-[180px] b-[407px]  rounded-3xl flex absolute ">
        <div className="w-[684px] rounded-tl-3xl rounded-bl-3xl  bg-[#FFFFFF] flex justify-center">
          <h2 className="text-black">hello</h2>
        </div>
        <div className="bg-[#EEEEEE] rounded-tr-3xl rounded-br-3xl w-[385px] flex justify-center relative ">
          <div className="h-[420px] w-[360px] mt-16 rounded-md m-3 absolute bg-white flex  flex-col">
            <div className="h-[48px] w-[360px] rounded-tl-md rounded-tr-md absolute bg-white  ">
              <h2 className="text-Inter text-black font-medium pl-12 pt-2.5">
                Order Summary
              </h2>

              {/* need to be changed */}
            </div>
            <div className="h-[287px] bg-white pt-[56px] ml-4 w-[328px] overflow-auto">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="h-[54px] pt-4 bg-white ml-4 w-[328px]">
              <div className="flex justify-between">
                <h2 className="text-black text-Inter font-normal">Subtotal</h2>
                <h2 className="text-black text-Inter font-medium">Rs 1280</h2>
              </div>
              <div className="flex pt-2 justify-between">
                <h2 className="text-black text-Inter font-normal">Shipping</h2>
                <h2 className="text-black text-Inter font-medium">
                  To be Calculated
                </h2>
              </div>
            </div>
            <div className="h-[24px] pt-10 ml-4  w-[328px]">
              <div className="flex  justify-between text-Inter font-semibold">
                <h2 className="text-black">To Pay</h2>
                <h2 className="text-black">Rs 1280</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
