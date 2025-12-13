const ShopInfo = () => {
  const services = [
    { name: 'Knippen', price: 25, duration: '30 min' },
    { name: 'Baard trimmen', price: 15, duration: '15 min' },
    { name: 'Knippen + Baard', price: 35, duration: '45 min' },
    { name: 'Hot Towel Shave', price: 30, duration: '30 min' }
  ];

  return (
    <section className="p-4 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold mb-2">Onze Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="p-3 border border-gray-200 rounded hover:shadow-lg transition">
            <h3 className="font-semibold">{service.name}</h3>
            <p className="text-blue-500 font-bold">€{service.price}</p>
            <p className="text-gray-600">{service.duration}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-gray-700">
        <p><strong>Openingstijden:</strong> Ma-Za 9:00-18:00</p>
        <p><strong>Adres:</strong> Kerkstraat 123, Amsterdam</p>
      </div>
    </section>
  );
};

export default ShopInfo;
