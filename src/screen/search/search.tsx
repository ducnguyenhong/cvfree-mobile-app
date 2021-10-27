import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { StatusBar, TextInput, View, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './search.styles';

export const SearchScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <SafeAreaView style={styles.vContainer}>
      <StatusBar barStyle="light-content" backgroundColor="blue" translucent />
      <View style={styles.vSearchBar}>
        <Icon
          name="chevron-left"
          style={styles.icBack}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          placeholder="Enter keyword"
          ref={inputRef}
          style={styles.ipSearch}
        />
      </View>
    </SafeAreaView>
  );
};
