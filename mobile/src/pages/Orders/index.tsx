import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, Alert, Image, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";

import { fetchOrders } from "../../services/api";

import { Order } from "../../@types/types";

import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function Orders() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused(); /* Checks whether the component is being rendered */

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch((error) => {
        console.log(error);
        Alert.alert("Houve um erro ao buscar os pedidos!");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate("OrderDetails", {
      order /* The request as a route parameter */,
    });
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <View style={styles.content}>
            <Image
              style={styles.loadingImage}
              source={require("../../assets/loading.gif")}
            />
            <Text style={styles.loadingText}>Buscando pedidos..</Text>
          </View>
        ) : (
          orders.map((order) => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnPress(order)}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
  },

  loadingImage: {
    marginTop: "25%",
    alignItems: "center",
  },

  loadingText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: "#263238",
    fontFamily: "OpenSans_700Bold",
  },
});
