import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Footer = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <View style={[styles.footer, darkTheme ? styles.footerDark : null]}>
      <Text style={[styles.country, darkTheme ? styles.textDark : null]}>India</Text>
      <View style={styles.countryinfo}>
        <View style={styles.start}>
          <TouchableOpacity onPress={() => Linking.openURL('https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1')}>
            <Text style={[styles.link, darkTheme ? styles.linkDark : null]}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1')}>
            <Text style={[styles.link, darkTheme ? styles.linkDark : null]}>Advertising</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/intl/en_in/business/')}>
            <Text style={[styles.link, darkTheme ? styles.linkDark : null]}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/search/howsearchworks/?fg=1')}>
            <Text style={[styles.link, darkTheme ? styles.linkDark : null]}>How Search Works</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.end}>
          <TouchableOpacity onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=en-IN&fg=1')}>
            <Text style={[styles.link, darkTheme ? styles.linkDark : null]}>Privacy</Text>
          </TouchableOpacity>
         

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: '#f1f1f1',
  },
  footerDark: {
    backgroundColor: '#333',
  },
  country: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
  },
  textDark: {
    color: '#fff',
  },
  countryinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  start: {
    flexDirection: 'row',
  },
  end: {
    flexDirection: 'row',
    textDecorationLine:'none',
  },
  link: {
    marginHorizontal: 7,
    color:'black',
  },
  linkDark: {
    textDecorationLine: 'underline',
    textDecorationColor:'black',
    backgroundColor:'pink',
  },
  dropdown: {
    position: 'relative',
  },
  dropbtn: {
    color: '#1a0dab',
    textDecorationLine: 'underline',
  },
  dropdownContent: {
    position: 'absolute',
    top: 20,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    zIndex: 1,
  },
  dropdownContentDark: {
    backgroundColor: '#555',
    borderColor: '#777',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
});

export default Footer;
