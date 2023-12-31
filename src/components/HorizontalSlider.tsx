import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {FlatList, Text, View} from 'react-native';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 260}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginLeft: 10,
          color: 'black',
        }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
