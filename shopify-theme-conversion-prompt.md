# Shopify Theme Conversion Prompt: Sierra Style / California 89 Theme

## Overview
Convert the design from https://sierra-style.preview.emergentagent.com/ into a fully functional Shopify theme with all JavaScript interactions, CSS styling, animations, and working sections. The theme should maintain the rustic, modern mountain aesthetic with earthy tones, clean typography, and smooth user experience.

---

## Design Analysis & Requirements

### Color Palette
- **Primary Colors:**
  - Dark Gray (Top Bar): `#2a2a2a` or similar dark gray
  - White: `#ffffff` (text, navigation backgrounds)
  - Orange-Brown (CTA Buttons): `#d97706` or `#b45309` (warm terracotta/orange)
  - Earthy Browns: Various shades for wood/stone textures
  - Light Gray: For backgrounds and subtle elements

- **Typography:**
  - Primary Font: Clean, modern sans-serif (suggest: Inter, Poppins, or similar)
  - Bold weights for headings
  - Regular weights for body text
  - Font sizes: Responsive scaling from mobile to desktop

### Layout Structure

#### 1. **Top Promotional Bar**
- **Location:** Above main header, full width
- **Content:** "Free shipping on orders over $75 | Shop our 3 locations in Truckee & Tahoe City"
- **Styling:**
  - Dark gray background (`#2a2a2a` or similar)
  - White text (`#ffffff`)
  - Centered text alignment
  - Narrow height (compact, not too tall)
  - Clean typography, readable font size
- **Behavior:** 
  - Dismissible (optional cookie-based)
  - Sticky at top (remains visible on scroll, optional)
  - Can be hidden on mobile to save space (optional)

#### 2. **Main Header/Navigation**
- **Desktop Layout:**
  - **Left:** Brand logo "CALIFORNIA 89" (bold, dark gray sans-serif) with subtitle "TRUCKEE • LAKE TAHOE" (smaller font, lighter gray)
  - **Center:** Main navigation links (horizontal, evenly spaced)
  - **Right:** Utility icons - Search (magnifying glass), Account (person silhouette), Shopping cart (bag icon) with badge
- **Mobile Layout:**
  - Hamburger menu on left
  - Logo centered
  - Search, Account, Cart icons on right
- **Navigation Menu:**
  - **Links:** SHOP ALL, APPAREL, CA89 HOME, DRINKWARE, ABOUT, BLOG, STORES
  - **Styling:** Uppercase text, dark gray color, clean sans-serif font
  - **Spacing:** Evenly distributed across center of header
  - **Hover States:** Color change or underline effect
  - **Active State:** Orange underline for current page (as seen in shop page)
  - Dropdown menus for categories (if applicable)
- **Header Styling:**
  - White background (`#ffffff`)
  - Clean, minimal design
  - Good horizontal spacing between elements
  - Subtle border or shadow at bottom (optional)
  - Logo and navigation links in dark gray (`#2a2a2a` or similar)
- **Search Functionality:**
  - Expandable search bar
  - Auto-complete suggestions
  - Search results overlay/modal
  - Search icon: Dark gray, clickable
- **Cart:**
  - Slide-out cart drawer
  - Product thumbnails, quantities, prices
  - Update/remove items
  - Checkout button
  - Cart icon: Dark gray with badge showing item count
- **Account Icon:**
  - Person silhouette icon
  - Dark gray color
  - Links to account/login page
- **Sticky Header:** Header should stick to top on scroll

#### 3. **Hero Section / Image Slider**
- **Structure:**
  - Full-width image carousel with 3 slides minimum
  - Full viewport height or large hero section
  - Navigation arrows (left/right) - circular, semi-transparent gray buttons with subtle background
  - Pagination dots at bottom center (optional, may be hidden)
  - Text overlay positioned on left side of each slide
- **Slide Content:**
  - **Slide 1:** "Life is Fine on 89" - "Everyday apparel inspired by the backroads of California" - "Shop Apparel" CTA
  - **Slide 2:** "Modern Mountain Living" - "Home decor & lifestyle goods for your mountain retreat" - "Shop CA89 Home" CTA
  - **Slide 3:** "Crisp Days, Cozy Spaces" - "Refresh your home with our newest collections" - "View Collection" CTA
- **Background Images:**
  - High-quality, atmospheric images
  - Slide 2 example: Rustic living room with stone fireplace, wooden log walls, cozy interior design
  - Images should convey the mountain/rustic aesthetic
  - Full coverage, no gaps or white space
- **Text Overlay Styling:**
  - **Position:** Left side of hero, vertically centered
  - **Heading:** Large, bold, white text (semi-transparent or solid white)
  - **Description:** Smaller, regular weight, white text below heading
  - **CTA Button:** Orange-brown button (`#d97706` or similar) with white text and right arrow icon
  - **Text Container:** May have subtle dark overlay or semi-transparent background for readability
  - **Typography:** Clean, modern sans-serif matching brand
  - **Spacing:** Good vertical spacing between heading, description, and CTA
- **Navigation Arrows:**
  - **Position:** Left and right edges of hero section
  - **Styling:** Circular buttons with semi-transparent gray background
  - **Size:** Medium-sized, easily clickable
  - **Icons:** Left-pointing and right-pointing arrows (white or dark gray)
  - **Hover:** Slightly more opaque or darker on hover
  - **Visibility:** Always visible or fade in on hover
- **Animations:**
  - Smooth slide transitions (fade or slide effect, 300-500ms)
  - Auto-play with pause on hover
  - Keyboard navigation (arrow keys)
  - Touch/swipe support for mobile
  - Text overlay fade-in animation when slide changes
- **Responsive:**
  - Full height on desktop (viewport height or large section)
  - Adjusted height on mobile (maintains aspect ratio)
  - Text scaling for mobile devices
  - Navigation arrows remain functional on all devices
  - Text overlay may stack vertically on mobile

#### 4. **Feature Icons Section**
- **Location:** Directly below hero section
- **Layout:**
  - 4 feature icons in a row (desktop)
  - 2x2 grid on tablet, stacked on mobile
  - White background
- **Each Icon Card Contains:**
  - Circular icon (truck, leaf, return arrow, headset)
  - Feature title (bold): "Free Shipping", "Made in CA89", "Easy Returns", "Customer Support"
  - Feature description: "On orders over $75", "Locally sourced goods", "30-day guarantee", "We're here to help"
- **Styling:**
  - Clean, minimal design
  - Icons: Medium size, dark gray or orange accent
  - Text: Dark gray, good spacing
  - Consistent card sizing
  - Good horizontal spacing between items

#### 5. **Featured Products Grid**
- **Section Title:** "Featured Products" (heading above grid)
- **Background:** Light beige or off-white background
- **Layout:**
  - Grid of 8 products (2 rows, 4 columns on desktop)
  - Responsive: 2 columns on tablet, 1 column on mobile
