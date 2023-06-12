import ProductDetails from '@/components/products/ProductDetails ';
import { notFound } from 'next/navigation';


async function getData(id) {
  const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
    cache: 'no-store', //  es para que no guarde en cache
  });

  if(!res.ok){
    return notFound();
  }
  return res.json();
};
export async function generateMetadata({ params }) {
    const product = await getData(params.id);
    return {
      title: product.name,
      description: product.description,
    };
  }


const ProductDetailsPage  = async ({params}) => {
  const product = await getData(params.id);
  console.log(product);
  return (
    <ProductDetails product={product} />
    
  )
}

export default ProductDetailsPage 