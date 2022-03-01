import { StyleSheet, View, Text } from "react-native";

export default function CountryCard(props) {
  return (
    <View style={styles.country} index={props.index}>
      <View style={styles.countryFlag}>
        <Text style={styles.countryName}>{props.name}</Text>
        <Text>{props.flag}</Text>
      </View>
      <Text style={styles.capital}>{props.capital}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    height: 200,
    textAlign: "center",
    paddingTop: 60,
  },
  countryFlag: {
    display: "inline",
  },
  countryName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 10,
  },
  capital: {
    fontSize: 20,
  },
});
