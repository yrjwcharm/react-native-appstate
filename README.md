## react-native-appstate-listener

React Native appState hook is a custom [react hook](https://reactjs.org/docs/hooks-intro.html), built to handle iOS or Android or Harmony `appState` in your react component

#### 自定义 appState hooks 适用于三端[android/ios/harmony]

**_ AppState 可以告诉您应用程序是在前台还是后台，并在状态改变时通知您。 _**

#### rn 官方地址 appState <https://reactnative.dev/docs/appstate>

## 安装

`yarn add react-native-appstate-listener`

OR

`npm install --save react-native-appstate-listener`

---

## Example

```javascript
import React from "react";
import { Text, View } from "react-native";
import useAppState from "react-native-appstate-hook";

export default function App() {
  const appState = useAppState({
    onChange: (newAppState) =>
      console.warn("App state changed to ", newAppState),
    onForeground: () => console.warn("App went to Foreground"),
    onBackground: () => console.warn("App went to background"),
  });

  return (
    <View
      style={{
        textAlign: "center",
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>App State is: {appState}</Text>
    </View>
  );
}
```
