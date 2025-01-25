import { Header } from "../components/header";

// const CartContent = () => (
//   <div>
//     <p>محصولات سبد خرید شما:</p>
//     <ul>
//       <li>محصول ۱</li>
//       <li>محصول ۲</li>
//     </ul>
//   </div>
// );

// const FavoritesContent = () => (
//   <div>
//     <p>محصولات مورد علاقه شما:</p>
//     <ul>
//       <li>محصول A</li>
//       <li>محصول B</li>
//     </ul>
//   </div>
// );

const HomePage = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col gap-12">
        <Header/>
      </div>
    </div>
  );
};

export default HomePage;
