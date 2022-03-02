import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  // ActivityIndicator,
} from "react-native";
import CountryCard from "./CountryCard";

export default function List() {
  const [countries, setCountries] = useState([]);
  // const [loaded, setLoaded] = useState(true);
  const [displayCard, setDisplayCard] = useState(false);
  const [displayFlag, setDisplayFlag] = useState(false);
  const [selected, setSelected] = useState("");

  // const getData = () => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res);
  //       setCountries(res);
  //     });
  //   setLoaded((prev) => !prev);
  // };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  }, []);

  const handlePress = (index) => {
    setSelected(index);
    setDisplayCard(true);
    setDisplayFlag(false);
    return setTimeout(() => {
      setDisplayCard(false);
      setDisplayFlag(true);
    }, 3000);
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        {selected === index ? (
          displayCard ? (
            <CountryCard
              index={index}
              name={item.name.common}
              flag={item.flag}
              capital={item.capital}
            />
          ) : null
        ) : (
          <TouchableOpacity onPress={() => handlePress(index)}>
            <Image style={styles.flag} source={{ uri: item.flags.png }} />
          </TouchableOpacity>
        )}
        {displayFlag && selected === index ? (
          <TouchableOpacity onPress={() => handlePress(index)}>
            <Image style={styles.flag} source={{ uri: item.flags.png }} />
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  return (
    <>
      {/* {loaded ? (
        getData()
      ) : (
        <ActivityIndicator size="large" color="red" style={styles.loader} />
      )} */}
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
  flag: {
    width: "auto",
    height: 200,
  },
  loader: {
    margin: 30,
  },
});
