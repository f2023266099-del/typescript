// console.log("1.start");

// setTimeout(() => console.log("3. Timer done"), 10);
// console.log("2. End");

// const wait =(ms) => new Promise ((resolve) => setTimeout(resolve,ms));

// wait(10000)

// .then(() => console.log("1 second later "))
// .catch((err) => console.error(err))
// .finally(() => console.log("done either way"));


async function loadProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=6");
  
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
  
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error("Failed to load products:", error);
      return [];
    }
  }
  console.log(loadProducts())


