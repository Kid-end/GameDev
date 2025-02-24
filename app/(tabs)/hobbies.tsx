import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HobbiesScreen = () => {
  // Utility function to render hobbies
  const renderHobby = (iconName, color, text) => (
    <View style={styles.hobbyContainer} key={text}>
      <Icon name={iconName} size={20} color={color} />
      <Text style={styles.hobbyText}>{text}</Text>
    </View>
  );

  return (


    <ImageBackground 
      source={require('../../assets/hobbies.jpg')} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.heading}>🎯 My Hobbies</Text>
          <Text style={styles.infoText}>
            Beyond coding, I immerse myself in various hobbies that drive my creativity and passion.
          </Text>

          {/* Tech & Innovation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>💻 Tech & Innovation</Text>
            {renderHobby("code", "#2196F3", "Building Mobile & Web Apps")}
            {renderHobby("cogs", "#FF9800", "Exploring AI & Machine Learning")}
            {renderHobby("terminal", "#4CAF50", "Competitive Coding & Problem-Solving")}
          </View>

          {/* Creative Hobbies */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎨 Creative Hobbies</Text>
            {renderHobby("camera", "#E91E63", "Photography & Editing")}
            {renderHobby("music", "#9C27B0", "Playing Guitar & Music Production")}
            {renderHobby("paint-brush", "#673AB7", "Graphic Design & UI/UX")}
          </View>

          {/* Leisure & Adventure */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🌍 Leisure & Adventure</Text>
            {renderHobby("gamepad", "#3F51B5", "Gaming & Adventure Games")}
            {renderHobby("book", "#795548", "Reading Tech & Business Books")}
            {renderHobby("bicycle", "#FF5722", "Cycling & Outdoor Exploration")}
          </View>
        </View>
      </ScrollView>
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
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 22,
  },
  section: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  hobbyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  hobbyText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 8,
  },
});

export default HobbiesScreen;
