import React from 'react';

const LandingSection: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Our Process</h1>
        <p>Du musst dich um gar nichts mehr kummern, nachdem du eine Anfrage gesendet hast.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
          <img src="./Assets/picture-1.png" alt="Zubereitung Kochen" />
          <h2 className="text-xl font-semibold mt-2">Einkauf der Lebensmittel</h2>
            <p>Your selected chef buys the high-quality ingredients </p>

          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <img src="./Assets/picture-2.png" alt="Zubereitung Kochen" />
            <h2 className="text-xl font-semibold mt-2">Zubereitung Kochen</h2>
            <p>The chef prepares a fine dining menu at your home.</p>

          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <img src="./Assets/picture-3.png" alt="Genießen" />
            <h2 className="text-xl font-semibold mt-2">Genießen</h2>
            <p>You enjoy the evening and get the courses served.</p>

          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <img src="./Assets/picture-4.png" alt="Cherry on the top" />
            <h2 className="text-xl font-semibold mt-2">Cherry on the top</h2>
            <p>Meanwhile, the kitchen is cleaned.</p>

          </div>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Sounds interesting? Let's chat about it!</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
