import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/Constant";
import TopBar from "@/components/TopBar";

const SelectForm = () => {
  const router = useRouter();
  const [selectedFarm, setSelectedFarm] = React.useState("");

  return (
    <View style={styles.container}>
      <TopBar />
      <Text style={styles.title}>
        Selecciona la finca con la cuál realizar hacer el test
      </Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedFarm}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedFarm(itemValue)}
        >
          <Picker.Item label="Finca 1" value="finca1" />
          <Picker.Item label="Finca 2" value="finca2" />
          <Picker.Item label="Finca 3" value="finca3" />
        </Picker>
      </View>
      <Text style={styles.questionText}>¿Eres ecológico?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.yesButton}
          onPress={() => router.push("/resultados/AdviceScreen2")}
        >
          <Text style={styles.buttonText}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.noButton}
          onPress={() => router.push("./EncuestaScreen")}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectForm;
