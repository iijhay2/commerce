import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export async function AllProducts() {
  const products = await getCollectionProducts({ collection: 'hidden-all-available' });
  return (
    <>
      <section className="mx-auto px-4 pb-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-5 text-2xl font-bold uppercase tracking-wider">ALL Products</h1>
        </div>

        <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <ProductGridItems products={products} />
        </Grid>
      </section>
    </>
  );
}
