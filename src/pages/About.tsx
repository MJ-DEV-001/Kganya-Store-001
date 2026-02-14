export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About Kganya</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Does Kganya Mean?</h2>
          <p className="text-gray-700 mb-4">
            Kganya is a Setswana word that means "Light." Our brand represents the light of
            Christ shining through modern streetwear, creating a unique fusion of faith and
            fashion.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Kganya, we believe fashion can be a powerful expression of faith and identity.
            Our mission is to create high-quality streetwear that allows Christians to boldly
            express their beliefs while staying true to contemporary style.
          </p>
          <p className="text-gray-700 mb-4">
            We're more than just a clothing brand—we're a movement of believers who want to
            shine their light in the world through every aspect of their lives, including what
            they wear.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Faith First</h3>
              <p className="text-gray-700">
                Every design is rooted in our Christian values and aims to share the message
                of hope and light.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                We're committed to creating premium products that honor God through
                excellence in every detail.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-700">
                Building a community of believers who support and encourage one another.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Authenticity</h3>
              <p className="text-gray-700">
                Staying true to who we are—believers who love fashion and aren't afraid to
                show it.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Kganya?</h2>
          <p className="text-gray-700 mb-4">
            In a world where faith and fashion often seem at odds, Kganya bridges the gap. We
            create apparel that's stylish, comfortable, and meaningful—pieces that spark
            conversations and allow you to share your faith naturally.
          </p>
          <p className="text-gray-700 mb-4">
            When you wear Kganya, you're not just wearing clothes—you're making a statement
            about who you are and what you believe in. You're choosing to be a light in the
            darkness.
          </p>
        </section>

        <section className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
          <p className="mb-6">
            Be part of a community that's redefining Christian fashion and shining the light of
            Christ in contemporary culture.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </section>
      </div>
    </div>
  );
}
