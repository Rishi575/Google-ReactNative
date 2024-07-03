import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Keyboard } from 'react-native';

const Content = () => {
  const [query, setQuery] = useState('');

  const performSearch = () => {
    if (query.trim() !== '') {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      Linking.openURL(url).catch(err => console.error('An error occurred', err));
      console.log('Opening URL:', url);
    }
  };

  const feelingLucky = () => {
    const url = 'https://doodles.google/';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
    console.log('Opening URL:', url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/logo.png')}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          autoFocus
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={performSearch}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={performSearch}>
          <Text style={styles.buttonText}>Google Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={feelingLucky}>
          <Text style={styles.buttonText}>I'm Feeling Lucky</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.langContainer}>
        <Text>Google offered in:</Text>
        <TouchableOpacity onPress={() => console.log('Switch to Hindi')}>
          <Text style={styles.langLink}>हिन्दी</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Bengali')}>
          <Text style={styles.langLink}>বাংলা</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Telugu')}>
          <Text style={styles.langLink}>తెలుగు</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Marathi')}>
          <Text style={styles.langLink}>मराठी</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Tamil')}>
          <Text style={styles.langLink}>தமிழ்</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Gujarati')}>
          <Text style={styles.langLink}>ગુજરાતી</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Kannada')}>
          <Text style={styles.langLink}>ಕನ್ನಡ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Malayalam')}>
          <Text style={styles.langLink}>മലയാളം</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Switch to Punjabi')}>
          <Text style={styles.langLink}>ਪੰਜਾਬੀ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 272,
    height: 92,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 16,
    width: '100%',
    borderRadius:50,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderColor: 'black',
    backgroundColor: '#f8f9fa',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  langContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  langLink: {
    marginHorizontal: 4,
    color: '#4285f4',
    textDecorationLine: 'underline',
  },
});

export default Content;
