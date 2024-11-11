import React from "react";
import { View, Text, Image, TouchableOpacity, ViewStyle } from "react-native";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/LanguageContext"; // Asegúrate de que la ruta es correcta
import { styles } from "@/constants/styles3";
import languages from "@/constants/Constant";

const LanguageSelectionScreen: React.FC = () => {
  const { t } = useTranslation();
  const { selectedLanguage, changeLanguage } = useLanguage();

  const centeredStyle: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <View style={[styles.container, centeredStyle]}>
      {" "}
      {/* Centralizamos el contenedor principal */}
      <Text style={[styles.title, centeredStyle]}>{t("select_language")}</Text>
      <View style={[styles.languageList, centeredStyle]}>
        {" "}
        {/* Centralizamos la lista de idiomas */}
        {languages.map((language, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.languageItem, centeredStyle]} // Centramos cada elemento de idioma
            onPress={() => changeLanguage(language.code)}
          >
            <Text
              style={[
                styles.language,
                selectedLanguage === language.code && styles.selectedLanguage, // Añadir estilo adicional si está seleccionado
              ]}
            >
              {language.name}
            </Text>
            <Image source={language.flag} style={styles.flagIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LanguageSelectionScreen;
