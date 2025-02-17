import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navItem}>home</Text>
        <Text style={styles.navItem}>about me</Text>
        <Text style={styles.navItem}>portfolio</Text>
      </View>

      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
        style={styles.profileImage}
      />

      <Text style={styles.heading}>
        Hi, I'm <Text style={styles.name}>Ivann</Text> 👋
      </Text>
      <Text style={styles.subheading}>I'm a Fulltank Stack Developer.</Text>

      <View style={styles.info}>
        <Text>☕ fueled by coffee</Text>
        <Text>🌍 based in the PH</Text>
        <Text>💼 Y8 GODs</Text>
        <Text>📧 ibadong@gbox.ncf.edu.ph</Text>
      </View>

      <View style={styles.socialIcons}>
        <TouchableOpacity><Icon name="facebook" size={30} /></TouchableOpacity>
        <TouchableOpacity><Icon name="instagram" size={30} /></TouchableOpacity>
        <TouchableOpacity><Icon name="github" size={30} /></TouchableOpacity>
        <TouchableOpacity><Icon name="linkedin" size={30} /></TouchableOpacity>
        <TouchableOpacity><Icon name="twitter" size={30} /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  navbar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20 },
  navItem: { fontSize: 16, color: 'gray' },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  heading: { fontSize: 24, fontWeight: 'bold' },
  name: { color: 'blue' },
  subheading: { fontSize: 18, color: 'gray' },
  info: { marginVertical: 10, alignItems: 'center' },
  socialIcons: { flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginTop: 10 },
});

export default ProfileScreen;
