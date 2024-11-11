import React, { FC, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { Slot } from "expo-router";
import i18n from "../components/i18n";
import { LanguageProvider } from "../components/LanguageContext";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // Verifica que el objeto `i18n` esté correctamente inicializado
  if (!i18n.isInitialized) {
    i18n.init(); // Asegúrate de inicializarlo si no lo está
  }

  return (
    <I18nextProvider i18n={i18n as any}>
      <LanguageProvider>{children ?? <Slot />}</LanguageProvider>
    </I18nextProvider>
  );
};

export default Layout;
