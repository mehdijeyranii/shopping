import CartButton from "./CartButton";
import CategoryMenu from "./CategoryMenu";
import WishlistButton from "./WishlistButton";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <CategoryMenu />
      <div className="flex items-center gap-4">
        <WishlistButton />
        <CartButton />
      </div>
    </div>
  );
};

export default HeaderBottom;
