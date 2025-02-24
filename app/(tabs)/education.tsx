import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EducationScreen = () => {
  return (
    <ImageBackground 
      source={require('../../assets/educationimg.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.heading}>📖 My Education Journey</Text>

          <View style={styles.eduItem}>
            <Icon name="graduation-cap" size={20} color="#2E7D32" />
            <Text style={styles.eduText}>
              <Text style={styles.bold}>Julian B. Meliton</Text> – Elementary
            </Text>
          </View>

          <View style={styles.eduItem}>
            <Icon name="school" size={20} color="#FB8C00" />
            <Text style={styles.eduText}>
              <Text style={styles.bold}>Camarines Sur National High School</Text> – High School
            </Text>
          </View>

          <View style={styles.eduItem}>
            <Icon name="university" size={20} color="#1565C0" />
            <Text style={styles.eduText}>
              <Text style={styles.bold}>Naga City Foundation</Text> – 3rd Year, Computer Science
            </Text>
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
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    width: '90%',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  eduItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  eduText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
});

export default EducationScreen;