- **Product Card Features:**
  - Product image with hover effects
  - Category badge (apparel, drinkware, accessories)
  - Product title (linked to product page)
  - Price display
  - Hover overlay with:
    - Wishlist button (heart icon)
    - Quick view button (eye icon)
    - Add to Cart button (prominent)
  - Image zoom on hover (optional)
- **Styling:**
  - Clean white cards with subtle shadows
  - Smooth hover transitions
  - Product images with aspect ratio maintained
- **"View All Products" Button:**
  - Centered below grid
  - White button with thin border (outlined style)
  - Dark gray or black text
  - Hover: Background fill or color change

#### 6. **Shop by Category Section**
- **Section Title:** "Shop by Category" (heading above grid)
- **Layout:**
  - 4 large rectangular category tiles in a row (desktop)
  - 2x2 grid on tablet, stacked on mobile
  - White or light background
- **Each Category Tile Contains:**
  - Large background image (category-specific, full coverage)
  - Category name overlay (large, bold, white text)
  - "Shop Now" CTA button (orange-brown, white text)
  - Text and button positioned on image (centered or left-aligned)
- **Categories:**
  1. **Apparel** - Image: Person on mountain peak, arms outstretched
  2. **Home Decor** - Image: Cozy room with large windows overlooking forest
  3. **Drinkware** - Image: Gray background with drinkware products
  4. **Kitchen & Bar** - Image: Couple in kitchen setting
- **Styling:**
  - Large, prominent tiles
  - Text overlay with good contrast for readability
  - Hover: Image zoom or overlay effect
  - Smooth transitions

#### 7. **Content Sections**

##### A. "It's Hoodie Season" Section
- **Layout:** Two-column (desktop), stacked (mobile)
- **Background:** White or light background
- **Left:** 
  - Large product/hero image
  - "Best Seller" badge in top-left corner (orange badge)
- **Right:**
  - Heading: "It's Hoodie Season"
  - Descriptive text paragraph
  - Price display: "$68.00" (or dynamic from product)
  - Quantity selector (number input with +/- buttons)
  - "Add to Cart" button (orange-brown, white text)
  - Product details and specifications (optional)
- **Styling:** 
  - Clean, spacious layout with good typography
  - Product-focused design
  - Prominent CTA button
  - Quantity selector: Clean, minimal design

##### B. "Modern Mountain Living" Section (Content Section 1)
- **Layout:** Two-column (desktop), stacked (mobile)
- **Left:**
  - Heading: "Modern Mountain Living"
  - Descriptive text paragraph
  - Bulleted list:
    - Explore & Shop
    - Goods & More
    - CA89 Home
    - Curated Collections
  - "Browse Now" CTA button (orange-brown)
- **Right:** 
  - Large image (e.g., sunroom with large windows, dark furniture, wooden floors)
- **Styling:** Clean, spacious layout with good typography

##### C. "Modern Mountain Living" Section (Content Section 2 - Product Grid)
- **Layout:** Grid layout (3 columns on desktop, responsive)
- **Top Row:** Category links with images:
  - "Furniture" - Image of living room
  - "Art & Wall Decor" - Image of modern room with high ceiling
  - "Vases & Bowls" - Image of ceramic vases
- **Bottom Row:** Featured products (4 items in grid):
  - Product cards with:
    - Product image
    - Badge ("New", "Best Seller") in top-left corner
    - Product title (e.g., "CA89 Dining Chair", "CA89 Round Table")
    - Price (e.g., "$345.00", "$249.00")
    - Hover effects
- **Styling:** 
  - Product cards match featured products styling
  - Badges: Orange, top-left positioning
  - Clean grid layout

##### D. "Explore CA89 Home" Section
- **Layout:** Multi-column grid
- **Top Row:** Large featured image with "Explore CA89 Home" overlay
- **Middle Row:** Category links with product counts:
  - "36 Products Furniture Shop Now"
  - "98 Products Art & Wall Decor Shop Now"
  - "39 Products Vases & Bowls Shop Now"
- **Bottom Row:** Featured products (4 items):
  - Product image, badge (Best Seller/Sale/New), title, price
  - Hover effects similar to product grid

##### E. Customer Testimonials Section
- **Section Title:** "What Our Customers Say"
- **Layout:**
  - 4 customer reviews in a row (desktop)
  - 2x2 grid on tablet, stacked on mobile
  - White or light background
- **Each Review Card Contains:**
  - 5 orange stars (rating display)
  - Review text (customer feedback)
  - Customer name and location (e.g., "Hannah H. - Truckee, CA")
  - "Verified Buyer" badge (small green badge)
- **Styling:**
  - Clean card design
  - Star rating: Orange color (`#d97706`)
  - Verified badge: Green color, small
  - Good spacing and typography
  - Subtle shadows or borders

##### F. Blog Posts Section
- **Section Title:** "CA89 Blog" or similar
- **Layout:** Two-column layout (desktop), stacked (mobile)
- **Left:** 
  - Large featured blog post
  - Featured image (e.g., mountain landscape with lake)
  - Title: "Fall Riding in Tahoe: Crisp Air, Colorful Trails & Community"
  - Date and excerpt (optional)
- **Right:**
  - Two smaller blog post previews stacked vertically:
    - "Summer Days Are Back in Great" with mountain image
    - "Earth Day: How We Can All Help" with forest image
  - Each with image, title, date
- **Header:** "View All Blog" link/button (top right)
- **Styling:** 
  - Clean cards with images and typography
  - Large featured post prominent
  - Smaller previews on right
  - Good image quality and aspect ratios

##### G. "Family Business, Mountain Roots" Section
- **Layout:** Two-column (desktop), stacked (mobile)
- **Left:**
  - Heading: "Family Business, Mountain Roots"
  - Descriptive paragraph about company origins and mission
  - "Learn More About Us" CTA button (optional)
- **Right:**
  - "Visit Our Stores" heading
  - Store locations list:
    - **Store 1:** Address, phone number, hours
    - **Store 2:** Address, phone number, hours
    - (Additional stores as needed)
  - Each store with:
    - Store name/location
    - Full address
    - Phone number
    - Operating hours
- **Styling:** 
  - Clean, readable typography
  - Good spacing
  - Store information clearly formatted

##### H. Instagram Feed Section
- **Background:** Dark gray section (`#2a2a2a` or similar)
- **Section Title:** "Follow Us on Instagram" (white text)
- **Layout:** 
  - 6-image grid (3 columns x 2 rows on desktop)
  - Responsive: 2 columns on tablet, 1 column on mobile
- **Features:**
  - Instagram post images (mountains, interiors, landscapes)
  - Hover effects (optional overlay or zoom)
  - Links to Instagram posts
  - Images maintain aspect ratio
- **CTA Button:**
  - "Follow Us" or "Follow @cahwy89" button below grid
  - Orange-brown or white button
  - Links to Instagram profile
