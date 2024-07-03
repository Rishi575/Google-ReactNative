import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Footer from './Components/Footer';

export default function App() {
  return (
    <KeyboardAvoidingView
     style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
      <View style={styles.container}>
        <View style={styles.Navbar}>
          <Navbar />
        </View>
        <View style={styles.Content}>
          <Content />
        </View>
        <View style={styles.Footer}>
          <Footer />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'static',
  },
  Navbar: {
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginTop: 50,
    position: 'static',
  },
  Content: {
    flex: 8,
    overflow: 'hidden',
    position: 'static',
  },
  Footer: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'static',
  },
});
