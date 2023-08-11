const product = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function SearchBar() {
    return(
        <div className="search-bar-container">
            <input type="text" placeholder="Search..."/>
            <label>
                <input className="search-field" type="checkbox"  />
                Only show products in stocked
            </label>          
        </div>
    );
};

function ProductRow({ product }) {
    return(
        <tr class="product-row-container">
            <td>
                { product.name }
            </td>
            <td>
                { product.price }
            </td>
        </tr>
    );
};

function ProductCategoryRow({ category }) {
    return(
        <tr>
            <td colSpan={2} class="product-category-row">
            <span>{ category }</span>
            </td>
        </tr>       
    );
};

function ProductTable({ products }) {
    let lastCategory;
    const rows = [];
    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={ product.category } />);
            lastCategory = product.category;
        }
        rows.push(
        <ProductRow
            product={product}
            key={product.name} />
        );
        
    });

    return(
        <table>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            {
                rows.map((row) => {
                    return row;
                })
            }
        </table>
    );
}


export default function FilterableTable() {
    return(
        <div className="filterable-product-table">
            <h1>Filterable Table</h1>
            <SearchBar />
            <ProductTable products={product}/>   
        </div>
    );

}