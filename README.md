# Argyle Quick Verification React Native App

## App Features and Use Cases

Argyle Quick Verification App is intended for companies looking to get up and running with an Argyle MVP app.  This app allows a company to:

1. Quickly link users employment accounts (supports linking multiple accounts)
2. Use the Argyle dashboard to view and access a users payout and employment history data
3. Get your MVP up and running in just a few days.

## Argyle Integration

### Adding the SDK dependency

`$ npm install @argyleio/argyle-plugin-react-native --save` or `$ yarn add @argyleio/argyle-plugin-react-native`

### SDK Configuration

Create the `PLUGIN_KEY` and `API_HOST` env variables in a .env file in order to configure the SDK using the `loginWith` function. Depending on the bussiness logic, functions like `onUserCreated`, `onAccountCreated`, `onAccountConnected`, `addIncomeSourceLinkVisible` can be used. More functions available [here](https://argyle.com/docs/argyle-link/react-native-integration).

### SDK Launch

Argyle Link can be invoked anywhere within the application. When invoked, your users will be displayed with a list of companies and platforms. From this list, users can select, grant, and send their employment records to the application. To launch the SDK `ArgyleSdk.start()` will be used.

## Available Scripts

In the project directory, you can run:

### `react-native run-ios`

If everything is set up correctly, runs the app in the iOS Simulator.
Make sure you have `libswiftWebKit.tbd` in your XCode project(Build Phases -> Link Binary With Libraries).

The page will reload if you make edits. You will also see any errors in the console.

### `react-native run-android`

Launches the app on an Android device if `USB Debugging` is enabled inside the `Developer Options` or on Android Studio emulator.
See the section about [running on device](https://reactnative.dev/docs/running-on-device) for more information.

## Learn More

You can learn more in the [Create React Native App documentation](https://reactnative.dev/docs/0.60/getting-started).

### Need help setting this up, or want someone to do it for you? Visit https://scopeinc.com/vendors/argyle to be matched with an Argyle Expert. This app can be customized and deployed in a few days with rates starting from $500.
