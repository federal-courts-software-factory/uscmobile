# Requirements

## Windows
- `choco install nodejs-lts` (node 16.14.2 has been tested)
- `npm install expo-cli`
- `expo install react-native-webview`

## Linux
- `Use OS package manager of choice (apt-get install nodejs)`
- `npm-install expo-cli`
- `expo install react-native-webview`

## Mobile
- Download `Expo Go` on your IOS/Android device (to test and view changes).


## CI/CD (coming soon)
- expo cli
- eas build
- github actions


## Run the Application
- `expo start`
- Scan QR Code with mobile device to test.


### Releases
#### 0.0.1 - Tyler Harpool
- Proof of concept, shows that you can render html page from the web using a native web view.
- Has basic navigation, but will require more work.
- Shows that a web app could be developed side-by-side with relative ease.
- Dependencies all up to date, and readme updated with basic how-to

## Roadmap
- Better thought of navigation to account for 56+ titles.
- Look into rendering html using something better than https://magic.reactjs.net/htmltojsx.htm, perhaps `react-native-render-html`
