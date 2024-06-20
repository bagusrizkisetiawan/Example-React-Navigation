# React Native Navigation Example

This is a simple React Native application demonstrating basic navigation using `@react-navigation/native` and `@react-navigation/native-stack`.

## Features

- Navigation between two screens: Home and Progate.
- Passing parameters between screens.
- Basic usage of the `navigation` and `route` props provided by React Navigation.

## Screens

### Home Screen

The Home Screen contains:

- A text label "Home Screen".
- A button labeled "Pergi ke Progate" that navigates to the Progate Screen with parameters `name` and `language`.

### Progate Screen

The Progate Screen contains:

- A greeting text "Welcome to Progate, [name]!" where `[name]` is a parameter passed from the Home Screen.
- A text "Ayo belajar [language]!" where `[language]` is a parameter passed from the Home Screen.
- A button labeled "Kembali" that navigates back to the Home Screen.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- React Native CLI or Expo CLI installed.
- Android Studio or Xcode for running the application on an emulator or physical device.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/react-native-navigation-example.git
   cd react-native-navigation-example
   ```
