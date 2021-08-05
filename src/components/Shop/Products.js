import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummmy_prodact = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "my second book",
    description: "the second book i ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummmy_prodact.map((prodact) => (
          <ProductItem
            key={prodact.id}
            id={prodact.id}
            title={prodact.title}
            price={prodact.price}
            description={prodact.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
