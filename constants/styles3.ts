import { StyleSheet } from "react-native";
import { COLORS } from "./Constant"; // Asegúrate de que esta ruta es correcta

export const styles = StyleSheet.create({
  // Estilos compartidos de Home, Login, Registration, UserDashboard, LanguageSelection y Completion
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.bgBeige,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    width: "70%",
    resizeMode: "contain",
    fontSize: 24,
    fontWeight: "bold",
    color: "#3a6550",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.verdeoscuro,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginVertical: 20,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.black,
  },
  registerText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  euImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    marginTop: 20,
  },

  // Estilos específicos de LanguageSelection y Completion
  languageList: {
    marginTop: 16,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d0c4b1",
  },
  languageText: {
    fontSize: 18,
    color: "#000",
  },
  selectedLanguageText: {
    fontWeight: "bold",
  },
  flagIcon: {
    width: 24,
    height: 16,
    resizeMode: "contain",
  },

  // Estilos específicos de Login, Registration, UserDashboard y Completion
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
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },

  // Estilos específicos de UserDashboard y Completion
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuText: {
    textAlign: "center",
    alignContent: "center",
    fontSize: 18,
    color: "#000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  testButton: {
    backgroundColor: COLORS.verdeoscuro,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  testButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Estilos específicos de Completion y Encuesta
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  congratulationsText: {
    fontSize: 24,
    color: COLORS.verdeoscuro,
    marginBottom: 10,
  },
  completionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 40,
  },

  // Estilos específicos de Encuesta
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
    backgroundColor: COLORS.verdeoscuro,
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

  // Estilos específicos de SelectForm
  selectContainer: {
    width: "100%",
    marginBottom: 20,
  },
  selectLabel: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
  },
  selectInput: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
    justifyContent: "center",
  },
  selectText: {
    fontSize: 16,
    color: COLORS.black,
  },

  // Estilos específicos de Advice
  adviceContainer: {
    flex: 1,
    backgroundColor: COLORS.bgBeige,
    padding: 20,
  },
  adviceTitle: {
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

  // Estilos específicos de Consejos
  consejosContainer: {
    flex: 1,
    backgroundColor: COLORS.bgBeige,
    padding: 20,
  },
  consejosHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  consejosHeaderImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  consejosUserIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  consejosTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginBottom: 20,
  },
  consejosAdviceContainer: {
    paddingHorizontal: 10,
  },
  consejosAdviceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },

  // Estilos específicos de Results
  resultsContainer: {
    flex: 1,
    backgroundColor: COLORS.bgBeige,
    padding: 20,
  },
  resultsTitle: {
    fontSize: 24,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginBottom: 20,
  },
  resultsResultContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  resultsResultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  resultsChartContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  resultsPercentageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  resultsTotalScoreTitle: {
    fontSize: 20,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginTop: 20,
  },
  resultsTotalScore: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 40,
  },
  resultsModifyButton: {
    backgroundColor: COLORS.verdeoscuro,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  resultsModifyButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  adviceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
});
