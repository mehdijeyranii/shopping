import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/product";

const CartDropdown = ({ items }: { items: ProductType[] }) => {
  if (items.length === 0) {
    return <p className="text-zinc-500">سبد خرید خالی است</p>;
  }
  return (
    <div className="w-[448px] max-h-[448px] bg-zinc-50 border border-zinc-300 absolute left-0 top-9   overflow-y-auto rounded-md flex flex-col divide-y divide-zinc-300 shadow-lg">
      <div className="py-4 px-2 flex flex-col justify-center items-center gap-2">
      <h3 className="text-xl font-bold">سبد خرید</h3>
      <span className="text-xs">4 محصول</span>
      </div>
      <div className="w-full flex flex-col items-start justify-start divide-y divide-zinc-300 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 p-2 w-full hover:bg-zinc-100"
          >
            <div className="size-10 grid place-content-center bg-zinc-200 rounded-md">
              <img
                className="size-7 object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
            <Link to="/" className="text-xs font-semibold flex-[4]">
              {item.name}
            </Link>
            <div className="bg-zinc-50 p-1 flex rounded flex-1 border border-zinc-300">
              <button className="bg-zinc-300 size-6 rounded-s hover:bg-green-600 hover:text-zinc-50">+</button>
              <span className="size-6 text-xs grid place-content-center">
                {item.quantity}
              </span>
              <button className="bg-zinc-300 size-6 rounded-e hover:bg-rose-500 hover:text-zinc-50">-</button>
            </div>
            <span className="text-xs block text-center flex-[3]">
              {item.price}
              <strong className="mr-1">تومان</strong>
            </span>
            <button className="bg-transparent hover:bg-zinc-200 p-1 rounded-md">
              <Trash2 size={14} className="text-rose-500" />
            </button>
          </div>
        ))}
      </div>
      <div className="p-2">
        <div className="flex items-center justify-start gap-2">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="w-full border border-zinc-300 focus:outline-none focus:border-zinc-500 p-2
             text-sm rounded-md"
          />
          <button className="py-2 px-4 bg-zinc-200 rounded-md text-sm hover:bg-zinc-300">
            اعمال
          </button>
        </div>
        <span className="text-xs text-zinc-500">
          تخفیف ۲۰٪ برای خریدهای بالای ۵۰۰ هزار تومان
        </span>
      </div>
      <div className="p-2">
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span>جمع کل:</span>
            <span>
              <strong className="ml-1">45/000/000</strong>تومان
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>تخفیف (20%):</span>
            <span className="text-green-600">1/340/000-</span>
          </div>
          <div className="flex justify-between items-center">
            <span>مالیات:</span>
            <span className="text-rose-600">1/503/000+</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold">
            <span>مبلغ نهایی:</span>
            <span className="font-normal text-sm">
              <strong className="ml-1">42/912/000</strong>تومان
            </span>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 text-sm">
            ادامه به پرداخت
          </button>
          <button className="w-full bg-transparent border border-zinc-300 py-2 rounded-lg mt-2 hover:bg-zinc-300 text-sm">
            ادامه خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