- **Styling:**
  - Dark background with white text
  - Clean grid layout
  - Good spacing between images
- **Integration:** Use Shopify's Instagram app or custom API integration

#### 7. **Collection/Shop Page**
- **Banner Section:**
  - **Layout:** Full-width dark gray banner below header
  - **Content:**
    - **Heading:** Large, bold, white text - Collection name (e.g., "Apparel", "All Products")
    - **Subtitle:** Smaller white text directly below heading - Descriptive text (e.g., "Discover our collection of apparel")
    - Text aligned to left side of banner
  - **Styling:** 
    - Dark gray background (`#2a2a2a` or similar)
    - White text (`#ffffff`)
    - Good vertical spacing between heading and subtitle
    - Left-aligned text (not centered)
    - Full width, consistent height

- **Filter & Sort Bar:**
  - **Location:** Above product grid, spans full width
  - **Styling:** Light gray or white background, clean typography
  - **Left Side:**
    - "Filters" button with filter/funnel icon - opens filter sidebar (mobile/tablet)
    - Product count display (e.g., "4 products", "12 products")
    - Text styling: Regular weight, readable size
    - Good spacing between filter button and product count
  - **Right Side:**
    - Sort dropdown: "Featured" (default), with options:
      - Featured
      - Price: Low to High
      - Price: High to Low
      - Newest
      - Best Selling
      - Alphabetically: A-Z
      - Alphabetically: Z-A
    - Layout toggle buttons:
      - Grid view icon (default, highlighted when active)
      - List view icon
      - Active state: Dark gray background, white icon
      - Inactive state: Light gray/transparent background
  - **Styling:** Light gray background, clean typography, good spacing between elements

- **Filter Sidebar (Left Panel):**
  - **Layout:** Fixed or sticky sidebar on left (desktop), slide-out drawer (mobile)
  - **Header:**
    - "Filters" heading (bold, left-aligned)
    - "Clear All" link/button (orange color `#d97706`, right-aligned, clickable)
    - Header row with good spacing between title and clear button
  - **Filter Sections:**
    - **Category Filter:**
      - Heading: "Category" (bold or semi-bold)
      - Checkbox list (vertical list):
        - Apparel
        - Drinkware
        - Accessories
        - Kitchen
        - Vases
        - Blankets
        - (Additional categories as needed)
      - Each checkbox with label (clickable label)
      - Checked state: Orange accent color (`#d97706`) for checkbox
      - Unchecked state: Light gray or default checkbox styling
      - Good vertical spacing between checkbox items
      - Labels are clickable (entire row is clickable)
    - **Price Filter:** (optional)
      - Price range slider or input fields
      - Min/Max price inputs
    - **Other Filters:** (optional)
      - Size filter
      - Color filter
      - Brand filter
      - Availability filter
  - **Styling:**
    - White background panel
    - Clean typography
    - Checkboxes styled consistently
    - Collapsible sections (optional)
    - Smooth transitions
  - **Mobile Behavior:**
    - Hidden by default
    - Opens as slide-out drawer from left
    - Backdrop overlay
    - Close button/icon

- **Product Grid/List Area:**
  - **Grid View (Default):**
    - 3 columns on desktop
    - 2 columns on tablet
    - 1 column on mobile
    - Product cards match homepage product card design
    - Product badges:
      - "Best Seller" badge (orange, top-left corner)
      - "New" badge (orange, top-left corner)
      - "Popular" badge (orange, top-left corner)
      - "Sale" badge (optional, orange, top-left corner)
    - Product card features:
      - Product image
      - Badge overlay (if applicable)
      - Category tag (small text above title)
      - Product title (linked)
      - Price display
      - Hover effects: Quick view, wishlist, add to cart buttons
  - **List View:**
    - Single column layout
    - Product image on left (smaller)
    - Product details on right:
      - Category tag
      - Product title
      - Price
      - Short description (optional)
      - Quick actions (add to cart, wishlist)
    - Horizontal layout with good spacing
  - **Styling:**
    - Consistent spacing between products
    - Responsive grid using CSS Grid or Flexbox
    - Smooth transitions between grid/list views
    - Product images maintain aspect ratio

- **Pagination:**
  - **Location:** Below product grid
  - **Design:** Clean pagination controls
  - **Features:**
    - Previous/Next buttons
    - Page numbers
    - "Load More" button option (AJAX)
    - Infinite scroll option (optional)
  - **Styling:** Minimal design, consistent with theme

- **Empty State:**
  - **When:** No products match filters
  - **Content:**
    - Icon or illustration
    - Message: "No products found"
    - "Clear filters" button/link
    - "View all products" link
  - **Styling:** Centered, friendly, helpful

- **Loading State:**
  - **During:** Filter changes, sort changes, pagination
  - **Design:** Skeleton screens or loading spinner
  - **Behavior:** Smooth transitions, no jarring content shifts

- **URL Parameters:**
  - **Filter State:** Preserve filter selections in URL
  - **Shareable:** Filtered views shareable via URL
  - **Browser History:** Back/forward buttons work correctly
  - **Example:** `/collections/all?category=apparel&sort=price-ascending`

#### 8. **Footer**
- **Structure:**
  - **Top Section:** Email newsletter signup
    - Heading: "Join the 89 Community"
    - Input field: "Enter your email"
    - Subscribe button (orange-brown, white text)
    - Dark gray background (`#2a2a2a` or similar)
    - White text
    - Styled consistently with theme
  - **Main Footer:** 3-column layout (desktop), stacked (mobile)
    - **Column 1:** Company Info
      - "CALIFORNIA 89" heading
      - Description text
      - Social media icons (Instagram, Facebook)
    - **Column 2:** Shop Links
      - "Shop" heading
      - Links: All Products, Apparel, Home Decor, Drinkware, New Arrivals
    - **Column 3:** Company Links
      - "Company" heading
      - Links: Our Story, Blog, Store Locations, Contact Us, FAQ
  - **Footer Enhancement (About Page):**
    - **4-column layout** on About page (desktop)
    - **Column 4 (Visit Us):** Store addresses and hours
      - "California 89 - Truckee" address and hours
      - "CA89 Home - Truckee" address and hours
      - Daily hours display (e.g., "Daily 10am - 6pm")
  - **Bottom Bar:**
    - Copyright: "© 2026 California 89. All rights reserved."
    - Legal links: Privacy Policy, Terms of Service, Shipping & Returns
- **Styling:** Dark background, white text, good spacing
- **Footer Enhancement (About Page):**
  - **Column 4 (Visit Us):** Store addresses and hours
    - "California 89 - Truckee" address and hours
    - "CA89 Home - Truckee" address and hours
    - Daily hours display (e.g., "Daily 10am - 6pm")

---

## About Page Template

### About Page Structure:

#### 1. **Hero Section ("Our Story")**
- **Layout:** Full-width hero section
- **Background Image:** 
  - Large, atmospheric image (e.g., snow-capped mountains with pine trees, clear blue sky)
  - Full coverage, high quality
