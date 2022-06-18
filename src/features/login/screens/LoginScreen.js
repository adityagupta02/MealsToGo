import React, { useEffect, useState } from "react";
import {StyleSheet, Text, TextInput,  TouchableOpacity, View, ImageBackground} from "react-native";
import { auth } from "../../../services/firebase/firebase";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[isLoading, setIsloading]=useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("AppNavigator");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    setIsloading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setIsloading(false);
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => {setIsloading(false); alert(error.message)});
  };

  const handleLogin = () => {
    setIsloading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setIsloading(false);
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => {setIsloading(false); alert(error.message)});
  };

  const image = {
    uri: "https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg?w=2000",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        {isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25, zIndex:99 }}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <AntDesign name={"lock"} size={20} color="white" />
            <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>  Login</Text>
          </TouchableOpacity>
          <Text style={{ margin: 10, marginTop: 50, justifyContent:'center' }}>
            New User? Register Here
          </Text>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <AntDesign name={"lock"} size={20} color="#0782F9" />
            <Text style={{ color: "#0782F9", fontWeight: "700", fontSize: 16 }}>  Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    flexDirection: "row",
    justifyContent:'center',
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
});
