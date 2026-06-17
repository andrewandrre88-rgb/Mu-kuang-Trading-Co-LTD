/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n-context';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <div className="min-h-screen bg-[var(--color-background)] font-sans antialiased text-gray-900 selection:bg-secondary selection:text-white flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      </Router>
    </I18nProvider>
  );
}
