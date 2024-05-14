'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Yolo from "@/components/models/Yolo";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome
        </h1>
      <Yolo />
    </main>
  );
}
