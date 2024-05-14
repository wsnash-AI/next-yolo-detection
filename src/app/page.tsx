'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Yolo from "@/components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// const DynamicYolo = dynamic(() => import('../components/models/Yolo'), {
//   loading: () => <p>Loading...</p>,
// })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome
      </h1>
      {/* <DynamicYolo /> */}
      <Yolo />
    </main>
  );
}
