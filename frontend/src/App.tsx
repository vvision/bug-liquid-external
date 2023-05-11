import './liquid/MainLiquid';
import './App.css'
import useScripts from './hooks/useScripts';
import React from 'react';

function App() {

  useScripts(["http://localhost:3002/components/4.5.1/webcomponent.es.js"]);
  useScripts(["http://localhost:3002/components/4.6.0/webcomponent.es.js"]);

  return (
    <>
      <h1>Component with external liquid 4.5.1</h1>
      <div className="card">
        {/* Working component with external liquid */}
        {React.createElement(
            'demo-webcomponent-4.5.1',
            undefined,
            undefined
        )}
      </div>

      <h1>Component with external liquid 4.6.0</h1>
      <div className="card">
        {/* Failing component with external liquid */}
        {React.createElement(
            'demo-webcomponent-4.6.0',
            undefined,
            undefined
        )}
      </div>
    </>
  )
}

export default App
