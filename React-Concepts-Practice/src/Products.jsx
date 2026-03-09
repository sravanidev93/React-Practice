import { useState, Component } from "react";
export default class Products extends Component {
    constructor() {
        super();
        this.state = ({
            categoryList: [],
            selectedCategory: null,
            products: []
        })
    }
    getCategoryList() {
        fetch("https://dummyjson.com/products/category-list").then(
            result => result.json()
        ).then(
            categories => {
                this.setState({
                    categoryList: categories
                })
                // console.log(categories);
            }
        )
    }
    getSelectedProducts(category) {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(items => {
                console.log(items),
                    this.setState({
                        products: items.products
                    })
            }
            );
    }

    handleCategorychange = (ev) => {
        this.setState({
            selectedCategory: ev.target.value
        });
        console.log(this.state.selectedCategory, ev.target.value);
    }
    componentDidMount() {
        this.getCategoryList()
    }
    componentWillUnmount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.selectedCategory != prevState.selectedCategory) {
            this.getSelectedProducts(this.state.selectedCategory);
        }
    }
    render() {
        return (<main>
            <header id="category-list">
                <label htmlFor="categoryList">Select A Category</label>
                <select id="categoryList" onChange={this.handleCategorychange}>
                    {this.state.categoryList.map(category => {
                        return <option key={category} name={category} value={category}>{category.toUpperCase()}</option>
                    })}
                </select>
            </header>
            <article className="products">
                {this.state.products.map(product => {
                    return <div className="product-item">
                        <h1 key={product.title}>{product.title}</h1>
                        <img style={{ width: 100, height: 100 }} key={product.id} src={product.images[0]} alt={product.title} />
                    </div>
                })}
            </article>
        </main>)
    }
}