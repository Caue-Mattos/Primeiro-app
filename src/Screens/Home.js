import { StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Stories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35,
  },
});