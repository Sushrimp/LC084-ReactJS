import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/navbar/Navbar';
import AnimeDetails from './pages/Detail';
import { useState } from 'react';
import Footer from './Components/navbar/Footer';
import AnimeFav from './pages/Fav';
import Search from './pages/Search';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App() {

  

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Navbar />
      <div style={{height: "32px", backgroundColor: "#dedbd2"}}></div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path=":id" element={<Home />} />
        <Route path="/anime" element={<AnimeDetails />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path='/fav' element={<AnimeFav />} />
        <Route path='/search' element={<Search />} />
          <Route path="/search/:id" element={<Search />} />
        </Routes>

      <div style={{height: "40px", backgroundColor: "#dedbd2"}}></div>
      <Footer />
      </BrowserRouter>

      
    </ApolloProvider>
  );
}

export default App;
