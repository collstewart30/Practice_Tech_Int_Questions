// Create a class that contains a list of products. 
// It should have a method to add a new product to the list of products
// and a method to return the lowest priced product of a certain type.

// Each product will have the following properties:
//     Name
//     Price
//     Type

// The type can only be one of the follow:
//     Educational
//     Business
//     Entertainment


enum ProductType
{
    Educational,
    Business,
    Entertainment
}

public class Product
{
    public string Name { get; set; }
    public float Price { get; set; }
    public ProductType Type { get; set; }
}

public class ProductList
{
    private List<Product> products { get; set; }

    public void AddProduct(Product newProduct)
    {
        products.Add(newProduct);
    }

    public Product GetLowestPricedProduct(ProductType type)
    {
        Product lowestPriceProduct;
        foreach (Product product in products)
        {
            if (product.Type == type)
            {
                if (lowestPriceProduct == null || product.Price < lowestPriceProduct.Price)
                {
                    lowestPriceProduct = product;
                }
            }
        }

        return product;
    }
}