- **Text Overlay:**
  - **Position:** Left side, vertically centered
  - **Heading:** "Our Story" (large, bold, dark gray sans-serif)
  - **Subtitle:** "So much more than a Sierra Highway, it's a way of life!" (smaller, regular weight, dark gray)
  - Text positioned on left, not centered
- **Styling:**
  - Dark gray text for good contrast
  - Large, prominent heading
  - Good vertical spacing between heading and subtitle
  - Full viewport height or large section

#### 2. **"Family Business, Mountain Roots" Section**
- **Layout:** Two-column (desktop), stacked (mobile)
- **Background:** White background
- **Left Side (Text Content):**
  - **Small Heading:** "SINCE 2012" (light gray, small font, uppercase)
  - **Main Heading:** "Family Business, Mountain Roots" (large, bold, dark gray)
  - **Content:** Two paragraphs of descriptive text
    - Explains company origin in Truckee (2012)
    - Growth into family-owned business
    - Inspiration from Sierra Nevada
    - Mission and values
  - **Styling:** Dark gray text, readable font size, good line spacing
- **Right Side (Image):**
  - Large rectangular image
  - Cozy interior with large windows
  - Overlooking snowy, tree-filled landscape
  - Dark wooden floors, dark plaid sofa, warm lighting
  - High-quality, atmospheric image
- **Styling:**
  - Clean, spacious layout
  - Good balance between text and image
  - Responsive image sizing

#### 3. **"What We Stand For" Section**
- **Layout:** Centered content section
- **Background:** White background
- **Section Header:**
  - **Heading:** "What We Stand For" (centered, bold, dark gray, large)
  - Good spacing above content
- **Feature Cards:**
  - **Layout:** 4 cards in a row (desktop)
  - **Responsive:** 2x2 grid on tablet, stacked on mobile
  - **Each Card Contains:**
    - **Icon:** Circular icon with orange outline
      - Mountain icon
      - Heart icon
      - Person icon
      - Leaf icon
    - **Title:** Bold, dark gray (e.g., "Mountain Living", "Family First")
    - **Description:** Dark gray descriptive text below title
      - Examples: "Inspired by the Sierra Nevada lifestyle"
      - Short, impactful statements
  - **Card Styling:**
    - Light gray border
    - White background
    - Good padding
    - Consistent card sizing
    - Subtle shadows or borders
    - Good spacing between cards
- **Styling:**
  - Clean, modern card design
  - Centered layout
  - Good horizontal spacing

#### 4. **"Our Stores" Section**
- **Layout:** Centered content section
- **Background:** White background
- **Section Header:**
  - **Small Heading:** "VISIT US" (light gray, small font, uppercase, centered)
  - **Main Heading:** "Our Stores" (large, bold, dark gray, centered)
  - **Subtitle:** "Stop by one of our three locations in Truckee and Tahoe City." (centered, dark gray)
  - Good vertical spacing
- **Store Location Cards:**
  - **Layout:** 3 cards in a row (desktop)
  - **Responsive:** Stacked on mobile
  - **Each Card Contains:**
    - **Store Image:** Interior image showcasing apparel and home decor displays
    - **Store Name & Location:** (e.g., "California 89 - Truckee")
    - **Address:** Full street address
    - **Hours:** "Daily 10am - 6pm" (or specific hours)
    - **Phone Number:** Contact phone
    - **CTA Link:** "Get Directions →" (orange text, right arrow icon)
      - Links to Google Maps or directions
  - **Card Styling:**
    - Subtle shadows (raised appearance)
    - White background
    - Good padding
    - Consistent card sizing
    - Image maintains aspect ratio
    - Clean typography
    - Good spacing between elements
- **Styling:**
  - Clean, professional card design
  - Good horizontal spacing between cards
  - Responsive grid layout

#### 5. **"Ready to Experience the 89 Lifestyle?" CTA Section**
- **Layout:** Full-width section
- **Background:** Dark gray background (`#2a2a2a` or similar)
- **Content:**
  - **Heading:** "Ready to Experience the 89 Lifestyle?" (large, bold, white, centered)
  - **Description:** "Browse our collection of apparel and home decor, inspired by the backroads of California." (smaller, regular weight, white, centered)
  - **CTA Button:** "Shop Now →" (orange-brown background, white text, right arrow icon)
    - Centered button
    - Prominent, easily clickable
- **Styling:**
  - Dark background with white text
  - Centered content
  - Good vertical spacing
  - Prominent CTA button
  - Good contrast for readability

---

## JavaScript Functionality

### Required Features:

1. **Image Slider/Carousel:**
   - Auto-play functionality (5-7 second intervals)
   - Pause on hover
   - Manual navigation (arrows, dots)
   - Keyboard navigation (arrow keys)
   - Touch/swipe gestures for mobile
   - Smooth transitions (CSS transitions or animations)
   - Infinite loop option

2. **Mobile Menu:**
   - Hamburger menu toggle
   - Slide-in or dropdown menu
   - Close on outside click
   - Smooth animations

3. **Search Functionality:**
   - Expandable search bar
   - Live search results (AJAX)
   - Search overlay/modal
   - Keyboard shortcuts (Ctrl/Cmd + K)

4. **Cart Drawer:**
   - Slide-out cart from right side
   - Add to cart without page reload (AJAX)
   - Update quantities
   - Remove items
   - Show cart count badge
   - Empty cart state

5. **Product Interactions:**
   - Quick view modal (product details in popup)
   - Wishlist functionality (localStorage or Shopify API)
   - Add to cart from product cards
   - Image zoom on hover (optional)
   - **Quantity Selector:**
     - +/- buttons for quantity input
     - Min/max quantity validation
     - Update cart quantity dynamically
     - Smooth number input transitions
   - **Add to Cart from Sections:**
     - Add to cart from "It's Hoodie Season" section
     - AJAX add to cart (no page reload)
     - Success feedback (toast notification or cart drawer open)
     - Error handling for out of stock items

6. **Smooth Scrolling:**
   - Smooth scroll to sections
   - Scroll animations (fade in on scroll)

7. **Form Handling:**
   - Newsletter signup form validation
   - AJAX form submission
   - Success/error messages

8. **Lazy Loading:**
   - Lazy load images below the fold
   - Improve page load performance

9. **Sticky Header:**
   - Header becomes sticky on scroll
   - Show/hide on scroll direction (optional)

