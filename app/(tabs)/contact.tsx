import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactScreen = () => {
  return (
    <ImageBackground 
      source={require('../../assets/contact.jpg')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Contact Card */}
        <View style={styles.card}>
          <Text style={styles.heading}>Contact Me</Text>
          
          {/* Email */}
          <TouchableOpacity onPress={() => Linking.openURL('mailto:Ibadong@gbox.ncf.edu.ph')}>
            <Text style={styles.infoText}>📧 Ibadong@gbox.ncf.edu.ph</Text>
          </TouchableOpacity>

          {/* Phone */}
          <TouchableOpacity onPress={() => Linking.openURL('tel:09222555100')}>
            <Text style={styles.infoText}>📞 0922-255-5100</Text>
          </TouchableOpacity>

          {/* Social Media Links */}
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Kid-end')}>
              <Icon name="github" size={30} color="#000" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/ivannzbadong?rdid=aJ3txJJTlAeWUq0D&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ezz1AuXa#')}>
              <Icon name="facebook" size={30} color="#4267B2" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    width: '75%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ContactScreen;
