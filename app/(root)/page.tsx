import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

const Homepage = async () => {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="Products" limit={1} />
    </>
  );
};

export default Homepage;
