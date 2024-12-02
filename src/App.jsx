import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ResourceList from './components/ResourceList';
import { websites, books, documentaries } from './data/resources';
import './styles/typography.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        
        <main className="prose-academic space-y-8">
          <ResourceList title="Academic Journals & News" items={websites} />
          <ResourceList title="Essential Literature" items={books} />
          <ResourceList title="Documentary Resources" items={documentaries} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;