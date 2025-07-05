import { ArrowUpRight, HandCoins } from "lucide-react"
import Card from "../layout/Card"



const CardProduct = () => {
    
    return(
        <Card className="flex flex-col items-start gap-4 p-5 rounded-lg">
            <HandCoins />
            <h1 className="text-2xl font-semibold text-[#18181B]">Product</h1>
            <p className="text-sm font-light text-[#4D4D56]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, aut.</p>
            <button className="px-8 py-2 text-sm text-center bg-[#ECECEE]/30 rounded-full">
                <ArrowUpRight />
            </button>
        </Card>
    )
}

export default CardProduct