10. **Collection/Shop Page Features:**
    - **Filter Functionality:**
      - Checkbox filters update product list (AJAX)
      - Multiple filter selection
      - "Clear All" resets all filters
      - Filter count indicator (optional)
      - URL parameter updates for shareable filtered views
      - Browser history support (back/forward buttons)
    - **Sort Functionality:**
      - Dropdown changes product order
      - AJAX sorting (no page reload)
      - URL parameter updates
      - Maintains filter state when sorting
    - **Grid/List View Toggle:**
      - Toggle between grid and list layouts
      - Save preference (localStorage)
      - Smooth transition between views
      - Maintains scroll position
    - **Product Filtering:**
      - Real-time filtering as checkboxes are selected
      - Debounced updates for performance
      - Loading states during filter updates
      - Product count updates dynamically
    - **Mobile Filter Drawer:**
      - Slide-out drawer from left
      - Backdrop overlay
      - Close button functionality
      - Smooth open/close animations
      - Touch-friendly interface
    - **Pagination:**
      - AJAX pagination (optional)
      - "Load More" button functionality
      - Infinite scroll option
      - Smooth loading transitions
    - **Product Badges:**
      - Dynamic badge display based on product tags/metafields
      - "Best Seller" for best-selling products
      - "New" for recently added products
      - "Popular" for popular/trending products
      - "Sale" for products on sale
      - Only one badge displayed per product (priority: Sale > New > Best Seller > Popular)

11. **Testimonials Section:**
    - Display customer reviews with star ratings
    - Optional carousel/slider for testimonials (if many reviews)
    - "Verified Buyer" badge display logic
    - Smooth animations on load
    - Star rating display (5-star system with orange stars)

12. **Instagram Feed:**
    - Load Instagram posts via API or Shopify app
    - Lazy load images for performance
    - Hover effects on images
    - Click to open Instagram post (new tab)
    - Error handling for API failures
    - Responsive grid layout

13. **Feature Icons Section:**
    - Smooth fade-in animation on scroll
    - Icon hover effects (optional)
    - Responsive icon sizing

14. **Quantity Selector:**
    - +/- buttons for quantity input
    - Min/max quantity validation (minimum 1, maximum based on stock)
    - Update cart quantity dynamically
    - Smooth number input transitions
    - Disable buttons at min/max limits

15. **About Page Features:**
    - **Hero Section:**
      - Smooth fade-in animation on load
      - Parallax effect on scroll (optional)
      - Responsive image sizing
    - **"What We Stand For" Cards:**
      - Fade-in animation on scroll
      - Hover effects on cards (optional)
      - Icon animations (optional)
    - **Store Location Cards:**
      - "Get Directions" links open Google Maps or directions
      - Click tracking (optional)
      - Hover effects on cards
      - Smooth animations on scroll
    - **CTA Section:**
      - Smooth scroll to shop page on button click
      - Button hover effects
      - Animation on scroll into view

---

## CSS Styling Requirements

### General Styling:
- **Responsive Design:** Mobile-first approach
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Spacing:** Consistent spacing system (8px or 16px base)
- **Typography:** Clear hierarchy, readable font sizes
- **Colors:** Use CSS variables for easy theme customization
- **Transitions:** Smooth transitions on all interactive elements (0.3s ease)

### Specific Styling:

1. **Buttons:**
   - Primary CTA: Orange-brown background, white text, rounded corners
   - Hover: Slight darkening or scale effect
   - Secondary: Outlined style
   - Smooth transitions

2. **Product Cards:**
   - White background
   - Subtle box shadow
   - Hover: Shadow increase, image zoom
   - Smooth transitions
   - **Product Badges:**
     - Position: Top-left corner of product image
     - Badge types: "Best Seller", "New", "Popular", "Sale"
     - Styling: Orange background (`#d97706`), white text, rounded corners
     - Font: Small, bold, uppercase
     - Z-index: Above product image
     - Dynamic display based on product tags/metafields

3. **Navigation:**
   - Clean, minimal design
   - White background header
   - Dark gray text for logo and links
   - **Navigation Links:**
     - Uppercase text styling
     - Even spacing between links
     - Hover states: Color change or underline effect
     - **Active state indicators:**
       - Current page link highlighted with orange underline
       - Orange accent color (`#d97706`) for active link
       - Subtle background or underline effect
   - **Utility Icons:**
     - Dark gray color
     - Consistent sizing
     - Hover effects
     - Cart badge: Orange background, white text
   - Mobile menu overlay with backdrop

4. **Forms:**
   - Clean input styling
   - Focus states
   - Error/success states
   - Placeholder styling

5. **Animations:**
   - Fade-in animations for sections on scroll
   - Smooth slide transitions for carousel
   - Hover effects on interactive elements
   - Loading states for AJAX operations

6. **Collection Page Styling:**
   - **Banner:**
     - Dark gray background (`#2a2a2a`)
     - White text, large heading
     - Good vertical padding
   - **Filter Sidebar:**
     - White background
     - Subtle border or shadow
     - Sticky positioning (desktop)
     - Smooth slide-in animation (mobile)
   - **Filter Checkboxes:**
     - Custom styled checkboxes
     - Orange accent color when checked
     - Hover states
   - **Sort & View Toggle:**
     - Clean dropdown styling
     - Toggle buttons with active/inactive states
     - Smooth transitions
   - **Product Grid:**
     - Consistent spacing
     - Responsive columns
     - Product badges positioned absolutely
   - **Product List View:**
     - Horizontal layout
     - Image on left, details on right
     - Good spacing and alignment
   - **Pagination:**
     - Minimal, clean design
     - Active page highlighted
     - Hover states for buttons

7. **About Page Styling:**
   - **Hero Section:**
     - Full-width background image
     - Dark gray text overlay (good contrast)
     - Large, bold heading
     - Left-aligned text positioning
     - Full height or large section
   - **"Family Business" Section:**
     - White background
     - Two-column layout with good spacing
     - Small uppercase heading ("SINCE 2012") in light gray
     - Large main heading in dark gray
     - Readable paragraph text
     - High-quality image with good aspect ratio
   - **"What We Stand For" Cards:**
     - Centered layout
     - Light gray borders on cards
     - White card backgrounds
     - Circular icons with orange outlines
     - Bold titles, readable descriptions
     - Consistent card sizing
     - Good spacing between cards
     - Subtle shadows or borders
   - **Store Location Cards:**
     - Centered layout
     - Subtle shadows (raised appearance)
     - White backgrounds
     - Store images maintain aspect ratio
     - Clean typography
     - Orange "Get Directions" links
     - Good spacing between elements
   - **CTA Section:**
     - Dark gray background
     - White text (good contrast)
     - Centered content
     - Orange-brown CTA button
     - Prominent, easily clickable

---

## Shopify Theme Structure

### Required Files:

