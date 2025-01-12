export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/products"); 
    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  }