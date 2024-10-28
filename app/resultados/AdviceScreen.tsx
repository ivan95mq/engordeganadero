import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/Colors";
import TopBar from "@/components/TopBar";
import * as Progress from "react-native-progress";

const ResultsScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <Text style={styles.title}>Resultado del test</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Impacto medioambiental</Text>
        <View style={styles.chartContainer}>
          <Progress.Circle
            size={100}
            progress={0.81} // Representa el 81%
            showsText={true}
            color={COLORS.verdeoscuro}
            unfilledColor={"#ECECEC"}
            borderWidth={0}
            thickness={8}
            formatText={() => `81%`}
            textStyle={styles.percentageText}
          />
        </View>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Impacto social</Text>
        <View style={styles.chartContainer}>
          <Progress.Circle
            size={100}
            progress={0.65} // Representa el 65%
            showsText={true}
            color={"#CA5A61"}
            unfilledColor={"#ECECEC"}
            borderWidth={0}
            thickness={8}
            formatText={() => `65%`}
            textStyle={styles.percentageText}
          />
        </View>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Impacto económico</Text>
        <View style={styles.chartContainer}>
          <Progress.Circle
            size={100}
            progress={0.92} // Representa el 92%
            showsText={true}
            color={COLORS.verdeclaro}
            unfilledColor={"#ECECEC"}
            borderWidth={0}
            thickness={8}
            formatText={() => `92%`}
            textStyle={styles.percentageText}
          />
        </View>
      </View>

      <Text style={styles.totalScoreTitle}>Puntuación Total</Text>
      <Text style={styles.totalScore}>81%</Text>

      <TouchableOpacity
        style={styles.modifyButton}
        onPress={() => router.push("../encuesta/EncuestaScreen")}
      >
        <Text style={styles.modifyButtonText}>Modificar Respuestas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBeige,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginBottom: 20,
  },
  resultContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  chartContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  percentageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  totalScoreTitle: {
    fontSize: 20,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginTop: 20,
  },
  totalScore: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 40,
  },
  modifyButton: {
    backgroundColor: COLORS.verdeoscuro,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  modifyButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsScreen;