```
theme/
├── assets/
│   ├── css/
│   │   ├── theme.css (main stylesheet)
│   │   ├── components.css (component-specific styles)
│   │   ├── utilities.css (utility classes)
│   │   └── responsive.css (responsive breakpoints)
│   ├── js/
│   │   ├── theme.js (main JavaScript file)
│   │   ├── cart.js (cart functionality)
│   │   ├── slider.js (hero slider/carousel)
│   │   ├── filters.js (collection filters)
│   │   ├── product.js (product interactions)
│   │   ├── menu.js (mobile menu)
│   │   └── animations.js (scroll animations)
│   ├── images/
│   │   ├── hero/ (hero slider images)
│   │   ├── products/ (product images)
│   │   ├── categories/ (category images)
│   │   ├── icons/ (icon images)
│   │   ├── about/ (about page images)
│   │   ├── stores/ (store location images)
│   │   └── blog/ (blog post images)
│   ├── fonts/ (custom fonts if needed)
│   └── [other asset files]
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-slider.liquid
│   ├── feature-icons.liquid
│   ├── featured-products.liquid
│   ├── shop-by-category.liquid
│   ├── hoodie-season.liquid
│   ├── modern-mountain-living.liquid
│   ├── modern-mountain-products.liquid
│   ├── customer-testimonials.liquid
│   ├── blog-posts.liquid
│   ├── about-section.liquid
│   ├── about-hero.liquid
│   ├── about-story.liquid
│   ├── about-values.liquid
│   ├── about-stores.liquid
│   ├── about-cta.liquid
│   ├── instagram-feed.liquid
│   ├── collection-banner.liquid
│   ├── collection-filters.liquid
│   └── [other sections]
├── snippets/
│   ├── product-card.liquid
│   ├── product-card-list.liquid
│   ├── cart-drawer.liquid
│   ├── mobile-menu.liquid
│   ├── filter-sidebar.liquid
│   ├── sort-dropdown.liquid
│   ├── quantity-selector.liquid
│   ├── testimonial-card.liquid
│   ├── store-card.liquid
│   ├── value-card.liquid
│   └── [other snippets]
└── templates/
    ├── index.liquid
    ├── product.liquid
    ├── collection.liquid
    ├── collection.ajax.liquid (for AJAX filtering)
    ├── page.about.liquid (About page template)
    └── [other templates]
```

### Assets Organization:

#### CSS Files Structure:
```
assets/css/
├── theme.css          # Main theme stylesheet
├── components.css     # Component-specific styles (buttons, cards, forms)
├── utilities.css      # Utility classes (spacing, typography, colors)
└── responsive.css     # Media queries and responsive styles
```

#### JavaScript Files Structure:
```
assets/js/
├── theme.js          # Main theme JavaScript, initialization
├── cart.js           # Cart drawer, add to cart, AJAX cart functionality
├── slider.js         # Hero slider/carousel functionality
├── filters.js        # Collection page filters and sorting
├── product.js        # Product interactions (quick view, wishlist)
├── menu.js           # Mobile menu functionality
└── animations.js     # Scroll animations, fade-ins, transitions
```

#### Image Assets - URLs to Download and Host Locally:

**Note:** All images should be downloaded and saved to `assets/images/` directory. Use descriptive filenames.

##### Homepage Images:

**Hero Slider Images:**
- Slide 1 (Life is Fine on 89): Rustic living room with stone fireplace
  - Source: `https://images.unsplash.com/photo-1645242075656-e4e435b7a5f5`
  - Save as: `hero-slide-1-life-is-fine.jpg`
- Slide 2 (Modern Mountain Living): Cozy interior with fireplace
  - Source: `https://images.unsplash.com/photo-1645242075656-e4e435b7a5f5`
  - Save as: `hero-slide-2-modern-mountain.jpg`
- Slide 3 (Crisp Days, Cozy Spaces): Rustic cabin interior
  - Source: `https://images.unsplash.com/photo-1645242075656-e4e435b7a5f5`
  - Save as: `hero-slide-3-crisp-days.jpg`

**Product Images (from cdn.shoplightspeed.com):**
- CA89 Shield Hoodie
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/59411145/520x600x2/california-89-the-classic-california-89-shield-hoo.jpg`
  - Save as: `products/ca89-shield-hoodie.jpg`
- Moon Phase Straw Cup
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/73633556/325x375x2/california-89-california-89-all-day-moon-phase-str.jpg`
  - Save as: `products/moon-phase-straw-cup.jpg`
- Speckled Truckee Mug
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/73633558/325x375x2/ca89-speckled-truckee-mug.jpg`
  - Save as: `products/speckled-truckee-mug.jpg`
- Woodgrain Glass Can
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/73633617/325x375x2/california-89-california-89-woodgrain-glass-can.jpg`
  - Save as: `products/woodgrain-glass-can.jpg`
- Leather Patch Beanie
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/73633956/325x375x2/as-colour-ca89-leather-patch-cuffed-beanie.jpg`
  - Save as: `products/leather-patch-beanie.jpg`
- CA89 HIKE Cards
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/56219832/325x375x2/california-89-ca89-hike-cards.jpg`
  - Save as: `products/ca89-hike-cards.jpg`
- Mountain Hooded Sweatshirt
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/62726968/325x375x2/unisex-sweatshirt-with-ca89-and-tree-on-sleeve.jpg`
  - Save as: `products/mountain-hooded-sweatshirt.jpg`
- Truckee Patch Beanie
  - URL: `https://cdn.shoplightspeed.com/shops/627491/files/73633840/325x375x2/beanie-with-truckee-patch.jpg`
  - Save as: `products/truckee-patch-beanie.jpg`

**Category Images (from Unsplash):**
- Apparel Category
  - URL: `https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600`
  - Save as: `categories/apparel-category.jpg`
- Home Decor Category
  - URL: `https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600`
  - Save as: `categories/home-decor-category.jpg`
- Drinkware Category
  - URL: `https://images.unsplash.com/photo-1604065786939-7628d10f5afd?w=600`
  - Save as: `categories/drinkware-category.jpg`
- Kitchen & Bar Category
  - URL: `https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600`
  - Save as: `categories/kitchen-bar-category.jpg`

**Content Section Images:**
- Lake Tahoe Mountains
  - URL: `https://images.unsplash.com/photo-1728753582299-c2739dc5554b`
  - Save as: `content/lake-tahoe-mountains.jpg`
- Mountain Adventure
  - URL: `https://images.unsplash.com/photo-1585803114088-cd027272106a`
  - Save as: `content/mountain-adventure.jpg`
- Mountain Landscape
  - URL: `https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5`
  - Save as: `content/mountain-landscape.jpg`
- Cozy Cabin Interior
  - URL: `https://images.unsplash.com/photo-1697599721581-933118bfaf00`
  - Save as: `content/cozy-cabin-interior.jpg`
- Mountain Scene
  - URL: `https://images.unsplash.com/photo-1578952258885-6ee0651294e6`
  - Save as: `content/mountain-scene.jpg`
- Modern Interior
  - URL: `https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600`
  - Save as: `content/modern-interior.jpg`
- Rustic Interior
  - URL: `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600`
  - Save as: `content/rustic-interior.jpg`
- Mountain View
  - URL: `https://images.unsplash.com/photo-1634849662801-a00d83441092?w=800`
  - Save as: `content/mountain-view.jpg`
