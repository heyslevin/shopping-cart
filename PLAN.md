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

- Layout the Home
  - Navigation
  - Hero Text
    - Then Hero Image
  - Single Product Component
    - Image
    - Product Type
    - Product Name
    - Price
  - Footer
