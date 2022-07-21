import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const FocusHistory = ({ history }) => {
  if(!history || history.length == 0){
    return (<Text style={styles.title}>There is no Focus history yet!</Text>)
  }

  const renderItem = ({item}) => {
    return <Text style={styles.item}>- {item}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    paddingTop: spacing.md,
  },
});
