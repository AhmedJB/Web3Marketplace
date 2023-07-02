import React from 'react'
import styles from "../styles/modular/Home.module.css"
import TestComponent from '../components/TestComponent'
import carImage from "../assets/demo/car.jpg";
import Link from 'next/link';
import Testimonies from '../components/Testimonies';

type Props = {}

function home({}: Props) {
  return <>
    <Testimonies />
  </>

}



/*
  <h1 className={`${styles.test} inter text-headerColor`}>Hello</h1>
        <h3 className="barlow text-headerColor">hello 2</h3>
        <p className="text-headerColor">this is a paragraph</p>
*/

export default home