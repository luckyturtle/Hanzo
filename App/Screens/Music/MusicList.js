import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from 'react-native-paper';
import { Spinner } from 'native-base';
import Separator from '../../Components/Separator';
import { useGlobals } from '../../contexts/Global';

import styles from './MusicListStyle';

// import { useGlobals } from '../../contexts/Global';
// const [musics, setMusics] = React.useState([
//   {
//     id: '1',
//     url:
//       'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
//     type: 'default',
//     title: 'My Title',
//     album: 'My Album',
//     artist: 'Rohan Bhatia',
//     artwork: 'https://picsum.photos/100',
//  },
//  {
//    id: '2',
//    url:
//      'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
//    type: 'default',
//    title: 'New Title',
//    album: 'New Album',
//    artist: 'Liu Xing',
//    artwork: 'https://picsum.photos/100',
// }
// ]);

const MusicList = ({ navigation }) => {
  const theme = useTheme();
  const [{ musicList }, dispatch] = useGlobals();
  const [loading, setLoading] = React.useState(false);
  console.log(musicList);
  //  console.log(musicList);
  React.useEffect(() => {
  }, []);

  if (loading) {
    return <Spinner style={{ margin: 15 }} />;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
      <View style={[styles.inputContainer, { flex: 1, width: '100%' }]}>
        <View style={styles.listContainer}>
          <FlatList
            data={musicList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('MusicPlayer', { music: item })}>
                <View style={styles.row}>
                  <View style={styles.content}>
                    <View style={styles.header}>
                      <Text style={styles.nameText}>{item.title}</Text>
                    </View>
                    <Text style={styles.contentText}>
                      {item.album + '     ' + item.artist}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicList;