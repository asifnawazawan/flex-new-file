import Image from 'next/image';
import { Heart } from "lucide-react";

const FigmaToCode = () => {
    return(
    <div className='flex justify-center gap-20'>
        <div className="bg-[#F6F6F6] w-[268px] h-[432px] rounded-lg">
            <div className="flex justify-end py-5 m-4">
            <Heart />
            </div>
                <div className="flex justify-center items-center">
                <img src="/tshirt.png" alt="productone" width={200} height={200}/>
                </div>
                <div>
                    <h3 className="text-center justify-center font-bold m-4">A Charming T-Shirt</h3>
                </div>
                <div>
                    <h4 className="text-center justify-center ">Price 1000</h4>
                </div>  
        </div>
        <div className="bg-[#F6F6F6] w-[268px] h-[432px] rounded-lg">
            <div className="flex justify-end py-5 m-4">
            <Heart />
            </div>
                <div className="flex justify-center items-center">
                <img src="/prod2.jpg" alt="productone" width={300} height={200}/>
                </div>
                <div>
                    <h3 className="text-center justify-center font-bold m-4">A Hand Bag</h3>
                </div>
                <div>
                    <h4 className="text-center justify-center ">Price 4000</h4>
                </div>  
        </div>
        <div className="bg-[#F6F6F6] w-[268px] h-[432px] rounded-lg">
            <div className="flex justify-end py-5 m-4">
            <Heart />
            </div>
                <div className="flex justify-center items-center">
                <img src="/prod3.jpg" alt="productone" width={200} height={200}/>
                </div>
                <div>
                    <h3 className="text-center justify-center font-bold m-4">A Machine theresher</h3>
                </div>
                <div>
                    <h4 className="text-center justify-center ">Price 33000</h4>
                </div>  
        </div>
        <div className="bg-[#F6F6F6] w-[268px] h-[432px] rounded-lg">
            <div className="flex justify-end py-5 m-4">
            <Heart />
            </div>
                <div className="flex justify-center items-center">
                <img src="/prod4.jpg" alt="productone" width={200} height={200}/>
                </div>
                <div>
                    <h3 className="text-center justify-center font-bold m-4">Product Empty Bottles</h3>
                </div>
                <div>
                    <h4 className="text-center justify-center ">Price 4500</h4>
                </div>  
        </div>
        <div className="bg-[#F6F6F6] w-[268px] h-[432px] rounded-lg">
            <div className="flex justify-end py-5 m-4">
            <Heart />
            </div>
                <div className="flex justify-center items-center">
                <img src="/prod5.jpg" alt="productone" width={200} height={200}/>
                </div>
                <div>
                    <h3 className="text-center justify-center font-bold m-4">Juice Bottle</h3>
                </div>
                <div>
                    <h4 className="text-center justify-center ">Price 500</h4>
                </div>  
        </div>
        <div className="bg-[#F6F6F6] w-[268px] h-[432px] rounded-lg">
            <div className="flex justify-end py-5 m-4">
            <Heart />
            </div>
                <div className="flex justify-center items-center">
                <img src="/prod6.jpg" alt="productone" width={200} height={200}/>
                </div>
                <div>
                    <h3 className="text-center justify-center font-bold m-4">A bike board ship</h3>
                </div>
                <div>
                    <h4 className="text-center justify-center ">Price 100,000</h4>
                </div>  
        </div>
    </div>
        
        

    )
};
export default FigmaToCode;