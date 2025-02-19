import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Asset } from 'expo-asset';
const ProfileScreen = () => {
  return (
    
    
    <ImageBackground 
    
    source={require('../../assets/Lofi.jpg')} 
    style={styles.background}
  >
      <View style={styles.overlay}>  
        {/* Profile Image */}
        <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />

        {/* Name & Title */}
        <Text style={styles.heading}>
          Hi, I'm <Text style={styles.name}>Ivann</Text> 👋
        </Text>
        <Text style={styles.subheading}>I'm a Fulltank Stack Developer.</Text>

        {/* Personal Info */}
        <View style={styles.info}>
          <Text style={styles.infoText}>☕ fueled by coffee</Text>
          <Text style={styles.infoText}>🌍 based in the PH</Text>
          <Text style={styles.infoText}>💼 Y8 GODs</Text>
          <Text style={styles.email}>📧 ibadong@gbox.ncf.edu.ph</Text>
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.icon}><Icon name="facebook" size={30} color="#4267B2" /></TouchableOpacity>
          <TouchableOpacity style={styles.icon}><Icon name="instagram" size={30} color="#E1306C" /></TouchableOpacity>
          <TouchableOpacity style={styles.icon}><Icon name="github" size={30} color="#000" /></TouchableOpacity>
          <TouchableOpacity style={styles.icon}><Icon name="twitter" size={30} color="#1DA1F2" /></TouchableOpacity>
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
    height: '100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Makes sure overlay covers entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay to improve text contrast
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: { 
    width: 130, 
    height: 130, 
    borderRadius: 65, 
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ddd'
  },
  heading: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#fff' // Changed to white for better contrast
  },
  name: { 
    color: '#FFD700' // Gold color to make the name pop
  },
  subheading: { 
    fontSize: 18, 
    color: '#ddd', 
    marginBottom: 15
  },
  info: { 
    marginVertical: 10, 
    alignItems: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.75)', // Slightly transparent background
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  },
  infoText: { 
    fontSize: 16, 
    color: '#333', 
    marginBottom: 5 
  },
  email: { 
    fontSize: 14, 
    color: '#0077B5', 
    fontWeight: 'bold', 
    marginTop: 5 
  },
  socialIcons: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '80%', 
    marginTop: 15 
  },
  icon: { 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 50, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  }
});

export default ProfileScreen;
