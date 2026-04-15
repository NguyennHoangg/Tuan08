import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-dark mb-4">
                Unlock Premium Recipes
              </h1>
              <p className="font-dm-sans text-lg text-gray-800 mb-8 leading-relaxed">
                Join now to access effortless, hassle-free recipes from master chefs around the world.
              </p>

              {/* Benefits Bullets */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 mb-10"
              >
                {[
                  'Access to 10,000+ exclusive recipes',
                  'Ad-free cooking experience',
                  'Save unlimited recipes to your box',
                  'Download recipes for offline use',
                  'Priority customer support'
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={24} className="text-primary flex-shrink-0" />
                    <span className="font-dm-sans text-gray-800">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pricing Preview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-primary/10 rounded-lg p-6 mb-8"
              >
                <p className="font-dm-sans text-sm text-gray-500 mb-1">Starting from</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-playfair font-bold text-4xl text-primary">$0.25</span>
                  <span className="font-dm-sans text-gray-800">USD/Week</span>
                </div>
                <p className="font-dm-sans text-sm text-gray-500">
                  Billed as $1 every 4 weeks
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mb-4"
              >
                <button className="px-8 py-4 bg-primary text-white font-dm-sans font-semibold rounded-full hover:opacity-90 transition text-lg">
                  Subscribe Now
                </button>
              </motion.div>

              <p className="font-dm-sans text-sm text-gray-500">
                <Link to="#" className="text-primary hover:underline">
                  Cancel or Pause anytime
                </Link>
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=700&fit=crop"
                alt="Subscribe"
                className="w-full h-96 md:h-screen object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Access Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-neutral-dark text-center mb-4">
              An All Access Subscription Includes
            </h2>
            <p className="font-dm-sans text-center text-gray-800 text-lg mb-12">
              Everything you need to cook like a pro
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: '👨‍🍳',
                title: 'Cooking',
                description: 'Master recipes from expert chefs'
              },
              {
                icon: '📋',
                title: 'Wirecutter',
                description: 'Best kitchen equipment recommendations'
              },
              {
                icon: '🎮',
                title: 'Games',
                description: 'Food-themed games and challenges'
              },
              {
                icon: '⚽',
                title: 'The Athletic',
                description: 'Sports news and athlete recipes'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-playfair font-bold text-lg text-neutral-dark mb-2">
                  {feature.title}
                </h3>
                <p className="font-dm-sans text-gray-800 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-neutral-dark text-center mb-4">
              Chefify Plans
            </h2>
            <p className="font-dm-sans text-center text-gray-800 text-lg mb-12">
              Choose the perfect plan for your cooking journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            {/* Plan Radio Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { id: 'monthly', price: '$2', label: '/month' },
                { id: 'yearly', price: '$20', label: '/year' }
              ].map(plan => (
                <label
                  key={plan.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition ${
                    selectedPlan === plan.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-5 h-5 accent-primary cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-dm-sans font-semibold text-gray-800">
                        {plan.id === 'monthly' ? 'Monthly' : 'Yearly'}
                      </p>
                      <p className="font-playfair font-bold text-2xl text-primary">
                        {plan.price}
                        <span className="font-dm-sans text-base text-gray-800">{plan.label}</span>
                      </p>
                    </div>
                    {plan.id === 'yearly' && (
                      <span className="px-3 py-1 bg-secondary text-white rounded-full font-dm-sans text-xs font-semibold">
                        Save 17%
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>

            {/* Subscribe Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-white font-dm-sans font-semibold rounded-lg hover:opacity-90 transition text-lg"
            >
              Subscribe Now
            </motion.button>

            <p className="font-dm-sans text-center text-gray-500 text-sm mt-4">
              Cancel or pause your subscription anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-3xl text-neutral-dark text-center mb-12">
              Frequently Asked Questions
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {[
                {
                  q: 'Can I cancel my subscription anytime?',
                  a: 'Yes, you can cancel or pause your subscription at any time without any penalties.'
                },
                {
                  q: 'Is there a free trial?',
                  a: 'We offer a 7-day free trial so you can experience Chefify premium features risk-free.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and Apple Pay for your convenience.'
                },
                {
                  q: 'Can I share my subscription with family?',
                  a: 'Our family plan allows up to 4 family members to share a single subscription.'
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="font-dm-sans font-semibold text-lg text-neutral-dark mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-dm-sans text-gray-800">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubscribePage;
