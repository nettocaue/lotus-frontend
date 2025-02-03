"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { GoogleLogo, FacebookLogo } from "@phosphor-icons/react";
import styles from "./style.module.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email, password, repeatPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/images/lotus.jpeg"
          width={300}
          height={300}
          alt="Logo da Lotus"
          className={styles.logoImage}
        />

        <h2 className={styles.headerTitle}>Inscrever-se</h2>
        <h2 className={styles.headerText}>Crie uma conta para começar</h2>

        <form>
          <Input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={handleNameChange}
          />

          <Input
            type="text"
            placeholder="Endereço de e-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            type="password"
            placeholder="Repetir senha"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />

          <Button text="Cadastrar" onClick={handleForm} />
        </form>

        <p className={styles.linkToRegister}>
          Já possui cadastro? <Link href="/login">Entre aqui</Link>
        </p>

        <div className={styles.divider} />

        <p className={styles.textSocialMedia}>Ou acesse com</p>

        <div className={styles.contentSocialMedia}>
          <div className={styles.googleIcon}>
            <GoogleLogo size={20} color="#ffffff" weight="bold" />
          </div>

          <div className={styles.facebookIcon}>
            <FacebookLogo size={20} color="#ffffff" weight="bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
