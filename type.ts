// function formatPrice(amount:number) :string{
//     return `Rs ${amount.toLocaleString("en-PK")}`;

// }

// formatPrice(45000);

type Condition = "NEW" | "LIKE NEW" | "FAIR" | "GOOD";

type Listing = {

    id: number;
    title: string;
    price: number;
    condition: Condition;
    imageUrl?: string;
    readonly createdAt: Date;

};
interface Seller {

    name: string;
    email: string;

}

interface VerifiedSeller extends Seller {

    verifiedAt: Date;

}
const item: Listing = {
    id: 1,
    title: "Casio fx-991EX",
    price: 4500,
    condition: "NEW",
    createdAt: new Date(),
  };

  console.log(item)


type Product = {
    id:number;
    title:string;
    price:number;
    category:string;
    rating:number;
    thumbnail:string;
};

type ProductsResponse = {

    products: Product[];
    total:number;
    skip: number;
    limit:number;

};

async function getProducts(limit = 5): Promise<Product[]> {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    if(!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = (await res.json()) as ProductsResponse;
    return data.products;

}

const products = await getProducts();
const topRated = products
    .filter((p) => p.rating >= 4.5)
    .map(({ title, price }) => `${title} - $${price}`);
 
console.table(topRated);

// new changes

