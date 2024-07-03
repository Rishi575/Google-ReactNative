import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.header}>
      <View style={styles.horiz}>
        <TouchableOpacity onPress={() => openLink('https://mail.google.com/mail/u/0/')}>
          <Text style={styles.link}>Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.google.com/imghp?hl=en&ogbl')}>
          <Text style={styles.link}>Images</Text>
        </TouchableOpacity>
        <View style={styles.svg}>
          <View style={styles.dot}>
            <Image
              source={require('../assets/Images/dot.png')}
              style={styles.image}
            />
            <View style={styles.tooltip}>
              <Text style={styles.tooltiptext}>Tooltip</Text>
            </View>
          </View>
          <View style={styles.gb_Vd}>
            <View style={styles.gb_f}>
              <TouchableOpacity
                onPress={() => openLink('https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://www.google.com/&amp;ec=GBRAmgQ')}
                style={styles.accountLink}
              >
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/ogw/AF2bZygkDwWA_m9C90doYcAt-YYPIjhz_o6OnB2hu6TYf5ypHFg=s32-c-mo' }}
                  style={styles.accountImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const openLink = (url) => {
  console.log('Opening URL:', url);
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 48,
    width: '100%',
    position: 'static',
    backgroundColor: '#FFF',
  },
  horiz: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    color: '#202124',
    textDecorationLine: 'none',
    cursor: 'pointer',
    marginRight: 20,
    fontSize: 14,
  },
  svg: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dot: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 28,
    height: 28,
  },
  tooltip: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    visibility: 'hidden',
    width: 80,
    height: 12,
    backgroundColor: '#696767',
    color: 'white',
    textAlign: 'center',
    borderRadius: 6,
    padding: 6,
    top: '110%',
    left: '50%',
    transform: [{ translateX: -50 }],
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  tooltiptext: {
    textAlign: 'center',
    color: '#fff',
  },
  gb_Vd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gb_f: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  accountLink: {
    borderRadius: 50,
  },
  accountImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Navbar;
