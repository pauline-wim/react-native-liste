import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import CountryCard from "./CountryCard";

export default function List() {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [displayCard, setDisplayCard] = useState(false);

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
    setLoaded((prev) => !prev);
  };

  const handlePress = () => {
    setDisplayCard(true);
    return setTimeout(() => {
      setDisplayCard(false);
    }, 2000);
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity onPress={handlePress}>
          {displayCard ? (
            <CountryCard
              name={item.name.common}
              flag={item.flag}
              capital={item.capital}
            />
          ) : (
            <Image style={styles.flag} source={{ uri: item.flags.png }} />
          )}
        </TouchableOpacity>
      </>
    );
  };

  //   const renderItem = ({ item }) => {
  //     return (
  //       <View style={styles.country}>
  //         <Image style={styles.flag} source={{ uri: item.flags.png }} />
  //         <View style={styles.countryFlag}>
  //           <Text style={styles.countryName}>{item.name.common}</Text>
  //           <Text>{item.flag}</Text>
  //         </View>
  //         <Text>{item.capital}</Text>
  //       </View>
  //     );
  //   };

  return (
    <>
      {loaded ? getData() : null}
      {console.log()}
      <FlatList
        style={styles.list}
        data={countries}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </>
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
  flag: {
    width: "auto",
    height: 200,
  },
});
