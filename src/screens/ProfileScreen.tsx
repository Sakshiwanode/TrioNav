import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileScreen;
