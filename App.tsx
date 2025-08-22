
import React, { useState } from 'react';
import Header from './components/Header';
import CodeAnalyzer from './components/CodeAnalyzer';
import Learn from './components/Learn';
import Quiz from './components/Quiz';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('analyze');

  const renderContent = () => {
    switch (activeTab) {
      case 'analyze':
        return <CodeAnalyzer />;
      case 'learn':
        return <Learn />;
      case 'quiz':
        return <Quiz />;
      default:
        return <CodeAnalyzer />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="p-4 sm:p-6 md:p-8">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Built with Gemini API & React. Promoting sustainable software engineering.</p>
      </footer>
    </div>
  );
};

export default App;
