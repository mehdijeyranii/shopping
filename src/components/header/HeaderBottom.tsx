import CartButton from "../cart/CartButton";
import { Navbar } from "../navigationMenu";
import WishlistButton from "../wishlist/WishlistButton";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between h-12">
      <Navbar />
      <div className="flex items-center gap-4 flex-[2] justify-end">
        <WishlistButton />
        <CartButton />
      </div>
    </div>
  );
};

export default HeaderBottom;
