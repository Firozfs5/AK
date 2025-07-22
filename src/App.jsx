import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Header=()=>{
  return (
    <div className='header'>
      <div id="logo-container">
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-orx2HBhoVr4USasHXaKCJ1JB-v251_ETBw&s" alt="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>contact</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

const restObj = {
  // Traditional South Indian Heritage
  karavalli: {
    name: "Karavalli",
    cuisine: "Coastal Indian Seafood",
    address: "Taj Gateway Hotel, Residency Road, Bengaluru 560025",
    phone: "+91 80 6660 4545",
    email: "karavalli.bengaluru@tajhotels.com",
    website: "https://www.tajhotels.com/en-in/restaurants/karavalli-bengaluru/",
    hours: "7:00 PM - 11:30 PM",
    rating: 4.5,
    priceRange: "₹₹₹₹",
    specialties: ["Mangalorean Cuisine", "Goan Seafood", "Coastal Curries"],
    description: "Award-winning restaurant serving authentic coastal Indian cuisine with traditional recipes",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600",
    menuHighlights: ["Lobster Balchao", "Calamari Fry", "Neer Dosa", "Goan Fish Curry"],
    ambiance: "Upscale Traditional",
    capacity: 80,
    features: ["Private Dining", "Valet Parking", "Wine Pairing"]
  },

  vidyarthiBhavan: {
    name: "Vidyarthi Bhavan",
    cuisine: "Traditional South Indian",
    address: "32, Gandhi Bazaar Main Road, Basavanagudi, Bengaluru 560004",
    phone: "+91 80 2657 5943",
    email: "info@vidyarthibhavan.com",
    website: "https://vidyarthibhavan.com",
    hours: "6:30 AM - 11:00 AM, 3:00 PM - 8:30 PM",
    rating: 4.2,
    priceRange: "₹",
    specialties: ["Masala Dosa", "Filter Coffee", "Traditional Breakfast"],
    description: "Heritage restaurant established in 1943, famous for authentic South Indian breakfast",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600",
    menuHighlights: ["Famous Masala Dosa", "Idli Vada", "Filter Coffee", "Set Dosa"],
    ambiance: "Traditional Heritage",
    capacity: 40,
    features: ["Heritage Building", "Traditional Seating", "Cash Only"]
  },

  mtr: {
    name: "Mavalli Tiffin Room (MTR)",
    cuisine: "Karnataka Traditional Vegetarian",
    address: "14, Lalbagh Road, Mavalli, Bengaluru 560004",
    phone: "+91 80 2222 0022",
    email: "mtr@mtrfoods.com",
    website: "https://www.mtrfoods.com",
    hours: "6:30 AM - 11:00 AM, 3:00 PM - 8:30 PM",
    rating: 4.3,
    priceRange: "₹₹",
    specialties: ["Rava Idli", "Masala Dosa", "Traditional Karnataka Sweets"],
    description: "Century-old restaurant serving traditional Karnataka cuisine since 1924",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600",
    menuHighlights: ["Rava Idli", "Bisibelebath", "MTR Special Dosa", "Kesari Bath"],
    ambiance: "Heritage Traditional",
    capacity: 60,
    features: ["Century Old Recipe", "Traditional Service", "Vegetarian Only"]
  },

  airlinesHotel: {
    name: "Airlines Hotel",
    cuisine: "South Indian Vegetarian",
    address: "No 4, State Bank of India Road, Richmond Town, Bengaluru 560001",
    phone: "+91 80 2227 3783",
    email: "info@airlineshotel.com",
    website: "https://airlineshotel.com",
    hours: "6:00 AM - 11:00 PM",
    rating: 3.7,
    priceRange: "₹₹",
    specialties: ["South Indian Breakfast", "Coffee", "Traditional Snacks"],
    description: "Classic Bangalore breakfast spot with drive-in facility and outdoor seating",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600",
    menuHighlights: ["Masala Dosa", "Vada", "Filter Coffee", "Upma"],
    ambiance: "Traditional Outdoor",
    capacity: 50,
    features: ["Drive-in Facility", "Outdoor Seating", "Breakfast Specialist"]
  },

  // Fine Dining Indian
  punjabGrill: {
    name: "Punjab Grill",
    cuisine: "North Indian Fine Dining",
    address: "UB City Mall, Level 1, Vittal Mallya Road, Bengaluru 560001",
    phone: "+91 80 4132 2444",
    email: "bengaluru@punjabgrill.com",
    website: "https://punjabgrill.com",
    hours: "12:30 PM - 3:30 PM, 7:00 PM - 11:30 PM",
    rating: 4.5,
    priceRange: "₹₹₹₹",
    specialties: ["Punjabi Cuisine", "Tandoor", "Northwest Frontier"],
    description: "Upscale North Indian restaurant with authentic Punjabi flavors and elegant ambiance",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600",
    menuHighlights: ["Butter Chicken", "Dal Punjab Grill", "Seekh Kebab", "Naan Varieties"],
    ambiance: "Elegant Traditional",
    capacity: 70,
    features: ["Private Dining", "Bar", "Valet Parking"]
  },

  indianAccent: {
    name: "Indian Accent",
    cuisine: "Modern Indian",
    address: "The Lodhi, Lodhi Road, New Delhi 110003",
    phone: "+91 11 4323 5151",
    email: "reservations@indianaccent.com",
    website: "https://indianaccent.com",
    hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM",
    rating: 4.7,
    priceRange: "₹₹₹₹",
    specialties: ["Contemporary Indian", "Innovative Plating", "Regional Fusion"],
    description: "Award-winning modern Indian restaurant with innovative interpretations of traditional dishes",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600",
    menuHighlights: ["Duck Kheer Shaami", "Pork Ribs", "Blue Cheese Naan", "Mishti Doi Cannelloni"],
    ambiance: "Contemporary Elegant",
    capacity: 60,
    features: ["Award Winning", "Private Chef Table", "Wine Cellar"]
  },

  // Regional Indian Specialties
  tasteOfIndia: {
    name: "Taste of India",
    cuisine: "Multi-Regional Indian",
    address: "15/2, Cunningham Road, Bengaluru 560052",
    phone: "+91 80 2286 4429",
    email: "info@tasteofindia.in",
    website: "https://tasteofindia.in",
    hours: "11:30 AM - 11:00 PM",
    rating: 4.1,
    priceRange: "₹₹₹",
    specialties: ["Regional Indian", "Thali", "Street Food"],
    description: "Restaurant showcasing diverse Indian regional cuisines under one roof",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600",
    menuHighlights: ["Rajasthani Thali", "Bengal Fish Curry", "Hyderabadi Biryani", "Gujarati Dhokla"],
    ambiance: "Traditional Regional",
    capacity: 80,
    features: ["Multi-Regional Menu", "Thali Specialist", "Cultural Decor"]
  },

  masala: {
    name: "Masala",
    cuisine: "Contemporary Indian",
    address: "Taj Bengal, 34B, Belvedere Road, Alipore, Kolkata 700027",
    phone: "+91 33 6612 3456",
    email: "masala.kolkata@tajhotels.com",
    website: "https://www.tajhotels.com/en-in/restaurants/masala-kolkata/",
    hours: "7:00 PM - 11:30 PM",
    rating: 4.4,
    priceRange: "₹₹₹₹",
    specialties: ["Bengali Cuisine", "Seafood", "Regional Specialties"],
    description: "Elegant restaurant specializing in Bengali and Eastern Indian cuisine",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600",
    menuHighlights: ["Ilish Macher Jhol", "Prawn Malai Curry", "Mishti Doi", "Sandesh"],
    ambiance: "Elegant Bengali",
    capacity: 65,
    features: ["Bengali Specialties", "Fresh Seafood", "Traditional Sweets"]
  },

  // Vegetarian Indian
  saravanaBhavan: {
    name: "Saravana Bhavan",
    cuisine: "South Indian Vegetarian",
    address: "Multiple Locations across India",
    phone: "+91 44 2811 2755",
    email: "info@saravanabhavan.com",
    website: "https://www.saravanabhavan.com",
    hours: "7:00 AM - 11:00 PM",
    rating: 4.0,
    priceRange: "₹₹",
    specialties: ["Dosa Varieties", "Vegetarian Thali", "South Indian Snacks"],
    description: "International chain famous for authentic South Indian vegetarian cuisine",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=600",
    menuHighlights: ["Rava Masala Dosa", "Chole Bhature", "Filter Coffee", "Variety Rice"],
    ambiance: "Casual Family",
    capacity: 100,
    features: ["Pure Vegetarian", "Family Friendly", "Multiple Locations"]
  },

  // Street Food & Casual
  chaatCorner: {
    name: "Chaat Corner",
    cuisine: "North Indian Street Food",
    address: "Khan Market, New Delhi 110003",
    phone: "+91 11 2465 5555",
    email: "info@chaatcorner.in",
    website: "https://chaatcorner.in",
    hours: "11:00 AM - 10:00 PM",
    rating: 4.2,
    priceRange: "₹",
    specialties: ["Chaat", "Street Food", "Snacks"],
    description: "Popular street food joint serving authentic Delhi-style chaat and snacks",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600",
    menuHighlights: ["Pani Puri", "Bhel Puri", "Aloo Chaat", "Dahi Puri"],
    ambiance: "Street Food Casual",
    capacity: 25,
    features: ["Authentic Street Food", "Quick Service", "Budget Friendly"]
  }
};


const RestaurantCard=({resName,cuisine,rating,capacity,img})=>{
  // console.log(props);
  
  return (
    <div className="res-card">
      <img src={img} alt="Restaurant image" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>Rating {rating}</h4>
      <h4>Capacity : {capacity}</h4>
    </div>
  )
}

const Body=()=>{
  return (
    <div className="body">
      <div className='search'>Search</div>
      <div className='res-container'>

          {
            Object.values(restObj).map((el,id)=> (<RestaurantCard 
              key={id}
              resName={el.name} 
              img={el.image} 
              cuisine={el.cuisine} 
              rating={el.rating}
              capacity={el.capacity}
              />))
          }

      </div>
    </div>
  )
}

const AppLayout=()=>{
   return (
    <div className='app'>
      <Header />
      <Body />
    </div>
   )
}

createRoot(document.getElementById('root')).render(<AppLayout />)
