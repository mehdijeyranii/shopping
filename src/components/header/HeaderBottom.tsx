import CartButton from "../cart/CartButton";
import WishlistButton from "../wishlist/WishlistButton";
import CategoryMenu from "./CategoryMenu";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <CategoryMenu />
      <div className="flex items-center gap-4">
        <WishlistButton />
        <CartButton/>
      </div>
    </div>
  );
};

export default HeaderBottom;
