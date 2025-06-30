import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About Hansana Product</h1>

        <p className="mb-4 text-lg leading-relaxed">
          <strong>Crafted with Care, Rooted in Tradition</strong>
        </p>
        <p className="mb-4 leading-relaxed">
          At <strong>Hansana Product</strong>, we believe that every item tells a story — a story rooted in passion, tradition, and craftsmanship. 
          We are more than just a brand; we are a movement dedicated to preserving the rich heritage, natural beauty, and cultural essence of our land.
        </p>

        <p className="mb-4 leading-relaxed">
          Each product we offer is thoughtfully created with love and care by skilled local artisans, farmers, and wellness experts 
          who have inherited their knowledge through generations. From natural wellness items and handmade crafts to organic foods 
          and traditional skincare, our collections reflect a deep respect for nature and a commitment to purity and quality.
        </p>

        <p className="mb-4 leading-relaxed">
          We source ingredients and materials locally, ensuring they are sustainably grown and ethically harvested. 
          This not only supports the local economy but also promotes environmentally responsible practices that benefit both people and the planet.
        </p>

        <p className="mb-4 leading-relaxed">
          What sets <strong>Hansana Product</strong> apart is our dedication to authenticity. We blend age-old traditions 
          with modern standards of excellence, creating goods that are as effective as they are meaningful. Whether it’s a herbal balm 
          made with ancient formulas or a handcrafted basket woven with traditional techniques, every item in our store has a soul — 
          a connection to real people, real stories, and real impact.
        </p>

        <p className="mb-10 leading-relaxed">
          We invite you to explore our collections and experience the unique charm that defines Hansana Product. 
          Discover wellness, beauty, and culture through handcrafted goods inspired by nature and made with care by local artisans.
        </p>

        

        <p className="mt-12 text-center text-sm text-gray-500">
          Hansana Product – Crafted with Heart, Rooted in Tradition
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