- Scenic Landscape
  - URL: `https://images.unsplash.com/photo-1768077710231-f3a256362553?w=800`
  - Save as: `content/scenic-landscape.jpg`
- Mountain Range
  - URL: `https://images.unsplash.com/photo-1675604587136-f91dc1a4473b?w=800`
  - Save as: `content/mountain-range.jpg`

**Blog Post Images:**
- Fall Riding in Tahoe
  - URL: `https://images.unsplash.com/photo-1728753582299-c2739dc5554b`
  - Save as: `blog/fall-riding-tahoe.jpg`
- Summer Days
  - URL: `https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600`
  - Save as: `blog/summer-days.jpg`
- Earth Day
  - URL: `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600`
  - Save as: `blog/earth-day.jpg`

**Instagram Feed Images:**
- Instagram post images (6 images)
  - URLs: Various Instagram post images
  - Save as: `instagram/instagram-post-1.jpg` through `instagram-post-6.jpg`
  - Note: These should be fetched from Instagram API or manually downloaded

##### About Page Images:

**Hero Section:**
- Our Story Background (Snow-capped mountains)
  - URL: `https://images.unsplash.com/photo-1728753582299-c2739dc5554b`
  - Save as: `about/hero-our-story-mountains.jpg`

**Family Business Section:**
- Cozy Interior with Windows
  - URL: `https://images.unsplash.com/photo-1645242075656-e4e435b7a5f5`
  - Save as: `about/family-business-interior.jpg`

**Store Location Images:**
- California 89 - Truckee Store
  - Save as: `stores/california-89-truckee.jpg`
- CA89 Home - Truckee Store
  - Save as: `stores/ca89-home-truckee.jpg`
- Store Interior (if available)
  - Save as: `stores/store-interior.jpg`

##### Icon Assets:

**Feature Icons (SVG or PNG):**
- Truck icon (Free Shipping)
  - Save as: `icons/truck-icon.svg` or `icons/truck-icon.png`
- Leaf icon (Made in CA89)
  - Save as: `icons/leaf-icon.svg` or `icons/leaf-icon.png`
- Return arrow icon (Easy Returns)
  - Save as: `icons/return-icon.svg` or `icons/return-icon.png`
- Headset icon (Customer Support)
  - Save as: `icons/headset-icon.svg` or `icons/headset-icon.png`

**Value Icons (About Page):**
- Mountain icon
  - Save as: `icons/mountain-icon.svg` or `icons/mountain-icon.png`
- Heart icon
  - Save as: `icons/heart-icon.svg` or `icons/heart-icon.png`
- Person icon
  - Save as: `icons/person-icon.svg` or `icons/person-icon.png`
- Leaf icon (reuse from feature icons)

**Navigation Icons:**
- Search icon (magnifying glass)
  - Save as: `icons/search-icon.svg` or `icons/search-icon.png`
- Account icon (person silhouette)
  - Save as: `icons/account-icon.svg` or `icons/account-icon.png`
- Cart icon (shopping bag)
  - Save as: `icons/cart-icon.svg` or `icons/cart-icon.png`
- Menu icon (hamburger)
  - Save as: `icons/menu-icon.svg` or `icons/menu-icon.png`
- Arrow icons (left/right for slider)
  - Save as: `icons/arrow-left.svg` and `icons/arrow-right.svg`
- Close icon (for modals/drawers)
  - Save as: `icons/close-icon.svg` or `icons/close-icon.png`

**Social Media Icons:**
- Instagram icon
  - Save as: `icons/instagram-icon.svg` or `icons/instagram-icon.png`
- Facebook icon
  - Save as: `icons/facebook-icon.svg` or `icons/facebook-icon.png`

**Product Badge Images:**
- Best Seller badge
  - Save as: `badges/best-seller-badge.svg` or `badges/best-seller-badge.png`
- New badge
  - Save as: `badges/new-badge.svg` or `badges/new-badge.png`
- Popular badge
  - Save as: `badges/popular-badge.svg` or `badges/popular-badge.png`
- Sale badge
  - Save as: `badges/sale-badge.svg` or `badges/sale-badge.png`

**Verified Buyer Badge:**
- Verified Buyer badge (green)
  - Save as: `badges/verified-buyer-badge.svg` or `badges/verified-buyer-badge.png`

#### Instructions for Downloading Assets:

1. **Download Images:**
   ```bash
   # Create directory structure
   mkdir -p assets/images/{hero,products,categories,content,blog,instagram,about,stores,icons,badges}
   
   # Download images using wget or curl
   # Example:
   wget -O assets/images/products/ca89-shield-hoodie.jpg "https://cdn.shoplightspeed.com/shops/627491/files/59411145/520x600x2/california-89-the-classic-california-89-shield-hoo.jpg"
   ```

2. **Optimize Images:**
   - Convert to WebP format for better performance
   - Compress images while maintaining quality
   - Create responsive image sizes (thumbnail, medium, large)
   - Use tools like ImageMagick, Sharp, or online tools

3. **Create Icon SVGs:**
   - Design icons in SVG format for scalability
   - Use consistent stroke width and style
   - Ensure icons match the design aesthetic

4. **JavaScript Bundling:**
   - Use a bundler (Webpack, Rollup, or Vite) to combine JS files
   - Minify JavaScript for production
   - Use ES6+ syntax with Babel if needed for browser compatibility

5. **CSS Organization:**
   - Use CSS variables for colors and spacing
   - Organize styles by component
   - Minify CSS for production
   - Consider using a CSS preprocessor (Sass/SCSS) for better organization

#### Asset Loading Strategy:

1. **Lazy Loading:**
   - Implement lazy loading for images below the fold
   - Use `loading="lazy"` attribute for images
   - Load hero images immediately (above the fold)

2. **Image Formats:**
   - Use WebP format with fallback to JPEG/PNG
   - Provide multiple sizes for responsive images
   - Use `srcset` and `sizes` attributes

3. **CDN Consideration:**
   - Consider using Shopify's CDN for assets
   - Or use a custom CDN (Cloudflare, AWS CloudFront)
   - Ensure proper caching headers

4. **Font Loading:**
   - Use `font-display: swap` for web fonts
   - Preload critical fonts
   - Consider using system fonts for better performance

#### Referencing Assets in Shopify Liquid:

**CSS Files:**
```liquid
{{ 'theme.css' | asset_url | stylesheet_tag }}
{{ 'components.css' | asset_url | stylesheet_tag }}
{{ 'utilities.css' | asset_url | stylesheet_tag }}
{{ 'responsive.css' | asset_url | stylesheet_tag }}
```

**JavaScript Files:**
```liquid
{{ 'theme.js' | asset_url | script_tag }}
{{ 'cart.js' | asset_url | script_tag }}
{{ 'slider.js' | asset_url | script_tag }}
{{ 'filters.js' | asset_url | script_tag }}
{{ 'product.js' | asset_url | script_tag }}
{{ 'menu.js' | asset_url | script_tag }}
{{ 'animations.js' | asset_url | script_tag }}
```

