# Namaste ReactJs ✌️🚀

# Parcel

- Dev Build.
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds.
- Image optimization
- Minification
- Tree shaking - Remove unused code
- Compression
- Code splitting
- Content hashing
- Bundling
- Differential bundling - support older browser
- Diagnostics
- Error Handling
- HTTPs
- Different dev and prod bundles

# Food Ordering App

/\* My Food App structure will look like this,

1. Header
   - Logo
   - Nav Items
2. Body
   - Search Bar
   - RestaurentContainer
     - RestaurentCard
       - Image
       - Name of Res., Star Rating, Cuisines(like res. food in pizza, dabeli, bhel ....) , Delivery Time
3. Footer
   - Copyright
   - Links
   - Address
   - Contact

## Two Types of `Export/Import`

#### You can export `Multiple thing` to use - `Named` Export/Import

### 1. `Default` Export/Import

- export default Component;
- import Component from "path";

### 2. `Named` Export/Import

- export const Component;
- import {Component} from "path";

# React Hooks

### (Normal JS Utility Functions)

- `useState` - Superpowerful State Variable in React
- `useEffect`

# 2 types of `Routing` in Web Apps

### 1) Client Side Routing

- In `React-Router (<Link to='/path'></Link>)` We are `not making` any network called while we are moving to our page `because all the Component are already to be loaded` to in our app.

### 2) Server Side Routing

- `Reload` the `Whole Page`.
- `(.html)` file page click on the `(<a href='/path'></a> Tag)` that makes a `network called` and `fetches data` of `(another.html)` file page that render the UI and `Refresh the whole page`.
