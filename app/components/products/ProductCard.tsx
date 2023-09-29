import { formatPrice } from "@/utils/formatPrice"
import { truncateText } from "@/utils/truncateText"
// import  {Rating}  from "@mui/material"
import Rating from '@mui/material/Rating';
import Image from "next/image"

// use client;
interface ProductProps{
    data: any
}

const ProductCard: React.FC<ProductProps> = ({data}) => {
    const productRating = 
        data.reviews.reduce((acc: number, item: any) => 
        item.rating + acc, 0) / 
        data.reviews.length;

    return (
    <div className="col-span-1 cursor-pointer border-[1px] border-slate-200 bg-slate-50 rounded p-2 transition hover:scale-105 hover:shadow-md text-center text-sm">
        <div className="flex flex-col items-center w-full gap-1">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image width={200} height={350} src={data.images[0].image} alt={data.name} className="w-full object-contain" />
            </div>
            <div className="mt-4">
                {truncateText(data.name)}
            </div>
            <div>
            <Rating name="half-rating-read" value={productRating} precision={0.5} readOnly />
            </div>
            <div>
                {data.reviews.length} reviews
            </div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    </div>
  )
}

export default ProductCard