**Image Assets:**
```liquid
{# Hero Images #}
<img src="{{ 'hero-slide-1-life-is-fine.jpg' | asset_url }}" alt="Life is Fine on 89">

{# Product Images #}
<img src="{{ 'products/ca89-shield-hoodie.jpg' | asset_url }}" alt="CA89 Shield Hoodie">

{# Category Images #}
<img src="{{ 'categories/apparel-category.jpg' | asset_url }}" alt="Apparel">

{# Icons #}
<img src="{{ 'icons/search-icon.svg' | asset_url }}" alt="Search" class="icon">
<svg><use href="{{ 'icons/search-icon.svg' | asset_url }}#icon"></use></svg>

{# Badges #}
<img src="{{ 'badges/best-seller-badge.svg' | asset_url }}" alt="Best Seller" class="product-badge">
```

**Responsive Images with srcset:**
```liquid
<img 
  src="{{ 'products/ca89-shield-hoodie.jpg' | asset_url }}"
  srcset="{{ 'products/ca89-shield-hoodie-small.jpg' | asset_url }} 300w,
          {{ 'products/ca89-shield-hoodie-medium.jpg' | asset_url }} 600w,
          {{ 'products/ca89-shield-hoodie-large.jpg' | asset_url }} 1200w"
  sizes="(max-width: 768px) 300px, (max-width: 1024px) 600px, 1200px"
  alt="CA89 Shield Hoodie"
  loading="lazy">
```

**Background Images in CSS:**
```liquid
<style>
  .hero-section {
    background-image: url('{{ "hero-slide-1-life-is-fine.jpg" | asset_url }}');
  }
</style>
```

**Preloading Critical Assets:**
```liquid
<link rel="preload" href="{{ 'theme.css' | asset_url }}" as="style">
<link rel="preload" href="{{ 'theme.js' | asset_url }}" as="script">
<link rel="preload" href="{{ 'hero-slide-1-life-is-fine.jpg' | asset_url }}" as="image">
```

### Shopify Liquid Requirements:

1. **Use Shopify Objects:**
   - `product` objects for product cards
   - `collection` objects for collections
   - `article` objects for blog posts
   - `cart` object for cart functionality

2. **Schema Settings:**
   - Make sections customizable in theme editor
   - Add color pickers, image uploads, text inputs
   - Enable/disable sections
   - Configure number of products, slides, etc.

3. **Responsive Images:**
   - Use `img_url` filter with size parameters
   - Implement srcset for responsive images
   - Lazy loading with `loading="lazy"`

4. **AJAX Cart:**
   - Use Shopify Cart API
   - Update cart without page reload
   - Show cart count in header

---

## Animation Details

### Carousel Animations:
- **Transition:** Fade or slide (300-500ms)
- **Easing:** `ease-in-out` or `cubic-bezier`
- **Auto-play:** 5-7 second intervals
- **Pause:** On hover, on touch (mobile)

### Hover Effects:
- **Product Cards:** 
  - Image zoom (scale 1.05-1.1)
  - Shadow increase
  - Button fade-in
- **Buttons:**
  - Background color change
  - Scale effect (1.02-1.05)
- **Links:**
  - Underline animation
  - Color transition

### Scroll Animations:
- **Fade-in:** Sections fade in as they enter viewport
- **Slide-up:** Content slides up as it becomes visible
- **Threshold:** Trigger at 20-30% visibility

### Loading States:
- **Skeleton screens** for product cards
- **Spinner** for AJAX operations
- **Smooth transitions** between states

---

## Performance Requirements

1. **Optimize Images:**
   - Use WebP format where supported
   - Proper image sizing
   - Lazy loading

2. **Minify Assets:**
   - Minify CSS and JavaScript
   - Remove unused code

3. **Code Splitting:**
   - Load JavaScript only where needed
   - Defer non-critical scripts

4. **Caching:**
   - Proper cache headers
   - Browser caching for static assets

---

## Accessibility Requirements

1. **Semantic HTML:**
   - Proper heading hierarchy
   - ARIA labels where needed
   - Alt text for images

2. **Keyboard Navigation:**
   - All interactive elements keyboard accessible
   - Focus indicators
   - Skip links

3. **Screen Readers:**
   - Proper ARIA attributes
   - Descriptive link text
   - Form labels

4. **Color Contrast:**
   - WCAG AA compliance
   - Readable text on all backgrounds

---

## Testing Requirements

1. **Cross-browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

2. **Responsive Testing:**
   - Various screen sizes
   - Tablet orientations
   - Mobile devices

3. **Functionality Testing:**
   - All JavaScript features work
   - Forms submit correctly
   - Cart functionality
   - Navigation works
   - Animations perform smoothly

4. **Performance Testing:**
   - Page load times
   - Lighthouse scores
   - Mobile performance

---

## Additional Features to Consider

1. **Product Quick View:**
   - Modal popup with product details
   - Add to cart from modal
   - Image gallery in modal

2. **Wishlist:**
   - Save to localStorage or customer account
   - Wishlist page
   - Share wishlist

3. **Product Filters:** *(Already detailed in Collection/Shop Page section)*
   - Filter by category, price, etc.
   - AJAX filtering
   - URL parameters for shareable filtered views
   - Grid/List view toggle
   - Sort functionality

4. **Product Recommendations:**
   - "You may also like" section
   - Recently viewed products

5. **Social Sharing:**
   - Share buttons for products
   - Social media integration

---

## Implementation Notes

1. **Use Modern JavaScript:**
   - ES6+ syntax
   - Modular code structure
   - Event delegation where appropriate

2. **CSS Best Practices:**
   - Use CSS Grid and Flexbox
   - CSS variables for theming
   - Mobile-first media queries
   - BEM or similar naming convention

3. **Shopify Best Practices:**
   - Follow Shopify theme development guidelines
   - Use Shopify CLI for development
   - Test in theme editor
   - Optimize for Shopify's CDN

4. **Code Organization:**
   - Separate concerns (HTML, CSS, JS)
   - Reusable components/snippets
   - Comment code for maintainability

---

## Deliverables

1. **Complete Shopify Theme:**
   - All required files and folders
   - Working functionality
   - Customizable sections

2. **Documentation:**
   - Setup instructions
   - Customization guide
   - Section configuration guide

3. **Testing:**
   - Tested across browsers and devices
   - Performance optimized
   - Accessibility compliant

---

## Reference
- **Source Website:** https://sierra-style.preview.emergentagent.com/
- **Design Style:** Rustic, modern mountain aesthetic
- **Brand:** California 89 - Truckee • Lake Tahoe
- **Theme Name:** Sierra Style / Sacred Rebel Theme

---

**End of Prompt**
