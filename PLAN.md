# Planning

## Structure

- App

  - Sections
    - Header
    - Footer
  - ui
    - SingleProduct
  - images
    - products
    - general
  - data
    - allProducts

- Pages
  - Home
  - Product
  - Checkout

## State

- Data in App. Does it pass the state test?
  - Test:
    - Is it passed in from a parent via props? If so, it probably isn’t state.
    - Does it remain unchanged over time? If so, it probably isn’t state.
    - Can you compute it based on any other state or props in your component? If so, it isn’t state.
  - Data:
    - Total Quantity in Cart
    - **Product added to cart**
    - Product Info (price, descr)
    - Total Price
- Common owner:
  - **App**

## Pseudo Code

Add Cart Data

- In product
  - On click to add to cart, setCart([...cart,product])
  - If product is already in cart
    - useState to update quantity of product
- In Cart
  - let rows = products.map((product,index) => return <rowCode id={index}>)
  - <Table start> {rows} <Table end>
- To delete a product
  - Remove product function on click. removeProduct(id)
  - products = cart
  - let filtered = products.filter((product,i) => return i != id)
  - setCart(filtered)
- To calculate total
  - prices = products.map((product=> product.price \* product,quantity))
  - totalPrice = prices.reduce((acc, current=> return acc + current)

In Header

- counter = cart.length
