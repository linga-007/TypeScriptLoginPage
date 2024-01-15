import Card from "./Card";

export default function Checkout() {
  return (
    <div className="w-screen h-screen bg-zinc-50 flex justify-center items-center">
      <div className="h-[664px] w-[1024px] t-[180px] b-[407px]   flex absolute ">
        <div className="w-[684px] rounded-tl-md rounded-bl-md bg-[#FFFFFF] flex justify-center">
          <h2 className="text-black">hello</h2>
        </div>
        <div className="bg-black rounded-tr-md rounded-br-md w-[385px] flex justify-center relative ">
          <h2 className="">X</h2>
          <div className="h-[290px] w-[360px] mt-16 absolute bg-white  ">
            <div className="h-[48px] w-[360px]  absolute bg-slate-500  ">
              <h2 className="text-Inter pl-12 pt-2.5">Order Summary</h2>
              <Card/>
              {/* need to be changed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
