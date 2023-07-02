import React from 'react'
import styles from "../styles/modular/Home.module.css"
import './App.css';
import CarouselComponent from './CarouselComponent';

function App() {
  return (
    <div className="App">
      <CarouselComponent />
    </div>
  );
}

type Props = {}

function home({}: Props) {
  return (
    <div className={styles["home-title"]}>home</div>
  )
}

export default home;