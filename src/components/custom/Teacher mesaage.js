import React from 'react';
import { View } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/TeacherMessage';
import TaskbinList from './src/components/custom/TaskbinList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';

export default function App() {
  return (
    <View style={styles.container}>
      <AboutMe name="Muhammad Ibrahim Afzal" regNo="Sp23-BSE-060" />
      <TeacherMessage />
      {/* Added below AboutMe */}
      <TaskbinList />
      <SearchAndAdd />
    </View>
  );
}
