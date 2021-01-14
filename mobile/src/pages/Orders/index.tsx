import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, Alert, Image, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";

import { fetchOrders } from "../../services/api";

import { Order } from "../../@types/types";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
      .finally(() => setIsLoading(false));
  }, []);

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
            <TouchableWithoutFeedback key={order.id}>
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
