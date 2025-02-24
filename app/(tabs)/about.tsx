import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutMeScreen = () => {
  return (
    <ImageBackground 
      source={require('../../assets/aboutimg.jpg')} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        {/* About Me Card */}
        <View style={styles.card}>
          <Text style={styles.heading}>🙋‍♂️ About Me</Text>
          <Text style={styles.infoText}>
            Hi! I'm <Text style={styles.highlight}>Ivann</Text>, a <Text style={styles.bold}>3rd-year Computer Science student</Text> 
            passionate about coding, problem-solving, and innovation.
          </Text>

          {/* Job Info (Moved Outside Text) */}
          <View style={styles.jobContainer}>
            <Icon name="briefcase" size={18} color="#4CAF50" />
            <Text style={styles.jobText}> Part-time Question Analyst @ Genius Giants</Text>
          </View>

          <Text style={styles.infoText}>
            I specialize in <Text style={styles.bold}>React Native</Text>, creating mobile applications that enhance user experiences.  
            My goal? <Text style={styles.bold}>To build efficient, user-friendly, and impactful applications.</Text>
          </Text>

          {/* What I Do Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What I Do</Text>
            <Text style={styles.sectionText}>💻 Web & Mobile Development</Text>
            <Text style={styles.sectionText}>🚀 UI/UX & Responsive Design</Text>
            <Text style={styles.sectionText}>🔧 API & Backend Integration</Text>
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <TouchableOpacity style={styles.project}>
              <Text style={styles.projectTitle}>🔹 Rental Search Platform</Text>
              <Text style={styles.projectText}>A platform that simplifies finding rentals using AI-powered search.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.project}>
              <Text style={styles.projectTitle}>🔹 Personal Portfolio</Text>
              <Text style={styles.projectText}>My website showcasing projects & skills.</Text>
            </TouchableOpacity>
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
  highlight: {
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
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
  sectionText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
    textAlign: 'center',
  },
  jobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  jobText: {
    fontSize: 15,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginLeft: 6,
    textAlign: 'center',
  },
  project: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  projectText: {
    fontSize: 14,
    color: '#222',
    textAlign: 'center',
  },
});

export default AboutMeScreen;
