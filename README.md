# 🦊 Snow Fox Lab – Expo Starter Project

Welcome to the **Snow Fox Lab Expo Starter Template**!  
This project helps interns quickly get started with **React Native (Expo)**, using **React Navigation**, **screens**, and a clean base layout.

---

## 📦 Project Overview

This template includes:

- ✅ Expo SDK 51+
- ✅ React Navigation setup with Stack Navigator
- ✅ Basic screens (`HomeScreen`, `ProfileScreen`)
- ✅ Preconfigured assets for icon and splash
- ✅ Clean light UI ready to extend

---

## 🧠 Prerequisites

Before starting, make sure you have the following installed:

| Tool           | Description             | Download                                                |
| -------------- | ----------------------- | ------------------------------------------------------- |
| Node.js (v18+) | JavaScript runtime      | [nodejs.org](https://nodejs.org/en/download)            |
| Git            | Version control         | [git-scm.com](https://git-scm.com/)                     |
| Expo CLI       | Run and build Expo apps | `npm install -g expo-cli`                               |
| VS Code        | Recommended code editor | [code.visualstudio.com](https://code.visualstudio.com/) |

---

## ⚙️ Setup Instructions

**1️⃣ Clone or Fork the Repo**

```bash
git clone https://github.com/snowfoxlab/snowfoxlab-expo-starter.git
cd snowfoxlab-expo-starter
npm install
```

**2️⃣ Start the App**

```bash
npx expo start
```

- Press `a` for Android emulator
- Press `w` for web view
- Press `r` to reload

---

## 🧩 Folder Structure

```
snowfoxlab-expo-starter/
├── assets/
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   └── favicon.png
├── screens/
│   ├── HomeScreen.js
│   └── ProfileScreen.js
├── components/
│   └── Button.js
├── App.js
├── app.json
├── package.json
└── README.md
```

---

## 📱 Navigation Setup

The app uses React Navigation (Stack Navigator):

```javascript
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTitleStyle: { fontWeight: "bold", color: "#000" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## 🧠 Common Errors & Fixes

**❌ UnableToResolveError: useFocusEffect.js not found**

➡️ **Fix:**

```bash
rm -rf node_modules package-lock.json
npm install
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npx expo start -c
```

---

## 🧩 Screens

### 🏠 HomeScreen.js

```javascript
import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        🏠 Welcome to Snow Fox Lab
      </Text>
      <Button
        label="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
```

### 👤 ProfileScreen.js

```javascript
import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>👤 Profile Screen</Text>
      <Button
        label="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
```

---

## 🔘 Button Component

**components/Button.js**

```javascript
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
```

---

## 🎨 Assets Configuration

**app.json**

<!-- ```json
app.json

``` -->

---

## 🚀 Intern Tasks

- ✅ Fork this repo
- ✅ Set up the project and run successfully
- ✅ Add a new screen (e.g., `AboutScreen.js`)
- ✅ Commit & push changes to your fork
- ✅ Share your fork link in the `#mobile-intern` Slack channel

---

## 🦊 Snow Fox Lab Pvt. Ltd.

**"Helping learners grow through real projects."**

For questions or guidance, reach out in the `#mobile-intern` Slack channel.
