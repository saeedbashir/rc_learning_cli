import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import colors from "../theme/colors";

type MovieCardProps = {
  movie: {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
    poster: string;
  };
  onPress: () => void;
};

export default function MovieCard({ movie, onPress }: MovieCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.details}>
          {movie.genre} | {movie.year}
        </Text>
        <Text style={styles.rating}>⭐ {movie.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  details: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 6,
  },
});
