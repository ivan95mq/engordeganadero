import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/Constant";
import TopBar from "@/components/TopBar";
import * as Progress from "react-native-progress";
import { styles } from "@/constants/styles";
const Results = () => {
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

export default Results;
