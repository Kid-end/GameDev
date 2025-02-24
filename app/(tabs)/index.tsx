import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <ImageBackground source={require('../../assets/Lofi.jpg')} style={styles.background}>
      <View style={styles.overlay}>  
        {/* Profile Image */}
        <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />

        {/* Name & Title */}
        <Text style={styles.heading}>
          Hi, I'm <Text style={styles.name}>Ivann</Text> 👋
        </Text>
        <Text style={styles.subheading}>I'm a FullTank Developer.</Text>

        {/* Personal Info */}
        <View style={styles.info}>
          <Text style={styles.infoText}>☕ Fueled by coffee</Text>
          <Text style={styles.infoText}>🌍 Reppin PH</Text>
          <Text style={styles.infoText}>💼 Y8 GODs</Text>

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
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: { 
    width: 130, 
    height: 130, 
    borderRadius: 65, 
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  heading: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#fff',
    textAlign: 'center',
  },
  name: { 
    color: '#FFD700',
  },
  subheading: { 
    fontSize: 18, 
    color: '#ddd', 
    marginBottom: 15,
    textAlign: 'center',
  },
  info: { 
    marginVertical: 10, 
    alignItems: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    width: '90%',
  },
  infoText: { 
    fontSize: 16, 
    color: '#333', 
    marginBottom: 5,
    textAlign: 'center',
  },
  email: { 
    fontSize: 14, 
    color: '#0077B5', 
    fontWeight: 'bold', 
    marginTop: 5,
    textAlign: 'center',
  },
  socialIcons: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '75%', 
    marginTop: 20,
  },
  icon: { 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 50, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  }
});

export default ProfileScreen;
