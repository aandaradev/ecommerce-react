import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
function Home() { 
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key = {item.id} data = {item} />
          ))
        );
      }else{
        return (
          <div>Item not found ☹</div>
        );
      }
  }
  return (
    <Layout>
      <div className="flex justify-center items-center w-80 mb-4">
        <h1 className="font-medium text-xl">Select a favorite product</h1>
      </div>
      <input className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" type="text" onChange={(e) => context.setSearchByTitle(e.target.value)} placeholder="Search a product" />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home;
  