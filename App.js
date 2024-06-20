import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Komponen layar Home
// Layar ini menampilkan teks "Home Screen" dan tombol untuk navigasi ke layar Progate
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* Tombol untuk menavigasi ke layar Progate dengan membawa parameter "name" dan "language" */}
      <Button
        title="Pergi ke Progate"
        onPress={() =>
          navigation.navigate("Progate", {
            name: "Ninja Ken", // Parameter yang dikirim ke layar Progate
            language: "React Native", // Parameter yang dikirim ke layar Progate
          })
        }
      />
    </View>
  );
};

// Komponen layar Progate
// Layar ini menerima parameter "name" dan "language" dari layar Home dan menampilkannya
const ProgateScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate, {route.params.name}!</Text>
      <Text>Ayo belajar {route.params.language}!</Text>
      {/* Tombol untuk kembali ke layar sebelumnya (Home) */}
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Membuat stack navigator
const Stack = createNativeStackNavigator();

// Komponen utama aplikasi
// Menyediakan konteks navigasi dan mendefinisikan layar-layar yang ada di dalam stack navigator
const App = () => {
  return (
    <NavigationContainer>
      {/* Menentukan initial route ke layar Home */}
      <Stack.Navigator initialRouteName="Home">
        {/* Mendefinisikan layar Home dalam stack navigator */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Mendefinisikan layar Progate dalam stack navigator */}
        <Stack.Screen name="Progate" component={ProgateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Gaya untuk komponen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Mengisi seluruh ruang layar
    alignItems: "center", // Mengatur komponen di tengah secara horizontal
    justifyContent: "center", // Mengatur komponen di tengah secara vertikal
  },
});

// Ekspor komponen App sebagai default export
export default App;
