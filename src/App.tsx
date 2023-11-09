import React from 'react';
import Navbar from './Сomponents/Navbar/Navbar';
import './App';

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <h3 className="text-center">Add user.</h3>
          </div>
          <div className="col-8">
            <h3 className="text-center">User list:</h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
