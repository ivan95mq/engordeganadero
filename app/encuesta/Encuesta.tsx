import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { styles as customStyles } from "@/constants/styles";
import { useTranslation } from "react-i18next";
import * as FileSystem from "expo-file-system";
import { useUserStore } from "@/store/userStore";

const Encuesta: React.FC<{
  navigation: { navigate: (screen: string) => void; goBack: () => void };
}> = ({ navigation }) => {
  const { t } = useTranslation();
  const userId = useUserStore((state) => state.userId);

  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
  });

  useEffect(() => {
    const loadAnswers = async () => {
      if (userId !== null) {
        const fileUri = FileSystem.documentDirectory + `answers_${userId}.json`;
        try {
          const fileExists = await FileSystem.getInfoAsync(fileUri);
          if (fileExists.exists) {
            const jsonContent = await FileSystem.readAsStringAsync(fileUri);
            setAnswers(JSON.parse(jsonContent));
          }
        } catch (error) {
          console.error("Error loading answers:", error);
        }
      }
    };

    loadAnswers();
  }, [userId]);

  const handleCheckboxChange = (
    question: "question1" | "question2" | "question3",
    value: boolean
  ) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const allQuestionsAnswered = Object.values(answers).every(
    (value) => value !== null
  );

  const saveAnswersToJson = async () => {
    if (userId !== null) {
      const jsonContent = JSON.stringify(answers, null, 2);
      const fileUri = FileSystem.documentDirectory + `answers_${userId}.json`;
      try {
        await FileSystem.writeAsStringAsync(fileUri, jsonContent);
        console.log("Answers saved to:", fileUri);
      } catch (error) {
        console.error("Error saving answers:", error);
      }
    } else {
      console.error("No user ID found, unable to save answers.");
    }
  };

  return (
    <View style={[customStyles.container, styles.container]}>
      <Text style={customStyles.title}>{t("Certificaciones")}</Text>

      <View style={customStyles.formContainer}>
        <View style={styles.questionContainer}>
          <Text style={customStyles.label}>
            {t("1. Denominación de origen protegida (DOP) o similar.")}
          </Text>
          <View style={[styles.checkboxGroup, { justifyContent: "center" }]}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={answers.question1 === true}
                onValueChange={() => handleCheckboxChange("question1", true)}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>{t("Si")}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={answers.question1 === false}
                onValueChange={() => handleCheckboxChange("question1", false)}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>{t("No")}</Text>
            </View>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={customStyles.label}>
            {t("2. Certificación de la huella de carbono.")}
          </Text>
          <View style={[styles.checkboxGroup, { justifyContent: "center" }]}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={answers.question2 === true}
                onValueChange={() => handleCheckboxChange("question2", true)}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>{t("Si")}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={answers.question2 === false}
                onValueChange={() => handleCheckboxChange("question2", false)}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>{t("No")}</Text>
            </View>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={customStyles.label}>
            {t("3. Razas de crecimiento lento.")}
          </Text>
          <View style={[styles.checkboxGroup, { justifyContent: "center" }]}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={answers.question3 === true}
                onValueChange={() => handleCheckboxChange("question3", true)}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>{t("Si")}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={answers.question3 === false}
                onValueChange={() => handleCheckboxChange("question3", false)}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>{t("No")}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[customStyles.footerText, styles.navigationText]}>
            {t("Anterior")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            saveAnswersToJson();
            navigation.navigate("NextSurveyPage");
          }}
          disabled={!allQuestionsAnswered}
          style={[!allQuestionsAnswered ? styles.disabledButton : null]}
        >
          <Text
            style={[
              customStyles.footerText,
              styles.navigationText,
              !allQuestionsAnswered ? styles.disabledText : null,
            ]}
          >
            {t("Siguiente")}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.pageIndicator}>{t("1/8")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f0e9",
  },
  questionContainer: {
    marginBottom: 25,
    width: "100%",
  },
  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#333",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
  },
  navigationText: {
    color: "#006400",
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: "#888",
  },
  pageIndicator: {
    fontSize: 16,
    color: "#8c8c8c",
    marginTop: 20,
    textAlign: "center",
  },
});

export default Encuesta;
