import { StyleSheet, View, Text } from "react-native";

export default function CountryCard(props) {
  return (
    <View style={styles.country}>
      <View style={styles.countryFlag}>
        <Text style={styles.countryName}>{props.name}</Text>
        <Text>{props.flag}</Text>
      </View>
      <Text>{props.capital}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  country: {
    marginBottom: 20,
  },
  countryFlag: {
    display: "inline",
  },
  countryName: {
    fontWeight: "bold",
    paddingRight: 10,
  },
});
