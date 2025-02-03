"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { GoogleLogo, FacebookLogo } from "@phosphor-icons/react";
import styles from "./style.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault()
    console.log(email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/images/lotus.jpeg"
          width={300}
          height={300}
          alt="Picture of the author"
          className={styles.logoImage}
        />

        <h2 className={styles.headerText}>Seja Bem-vindo!</h2>

        <form>
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

          <Link href="#" className={styles.linkForgotPassword}>Esqueceu sua senha?</Link>

          <Button text="Entrar" onClick={handleForm} />
        </form>

        <p className={styles.linkToRegister}>
          Não possui cadastro? <Link href="/register">Registre-se aqui</Link>
        </p>

        <div className={styles.divider} />

        <p className={styles.textSocialMedia}>Ou continue com</p>

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
