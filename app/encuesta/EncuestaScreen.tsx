import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/Colors";
import TopBar from "@/components/TopBar";

const EncuestaScreen = () => {
  const router = useRouter();
  const [responses, setResponses] = useState({
    dopCertification: null,
    carbonFootprintCertification: null,
    slowGrowthBreeds: null,
    waterSavingPlan: null,
    waterConsumptionLog: null,
    waterPressureSystem: null,
    externalSupply: null,
    manureRemoval: null,
    agriculturalProgram: null,
    manureBuried24h: null,
    manureBuriedUnder24h: null,
  });

  const handleCheckboxChange = (key: string, value: boolean) => {
    setResponses((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <Text style={styles.title}>Certificaciones</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          1. Denominación de origen protegida (DOP) o similar.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.dopCertification === true}
              onValueChange={() =>
                handleCheckboxChange("dopCertification", true)
              }
              color={
                responses.dopCertification === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.dopCertification === false}
              onValueChange={() =>
                handleCheckboxChange("dopCertification", false)
              }
              color={
                responses.dopCertification === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          2. Certificación de la huella de carbono.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.carbonFootprintCertification === true}
              onValueChange={() =>
                handleCheckboxChange("carbonFootprintCertification", true)
              }
              color={
                responses.carbonFootprintCertification === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.carbonFootprintCertification === false}
              onValueChange={() =>
                handleCheckboxChange("carbonFootprintCertification", false)
              }
              color={
                responses.carbonFootprintCertification === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>3. Razas de crecimiento lento.</Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.slowGrowthBreeds === true}
              onValueChange={() =>
                handleCheckboxChange("slowGrowthBreeds", true)
              }
              color={
                responses.slowGrowthBreeds === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.slowGrowthBreeds === false}
              onValueChange={() =>
                handleCheckboxChange("slowGrowthBreeds", false)
              }
              color={
                responses.slowGrowthBreeds === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Gestión del agua</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          1. Existe un plan de ahorro de agua (potable y de limpieza).
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.waterSavingPlan === true}
              onValueChange={() =>
                handleCheckboxChange("waterSavingPlan", true)
              }
              color={
                responses.waterSavingPlan === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.waterSavingPlan === false}
              onValueChange={() =>
                handleCheckboxChange("waterSavingPlan", false)
              }
              color={
                responses.waterSavingPlan === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          2. Existe un registro del consumo de agua.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.waterConsumptionLog === true}
              onValueChange={() =>
                handleCheckboxChange("waterConsumptionLog", true)
              }
              color={
                responses.waterConsumptionLog === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.waterConsumptionLog === false}
              onValueChange={() =>
                handleCheckboxChange("waterConsumptionLog", false)
              }
              color={
                responses.waterConsumptionLog === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          3. Existe un sistema de agua a presión para la limpieza.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.waterPressureSystem === true}
              onValueChange={() =>
                handleCheckboxChange("waterPressureSystem", true)
              }
              color={
                responses.waterPressureSystem === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.waterPressureSystem === false}
              onValueChange={() =>
                handleCheckboxChange("waterPressureSystem", false)
              }
              color={
                responses.waterPressureSystem === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          4. Necesidad de suministros externos en los últimos 10 años (rellene
          sólo 1 casilla)
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> 1 verano </Text>
            <Checkbox
              value={responses.externalSupply === true}
              onValueChange={() => handleCheckboxChange("externalSupply", true)}
              color={
                responses.externalSupply === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> 2 o más veranos </Text>
            <Checkbox
              value={responses.externalSupply === false}
              onValueChange={() =>
                handleCheckboxChange("externalSupply", false)
              }
              color={
                responses.externalSupply === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Manejo del estiércol</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          7. El estiércol se retira lo antes posible tras el acabado.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.manureRemoval === true}
              onValueChange={() => handleCheckboxChange("manureRemoval", true)}
              color={
                responses.manureRemoval === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.manureRemoval === false}
              onValueChange={() => handleCheckboxChange("manureRemoval", false)}
              color={
                responses.manureRemoval === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          8. Existe un programa agrícola para esparcir el estiércol (lugar,
          dosis, hora, fecha...)
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.agriculturalProgram === true}
              onValueChange={() =>
                handleCheckboxChange("agriculturalProgram", true)
              }
              color={
                responses.agriculturalProgram === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.agriculturalProgram === false}
              onValueChange={() =>
                handleCheckboxChange("agriculturalProgram", false)
              }
              color={
                responses.agriculturalProgram === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          9. El estiércol se entierra lo antes posible &lt;24h.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.manureBuried24h === true}
              onValueChange={() =>
                handleCheckboxChange("manureBuried24h", true)
              }
              color={
                responses.manureBuried24h === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.manureBuried24h === false}
              onValueChange={() =>
                handleCheckboxChange("manureBuried24h", false)
              }
              color={
                responses.manureBuried24h === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          10. El estiércol se entierra lo antes posible &lt;24h.
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> Si </Text>
            <Checkbox
              value={responses.manureBuriedUnder24h === true}
              onValueChange={() =>
                handleCheckboxChange("manureBuriedUnder24h", true)
              }
              color={
                responses.manureBuriedUnder24h === true
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
          <View style={styles.checkboxItem}>
            <Text style={styles.checkboxText}> No </Text>
            <Checkbox
              value={responses.manureBuriedUnder24h === false}
              onValueChange={() =>
                handleCheckboxChange("manureBuriedUnder24h", false)
              }
              color={
                responses.manureBuriedUnder24h === false
                  ? COLORS.verdeoscuro
                  : undefined
              }
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          {
            backgroundColor: Object.values(responses).every(
              (value) => value !== null
            )
              ? COLORS.verdeoscuro
              : COLORS.borderGray,
          },
        ]}
        onPress={() => router.push("/encuesta/CompletionScreen")}
        disabled={Object.values(responses).some((value) => value === null)}
      >
        <Text style={styles.submitButtonText}>Enviar Respuestas</Text>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  userIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  checkboxText: {
    marginRight: 10,
    textAlign: "center",
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EncuestaScreen;
