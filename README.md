# Requirements

## Windows
- `choco install nodejs-lts` (node 16.14.2 has been tested)
- `npm install expo-cli` (expo-cli 5.3.0 has been tested)
- `expo install react-native-webview` (Not required)

## Linux
- `Use OS package manager of choice (apt-get install nodejs)`
- `npm install expo-cli`
- `expo install react-native-webview`  (Not required)

## Mobile
- Download `Expo Go` on your IOS/Android device (to test and view changes).


## CI/CD (coming soon)
- expo cli
- eas build
- github actions


## Run the Application
- clone the repo locally `git clone`
- run `npm install` in the repo folder
- `expo start`
- Scan QR Code with mobile device to test mobile.
- Type 'w' to view web version.


### Releases
#### 0.1.0 RC 1 - Basic app completed - Tyler Harpool
 - Minimum Viable Product (Release 0.1.0 RC1)
 - Render markdown from github
 - React Navigation v6
 - React Native Paper

#### 0.0.1 - Tyler Harpool
- Proof of concept, shows that you can render html page from the web using a native web view.
- Has basic navigation, but will require more work.
- Shows that a web app could be developed side-by-side with relative ease.
- Dependencies all up to date, and readme updated with basic how-to

## Roadmap
- Better thought of navigation to account for 56+ titles.
- Look into rendering html using something better than https://magic.reactjs.net/htmltojsx.htm, perhaps `react-native-render-html`

## How we do versioning
On every release we will use changeset to handle our changelog automatically. We will see changes in `CHANGELOG.md` and `./changeset`
1. `npx changeset`
2. `npx changeset version` (test version)
3. `npx changeset publish` (publish to changelog)
4. `git add -m "Release X - Description"`


## More infomation
- [USCode](https://www.govinfo.gov/app/collection/uscode/2020/)
- [HTML to JSX](https://magic.reactjs.net/htmltojsx.htm)
- [React Native Render HTML](https://meliorence.github.io/react-native-render-html/)
- [React Native WebView docs](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md)
- [React Native Offline](https://github.com/rgommezz/react-native-offline)
- [Adding offline support to RNWeb](https://github.com/expo/fyi/blob/main/enabling-web-service-workers.md)
- [Expo Progressive App Docs](https://docs.expo.dev/guides/progressive-web-apps/)

# Potential Solutions
[Expo Filesystem API](https://stackoverflow.com/questions/67271875/expo-download-file-filesystem-download-async-method-post-with-body)
- Could use this to grab PDF's, or offer PDF viewing offline.