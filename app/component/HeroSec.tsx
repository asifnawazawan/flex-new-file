import Link from "next/link"
export default function herosec(){
    return(
        <div className="bg-black">
        <div className="my-10 mx-32 p-10 border-2 border-gray-400">
        <h1 className="text-4xl font-semibold text-center py-4">Sell Your Car On PakWheels and Get The Best Price</h1>
        <div className="mx-auto flex border-gray-400 border-r-1">
         <div className="text-xl mx-auto flex flex-col gap-5">
       <div className="length {100}, width {100}">
       <img src="/14 series.PNG" alt="" />
        </div> 
        <p className="text-white font-bold text-5xl"> Upto 10% Off Voucher</p>
        
        <button className="border-red-800 bg-black px-4 py-2 rounded-lg text-white w-48"><Link href="/detail">Shop Now</Link></button>
        </div>
        
        <div className="mx-auto border-red-600 border-r-2"></div>
        <div className="items-center justify-center text-xl flex flex-col gap-5">
              <img src="https://i.guim.co.uk/img/media/a9ed586e7111048c8d4f0a85ce2ed7986da43eac/179_0_2537_1523/master/2537.jpg?width=445&quality=85&auto=format&fit=max&s=06ea66ff8188274283e832983d9c342a" alt="" />
        </div>
        </div>
        </div>
        </div>
    )
}
