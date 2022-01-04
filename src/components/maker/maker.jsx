import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Junho",
      company: "Naver",
      theme: "dark",
      title: "Software Engineer",
      email: "wn5313@naver.com",
      message: "go for it",
      fileNmae: "junho",
      fileURL: null,
    },
    {
      id: "2",
      name: "Junho2",
      company: "Naver",
      theme: "light",
      title: "Software Engineer",
      email: "wn5313@naver.com",
      message: "go for it",
      fileNmae: "junho",
      fileURL: null,
    },
    {
      id: "3",
      name: "Junho3",
      company: "Naver",
      theme: "colorful",
      title: "Software Engineer",
      email: "wn5313@naver.com",
      message: "go for it",
      fileNmae: "junho",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
